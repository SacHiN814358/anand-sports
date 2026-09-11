'use client';

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-8 sm:mb-12">
          YOUR CART
        </h1>

        {items.length === 0 ? (
          <div className="bg-white text-slate-900 border border-[#E8E1D3] rounded-2xl shadow-sm p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
            <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {items.map((item) => {
                const product = item.product;
                const variant = item.variant;
                const variantId = variant?.id || null;
                const price = variant?.price_override ?? product.price;
                const stock = variant ? variant.stock_quantity : product.stock_quantity;
                const variantName = variant ? `${variant.variant_type}: ${variant.variant_value}` : null;
                
                return (
                  <div key={`${product.id}-${variantId || 'base'}`} className="bg-white text-slate-900 border border-[#E8E1D3] rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    {/* Image Placeholder */}
                    <div className="w-24 h-24 shrink-0 bg-[#F5F0E8] rounded-xl flex items-center justify-center border border-[#E8E1D3]">
                      <span className="text-xs text-stone-400 uppercase font-bold tracking-wider">Image</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${product.slug}`} className="hover:text-amber-600 transition-colors">
                        <h3 className="text-lg font-bold truncate text-slate-900">{product.name}</h3>
                      </Link>
                      <p className="text-sm text-slate-500 capitalize">{product.brand?.name || 'Brand'}</p>
                      {variantName && (
                        <p className="text-sm text-slate-500 mt-1">{variantName}</p>
                      )}
                      <div className="mt-2 text-amber-700 font-bold">
                        {formatPrice(price)}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4 sm:gap-6 self-stretch sm:self-auto justify-between sm:justify-end">
                      <div className="flex items-center gap-3 bg-[#FAF7F2] border border-[#E8E1D3] rounded-xl px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(product.id, variantId, item.quantity - 1)}
                          className="p-1 hover:text-amber-600 transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center font-bold text-slate-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, variantId, item.quantity + 1)}
                          className="p-1 hover:text-amber-600 transition-colors disabled:opacity-50"
                          disabled={item.quantity >= stock}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="font-bold text-lg hidden sm:block w-24 text-right text-slate-900">
                        {formatPrice(price * item.quantity)}
                      </div>

                      <button 
                        onClick={() => removeItem(product.id, variantId)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-white text-slate-900 border border-[#E8E1D3] rounded-2xl shadow-sm p-6 sm:p-8 sticky top-24">
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-6 text-slate-900">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Shipping</span>
                    <span className="text-slate-400 italic">Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-[#E8E1D3] pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold uppercase text-slate-900">Total</span>
                    <span className="text-xl sm:text-2xl font-bold text-amber-700">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 text-right">Taxes included where applicable</p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button size="lg" variant="default" className="w-full py-6 text-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md">
                    Proceed to Checkout
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

