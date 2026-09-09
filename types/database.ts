// Types matching the exact PostgreSQL schema from 5_Backend_Schema_Document.md
// Field names and types are kept consistent for future Supabase swap

export type UserRole = 'customer' | 'retailer' | 'admin';
export type RetailerStatus = 'pending' | 'verified' | 'rejected';
export type PaymentMethod = 'razorpay' | 'cod';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
export type InquiryStatus = 'pending' | 'contacted' | 'quoted' | 'closed';
export type RazorpayPaymentStatus = 'created' | 'authorized' | 'captured' | 'failed' | 'refunded';

export interface User {
  id: string;
  email: string | null;
  phone: string | null;
  full_name: string;
  role: UserRole;
  business_name: string | null;
  gst_number: string | null;
  retailer_status: RetailerStatus | null;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  user_id: string | null;
  label: string;
  full_name: string;
  phone: string;
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  pincode: string;
  is_default: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo_url: string | null;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  parent_id: string | null;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  specifications: Record<string, string> | null;
  category_id: string;
  brand_id: string | null;
  price: number;
  wholesale_price: number | null;
  stock_quantity: number;
  sku: string | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_type: string;
  variant_value: string;
  price_override: number | null;
  stock_quantity: number;
  sku: string | null;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  display_order: number;
  alt_text: string | null;
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string | null;
  guest_name: string | null;
  guest_phone: string | null;
  guest_email: string | null;
  shipping_address: Record<string, string>;
  subtotal: number;
  shipping_fee: number;
  total: number;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  order_status: OrderStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  variant_id: string | null;
  product_name_snapshot: string;
  price_snapshot: number;
  quantity: number;
  line_total: number;
}

export interface Payment {
  id: string;
  order_id: string;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  razorpay_signature: string | null;
  amount: number;
  status: RazorpayPaymentStatus;
  created_at: string;
}

export interface WholesaleInquiry {
  id: string;
  retailer_id: string;
  status: InquiryStatus;
  notes: string | null;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface InquiryItem {
  id: string;
  inquiry_id: string;
  product_id: string;
  quantity_requested: number;
}

export interface Wishlist {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}

export interface Banner {
  id: string;
  image_url: string;
  title: string | null;
  link_url: string | null;
  display_order: number;
  is_active: boolean;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  rating: number;
  content: string;
  image_url: string | null;
  is_active: boolean;
}

// Derived/joined types for frontend convenience
export interface ProductWithRelations extends Product {
  category: Category;
  brand: Brand | null;
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface CartItem {
  product: ProductWithRelations;
  variant: ProductVariant | null;
  quantity: number;
}

export interface ProductFilterParams {
  category_slug?: string;
  brand_slug?: string;
  min_price?: number;
  max_price?: number;
  in_stock?: boolean;
  search?: string;
  sort?: 'price_asc' | 'price_desc' | 'newest' | 'popularity';
  page?: number;
  limit?: number;
}
