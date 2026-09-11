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

const categoryImageMap: Record<string, string> = {
  cricket: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
  badminton: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
  football: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
  athletics: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
  basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  volleyball: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
  'table-tennis': 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800&q=80',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  'board-games': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80',
  'indoor-games': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
  'cones-hurdles-agility': '/images/products/agility-cones-hurdles.jpg',
  'sports-supports': 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80',
};

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, null, 1);
  };

  const brandName = product.brand?.name || 'Anand Sports';
  const catSlug = product.category?.slug || '';
  const imgUrl = product.images?.[0]?.image_url?.startsWith('http') 
    ? product.images[0].image_url 
    : (categoryImageMap[catSlug] || 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80');

  return (
    <Link 
      href={`/product/${product.slug}`}
      className={cn(
        "bg-white text-slate-900 border border-[#E8E1D3] hover:border-amber-400 hover:shadow-lg rounded-2xl group flex flex-col overflow-hidden transition-all duration-300 shadow-sm",
        className
      )}
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
        <img
          src={imgUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {product.is_featured ? (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-caps uppercase tracking-wider text-[10px] font-semibold shadow-sm">
              Featured
            </span>
          ) : (
            <div />
          )}
          
          {product.stock_quantity > 0 ? (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-caps uppercase tracking-wider font-semibold">
              In Stock
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-caps uppercase tracking-wider font-semibold">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-4 flex-grow">
        <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-1">
          {brandName}
        </span>
        
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-amber-600 transition-colors mb-1">
          {product.name}
        </h3>
        
        <span className="text-xs text-slate-500 mb-3">
          {product.category?.name || 'General'}
        </span>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-amber-700">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

