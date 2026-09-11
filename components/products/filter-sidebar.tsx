'use client';

import React, { useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Category, Brand, ProductFilterParams } from '@/types/database';

interface FilterSidebarProps {
  categories: Category[];
  brands: Brand[];
  currentFilters: ProductFilterParams;
  onFilterChange: (filters: ProductFilterParams) => void;
  className?: string;
}

export function FilterSidebar({ 
  categories, 
  brands, 
  currentFilters, 
  onFilterChange,
  className 
}: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<ProductFilterParams>(currentFilters);

  // Sync local filters with props when they change externally
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  const handleApply = (newFilters: ProductFilterParams) => {
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    handleApply({});
  };

  return (
    <div className={cn("bg-white text-slate-900 border border-slate-200 shadow-sm p-6 rounded-2xl sticky top-24", className)}>
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
        <SlidersHorizontal className="h-5 w-5 text-amber-600" />
        <h2 className="text-lg font-semibold text-slate-900 tracking-wide">FILTERS</h2>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => handleApply({ ...localFilters, category_slug: undefined })}
              className={cn(
                "w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                !localFilters.category_slug ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleApply({ ...localFilters, category_slug: cat.slug })}
                className={cn(
                  "w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                  localFilters.category_slug === cat.slug ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Brands</h3>
          <div className="space-y-2">
            <button
              onClick={() => handleApply({ ...localFilters, brand_slug: undefined })}
              className={cn(
                "w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                !localFilters.brand_slug ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              All Brands
            </button>
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleApply({ ...localFilters, brand_slug: brand.slug })}
                className={cn(
                  "w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                  localFilters.brand_slug === brand.slug ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Price Range</h3>
          <div className="flex items-center gap-2">
            <Input 
              type="number" 
              placeholder="Min" 
              className="bg-muted border-border text-foreground placeholder:text-foreground/20 h-9"
              value={localFilters.min_price || ''}
              onChange={(e) => setLocalFilters({ ...localFilters, min_price: e.target.value ? Number(e.target.value) : undefined })}
              onBlur={() => handleApply(localFilters)}
            />
            <span className="text-muted-foreground">-</span>
            <Input 
              type="number" 
              placeholder="Max" 
              className="bg-muted border-border text-foreground placeholder:text-foreground/20 h-9"
              value={localFilters.max_price || ''}
              onChange={(e) => setLocalFilters({ ...localFilters, max_price: e.target.value ? Number(e.target.value) : undefined })}
              onBlur={() => handleApply(localFilters)}
            />
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5 bg-muted border border-border rounded transition-colors group-hover:border-white/40">
              <input 
                type="checkbox" 
                className="opacity-0 absolute inset-0 cursor-pointer"
                checked={localFilters.in_stock || false}
                onChange={(e) => handleApply({ ...localFilters, in_stock: e.target.checked })}
              />
              {localFilters.in_stock && (
                <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">In Stock Only</span>
          </label>
        </div>

        {/* Clear All */}
        <div className="pt-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={clearFilters}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
}

