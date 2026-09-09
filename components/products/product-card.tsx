'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductWithRelations } from '@/types/database';
import { useCart } from '@/context/cart-context';

interface ProductCardProps {
  product: ProductWithRelations;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, null, 1);
  };

  const initial = product.name ? product.name.charAt(0).toUpperCase() : 'A';
  const brandName = product.brand?.name || 'Anand Sports';

  return (
    <Link 
      href={`/product/${product.slug}`}
      className={cn(
        "bg-card text-card-foreground border border-border rounded-xl shadow-sm-hover group flex flex-col overflow-hidden rounded-2xl transition-all duration-300",
        className
      )}
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] bg-card overflow-hidden">
        {/* Gradient Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-surface to-black/50 flex items-center justify-center text-4xl font-bold text-foreground/20 group-hover:scale-105 transition-transform duration-500">
          {initial}
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {product.is_featured ? (
            <Badge variant="default" className="bg-brand-accent text-foreground border-none shadow-md">
              Featured
            </Badge>
          ) : (
            <div />
          )}
          
          {product.stock_quantity > 0 ? (
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 backdrop-blur-md">
              In Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 backdrop-blur-md">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-4 flex-grow">
        <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {brandName}
        </span>
        
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-brand-accent transition-colors mb-1">
          {product.name}
        </h3>
        
        <span className="text-xs text-foreground/30 mb-3">
          {product.category?.name || 'General'}
        </span>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-brand-accent glow-accent">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

