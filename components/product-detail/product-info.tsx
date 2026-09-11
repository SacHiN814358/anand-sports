'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ShoppingCart, Minus, Plus } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductWithRelations } from '@/types/database';
import { useCart } from '@/context/cart-context';

interface ProductInfoProps {
  product: ProductWithRelations;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeVariants, setActiveVariants] = useState<Record<string, string>>({});

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock_quantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem(product, null, quantity);
  };

  const categoryName = product.category?.name || 'Uncategorized';
  const brandName = product.brand?.name || 'Anand Sports';
  const isOutOfStock = product.stock_quantity <= 0;

  // Mock variants for demo purposes since they might not be fully structured in the DB yet
  const mockVariants = [
    { type: 'Size', options: ['S', 'M', 'L', 'XL'] },
    { type: 'Color', options: ['Black', 'Navy', 'Grey'] }
  ];

  return (
    <div className="flex flex-col space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href={`/category/${product.category?.slug || 'all'}`} className="hover:text-foreground transition-colors">
          {categoryName}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-muted-foreground line-clamp-1">{product.name}</span>
      </nav>

      <div className="space-y-4">
        <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-caps uppercase tracking-wider text-[11px] font-semibold">
          {brandName}
        </span>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-amber-700">
            {formatPrice(product.price)}
          </span>
          {isOutOfStock ? (
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold">
              Out of Stock
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              In Stock
            </span>
          )}
        </div>
      </div>

      <div className="prose max-w-none text-slate-600 text-base leading-relaxed">
        <p>{product.description || 'No description available for this product.'}</p>
      </div>

      {/* Variants (Mocked for now) */}
      {!isOutOfStock && mockVariants.map((variantGroup) => (
        <div key={variantGroup.type} className="space-y-3">
          <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wider">
            {variantGroup.type}
          </h3>
          <div className="flex flex-wrap gap-2">
            {variantGroup.options.map((option) => {
              const isActive = activeVariants[variantGroup.type] === option;
              return (
                <button
                  key={option}
                  onClick={() => setActiveVariants(prev => ({ ...prev, [variantGroup.type]: option }))}
                  className={cn(
                    "px-4 py-2 rounded-xl border text-sm font-medium transition-all",
                    isActive 
                      ? "bg-amber-50 border-amber-400 text-amber-800 font-semibold shadow-xs" 
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Actions */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        {!isOutOfStock && (
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Quantity Selector */}
            <div className="flex items-center h-12 bg-slate-50 border border-slate-200 rounded-xl">
              <button 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-12 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 disabled:opacity-50 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="w-12 text-center text-slate-900 font-semibold">
                {quantity}
              </div>
              <button 
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock_quantity}
                className="w-12 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 disabled:opacity-50 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button 
              className="w-full sm:w-auto flex-1 px-8 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-base shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 h-12 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 bg-white font-semibold text-base flex items-center justify-center shadow-xs transition-all active:scale-95"
            >
              Inquire Wholesale
            </Link>
          </div>
        )}
      </div>

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="pt-8 mt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Specifications</h3>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {Object.entries(product.specifications as Record<string, string>).map(([key, value], i) => (
                <div key={key} className={cn("flex px-4 py-3", i % 2 === 0 ? "bg-slate-50" : "bg-white")}>
                  <span className="w-1/3 text-sm text-slate-500">{key}</span>
                  <span className="w-2/3 text-sm text-slate-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

