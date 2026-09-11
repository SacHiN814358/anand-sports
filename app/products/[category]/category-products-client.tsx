'use client';

import { useState, useEffect } from 'react';
import { ProductGrid } from '@/components/products/product-grid';
import { FilterSidebar } from '@/components/products/filter-sidebar';
import { ProductCard } from '@/components/products/product-card';
import { FilterDrawer } from '@/components/products/filter-drawer';
import { SortDropdown } from '@/components/products/sort-dropdown';
import { getProducts } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Product, ProductFilterParams, Category, Brand, ProductWithRelations } from '@/types/database';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  initialProducts: ProductWithRelations[];
  totalCount: number;
  category: Category;
  categories: Category[];
  brands: Brand[];
}

export function CategoryProductsClient({ initialProducts, totalCount: initialTotal, category, categories, brands }: Props) {
  const router = useRouter();
  
  const [products, setProducts] = useState<ProductWithRelations[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(initialTotal);

  const [filters, setFilters] = useState<ProductFilterParams>({
    category_slug: category.slug,
    sort: 'newest',
  });

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    
    async function fetchProductsData() {
      setLoading(true);
      try {
        const data = await getProducts(filters);
        setProducts(data.items);
        setTotalCount(data.total);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductsData();
  }, [filters, isFirstRender]);

  const handleFilterChange = (newFilters: Partial<ProductFilterParams>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({ category_slug: category.slug, sort: 'newest' });
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            <span className="text-muted-foreground block text-2xl md:text-3xl">CATEGORY</span>
            {category.name}
          </h1>
          <p className="text-muted-foreground mt-2">Showing {totalCount} results</p>
        </div>
        <div className="flex items-center gap-4 self-start md:self-auto">
          <FilterDrawer categories={categories} brands={brands} currentFilters={filters} onFilterChange={handleFilterChange} className="md:hidden" />
          <SortDropdown currentSort={filters.sort || 'newest'} onSortChange={(val) => handleFilterChange({ sort: val as any })} />
        </div>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 shrink-0">
          <FilterSidebar categories={categories} brands={brands} currentFilters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1 min-w-0">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : products.length > 0 ? (
            <ProductGrid>{products.map((p) => <ProductCard key={p.id} product={p} />)}</ProductGrid>
          ) : (
            <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-sm p-12 text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">We couldn't find any products matching your current filters.</p>
              <Button onClick={clearFilters} variant="default" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md">Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
