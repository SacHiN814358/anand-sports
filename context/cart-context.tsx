'use client'

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { ProductWithRelations, ProductVariant } from '@/types/database'

export type CartItem = {
  product: ProductWithRelations
  variant: ProductVariant | null
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: ProductWithRelations, variant?: ProductVariant | null, quantity?: number) => void
  removeItem: (productId: string, variantId?: string | null) => void
  updateQuantity: (productId: string, variantId: string | null, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  getItemQuantity: (productId: string, variantId?: string | null) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'anand-sports-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // Load from local storage
  useEffect(() => {
    setIsMounted(true)
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Failed to parse cart from local storage', error)
    }
  }, [])

  // Save to local storage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isMounted])

  const addItem = (product: ProductWithRelations, variant: ProductVariant | null = null, quantity: number = 1) => {
    setItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.variant?.id === variant?.id
      )

      if (existingItemIndex >= 0) {
        const newItems = [...prev]
        newItems[existingItemIndex].quantity += quantity
        return newItems
      }

      return [...prev, { product, variant, quantity }]
    })
  }

  const removeItem = (productId: string, variantId: string | null = null) => {
    setItems((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.variant?.id === variantId)
    ))
  }

  const updateQuantity = (productId: string, variantId: string | null, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variantId)
      return
    }

    setItems((prev) => {
      return prev.map((item) => {
        if (item.product.id === productId && item.variant?.id === variantId) {
          return { ...item, quantity }
        }
        return item
      })
    })
  }

  const clearCart = () => {
    setItems([])
  }

  const getItemQuantity = (productId: string, variantId: string | null = null) => {
    const item = items.find((i) => i.product.id === productId && i.variant?.id === variantId)
    return item ? item.quantity : 0
  }

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => {
      const price = item.variant?.price_override ?? item.product.price ?? 0
      return total + (Number(price) * item.quantity)
    }, 0)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

