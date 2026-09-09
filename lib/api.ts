import { brands, categories, products, productImages, productVariants, banners, testimonials } from './mock-data';
import { Brand, Category, Product, ProductImage, ProductVariant, ProductWithRelations, Banner, Testimonial, ProductFilterParams } from '@/types/database';

// Helper to join product with its relations
function enrichProduct(product: Product): ProductWithRelations {
  const category = categories.find(c => c.id === product.category_id)!;
  const brand = brands.find(b => b.id === product.brand_id) || null;
  const images = productImages.filter(img => img.product_id === product.id).sort((a, b) => a.display_order - b.display_order);
  const variants = productVariants.filter(v => v.product_id === product.id);
  return { ...product, category, brand, images, variants };
}

// ==========================================
// PRODUCTS
// ==========================================

export async function getProducts(filters?: ProductFilterParams): Promise<{
  items: ProductWithRelations[];
  total: number;
  page: number;
  totalPages: number;
}> {
  let filtered = products.filter(p => p.is_active);

  // Apply filters
  if (filters?.category_slug) {
    const cat = categories.find(c => c.slug === filters.category_slug);
    if (cat) filtered = filtered.filter(p => p.category_id === cat.id);
  }

  if (filters?.brand_slug) {
    const brand = brands.find(b => b.slug === filters.brand_slug);
    if (brand) filtered = filtered.filter(p => p.brand_id === brand.id);
  }

  if (filters?.min_price !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.min_price!);
  }

  if (filters?.max_price !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.max_price!);
  }

  if (filters?.in_stock) {
    filtered = filtered.filter(p => p.stock_quantity > 0);
  }

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      categories.find(c => c.id === p.category_id)?.name.toLowerCase().includes(search) ||
      brands.find(b => b.id === p.brand_id)?.name.toLowerCase().includes(search)
    );
  }

  // Sort
  switch (filters?.sort) {
    case 'price_asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price_desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    case 'popularity':
    default:
      // Featured first, then by created_at
      filtered.sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
  }

  // Paginate
  const page = filters?.page || 1;
  const limit = filters?.limit || 12;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paged = filtered.slice(start, start + limit);

  return {
    items: paged.map(enrichProduct),
    total,
    page,
    totalPages,
  };
}

export async function getProductBySlug(slug: string): Promise<ProductWithRelations | null> {
  const product = products.find(p => p.slug === slug && p.is_active);
  if (!product) return null;
  return enrichProduct(product);
}

export async function getFeaturedProducts(limit: number = 8): Promise<ProductWithRelations[]> {
  return products
    .filter(p => p.is_featured && p.is_active)
    .slice(0, limit)
    .map(enrichProduct);
}

export async function getRelatedProducts(
  productId: string,
  categoryId: string,
  limit: number = 4
): Promise<ProductWithRelations[]> {
  return products
    .filter(p => p.category_id === categoryId && p.id !== productId && p.is_active)
    .slice(0, limit)
    .map(enrichProduct);
}

export async function searchProducts(query: string): Promise<ProductWithRelations[]> {
  const q = query.toLowerCase();
  return products
    .filter(p => p.is_active && (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    ))
    .slice(0, 10)
    .map(enrichProduct);
}

// ==========================================
// CATEGORIES
// ==========================================

export async function getCategories(): Promise<Category[]> {
  return [...categories];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return categories.find(c => c.slug === slug) || null;
}

// ==========================================
// BRANDS
// ==========================================

export async function getBrands(): Promise<Brand[]> {
  return [...brands];
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  return brands.find(b => b.slug === slug) || null;
}

// ==========================================
// BANNERS
// ==========================================

export async function getBanners(): Promise<Banner[]> {
  return banners
    .filter(b => b.is_active)
    .sort((a, b) => a.display_order - b.display_order);
}

// ==========================================
// TESTIMONIALS
// ==========================================

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials.filter(t => t.is_active);
}

// ==========================================
// PRICE RANGE (for filter UI)
// ==========================================

export async function getPriceRange(): Promise<{ min: number; max: number }> {
  const prices = products.filter(p => p.is_active).map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
