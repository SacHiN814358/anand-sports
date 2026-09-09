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
        <Badge variant="outline" className="bg-card text-card-foreground border border-border rounded-xl shadow-sm border-border text-muted-foreground">
          {brandName}
        </Badge>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-brand-accent glow-accent">
            {formatPrice(product.price)}
          </span>
          {isOutOfStock ? (
            <Badge variant="error" className="bg-red-500/10 text-red-400 border-red-500/20">
              Out of Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              In Stock
            </Badge>
          )}
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-muted-foreground text-base leading-relaxed">
        <p>{product.description || 'No description available for this product.'}</p>
      </div>

      {/* Variants (Mocked for now) */}
      {!isOutOfStock && mockVariants.map((variantGroup) => (
        <div key={variantGroup.type} className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
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
                    "px-4 py-2 rounded-md border text-sm font-medium transition-all",
                    isActive 
                      ? "bg-brand-accent/10 border-brand-accent text-brand-accent" 
                      : "bg-muted border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
      <div className="pt-6 border-t border-border space-y-6">
        {!isOutOfStock && (
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Quantity Selector */}
            <div className="flex items-center h-12 bg-muted border border-border rounded-md">
              <button 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-12 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="w-12 text-center text-foreground font-medium">
                {quantity}
              </div>
              <button 
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock_quantity}
                className="w-12 h-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button 
              size="lg" 
              className="w-full sm:w-auto flex-1 bg-brand-accent hover:bg-brand-accent/90 text-foreground h-12 text-base font-semibold shadow-[0_0_15px_rgba(255,107,0,0.4)]"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto h-12 text-base font-semibold border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="pt-8 mt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
          <div className="bg-card text-card-foreground border border-border rounded-xl shadow-sm rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              {Object.entries(product.specifications as Record<string, string>).map(([key, value], i) => (
                <div key={key} className={cn("flex px-4 py-3", i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent")}>
                  <span className="w-1/3 text-sm text-muted-foreground">{key}</span>
                  <span className="w-2/3 text-sm text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

