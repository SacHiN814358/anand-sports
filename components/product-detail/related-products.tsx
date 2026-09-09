import React from 'react';
import { getRelatedProducts } from '@/lib/api';
import { ProductCard } from '@/components/products/product-card';
import { ProductGrid } from '@/components/products/product-grid';

interface RelatedProductsProps {
  productId: string;
  categoryId: string;
}

export async function RelatedProducts({ productId, categoryId }: RelatedProductsProps) {
  const relatedProducts = await getRelatedProducts(productId, categoryId, 4);

  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-t border-border mt-16">
      <div className="mb-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
          You May Also Like
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Similar Products
        </h3>
      </div>
      
      <ProductGrid className="grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </section>
  );
}

