import { getProductBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import { ImageGallery } from '@/components/product-detail/image-gallery';
import { ProductInfo } from '@/components/product-detail/product-info';
import { RelatedProducts } from '@/components/product-detail/related-products';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Anand Sports`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();
  
  return (
    <div className="section-padding py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
        <Separator className="my-12 md:my-16 border-border" />
        <RelatedProducts productId={product.id} categoryId={product.category_id} />
      </div>
    </div>
  );
}
