import { getCategories, getProducts, getBrands, getCategoryBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import { CategoryProductsClient } from './category-products-client';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = await getCategoryBySlug(params.category);
  if (!category) return { title: 'Category Not Found' };
  return {
    title: `${category.name} | Anand Sports`,
    description: `Browse our ${category.name} collection.`,
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = await getCategoryBySlug(params.category);
  if (!category) notFound();
  
  const [productsData, categories, brands] = await Promise.all([
    getProducts({ category_slug: params.category }),
    getCategories(),
    getBrands(),
  ]);
  
  return (
    <div className="section-padding py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <CategoryProductsClient 
          initialProducts={productsData.items}
          totalCount={productsData.total}
          category={category}
          categories={categories}
          brands={brands}
        />
      </div>
    </div>
  );
}
