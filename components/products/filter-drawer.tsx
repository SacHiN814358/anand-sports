'use client';

import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Category, Brand, ProductFilterParams } from '@/types/database';
import { FilterSidebar } from './filter-sidebar';

interface FilterDrawerProps {
  categories: Category[];
  brands: Brand[];
  currentFilters: ProductFilterParams;
  onFilterChange: (filters: ProductFilterParams) => void;
  className?: string;
}

export function FilterDrawer({ categories, brands, currentFilters, onFilterChange, className }: FilterDrawerProps) {
  const [open, setOpen] = useState(false);

  const handleFilterChange = (newFilters: ProductFilterParams) => {
    onFilterChange(newFilters);
    // Optionally close drawer on filter apply:
    // setOpen(false);
  };

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden bg-card border-border text-foreground hover:bg-muted">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-background border-r border-border p-0 overflow-y-auto">
        <SheetHeader className="p-6 pb-2 text-left">
          <SheetTitle className="text-foreground flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-brand-accent" />
            Filters
          </SheetTitle>
        </SheetHeader>
        
        <div className="p-6 pt-0">
          {/* We reuse the internal logic of FilterSidebar but without the bg-card text-card-foreground border border-border rounded-xl shadow-sm sticky wrapper styles */}
          <FilterSidebar 
            categories={categories} 
            brands={brands} 
            currentFilters={currentFilters} 
            onFilterChange={handleFilterChange}
            className="!p-0 !bg-transparent !border-none !rounded-none !sticky-none !top-auto mt-6"
          />
        </div>
        
        <div className="sticky bottom-0 p-6 bg-background/80 backdrop-blur-md border-t border-border">
          <Button 
            className="w-full bg-brand-accent hover:bg-brand-accent/90 text-foreground"
            onClick={() => setOpen(false)}
          >
            Apply & Close
          </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

