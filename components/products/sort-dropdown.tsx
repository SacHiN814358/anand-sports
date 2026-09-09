'use client';

import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SortDropdownProps {
  currentSort: string;
  onSortChange: (sort: string) => void;
  className?: string;
}

export function SortDropdown({ currentSort, onSortChange, className }: SortDropdownProps) {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <ArrowUpDown className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
      <select
        value={currentSort || 'popular'}
        onChange={(e) => onSortChange(e.target.value)}
        className="h-10 pl-9 pr-8 appearance-none bg-card border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent cursor-pointer min-w-[160px]"
      >
        <option value="popular">Popular</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
      <div className="absolute right-3 pointer-events-none text-muted-foreground">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

