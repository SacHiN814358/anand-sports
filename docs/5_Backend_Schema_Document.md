# Backend Schema Document
## Anand Sports — E-commerce & Wholesale Platform

Database: **PostgreSQL** (via Supabase). Schema below written in Prisma-style notation for clarity — translate directly to SQL `CREATE TABLE` statements or a Prisma `schema.prisma` file.

---

## 1. Entity Relationship Overview

```
users ──< addresses
users ──< orders ──< order_items >── products
users ──< wholesale_inquiries ──< inquiry_items >── products
users ──< wishlists >── products
categories ──< products
brands ──< products
products ──< product_variants
products ──< product_images
orders ──< payments
```

---

## 2. Tables

### 2.1 `users`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | default `gen_random_uuid()` |
| email | text, unique | nullable if phone-only signup |
| phone | text, unique | nullable if email-only signup |
| full_name | text | |
| password_hash | text | managed by Supabase Auth (may live in `auth.users` instead — see note below) |
| role | enum('customer','retailer','admin') | default `'customer'` |
| business_name | text, nullable | for retailers |
| gst_number | text, nullable | for retailers |
| retailer_status | enum('pending','verified','rejected'), nullable | for retailers only |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | |

> **Note:** If using Supabase Auth, core auth fields (email, password) live in the managed `auth.users` table. Create a `public.profiles` table (1:1 with `auth.users.id`) holding `role`, `business_name`, `gst_number`, `retailer_status`, `full_name`, `phone`. Adjust naming accordingly — logic is identical either way.

### 2.2 `addresses`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| user_id | uuid, FK → users.id | nullable (guest orders may store address inline on order instead) |
| label | text | e.g. "Home", "Shop" |
| full_name | text | |
| phone | text | |
| line1 | text | |
| line2 | text, nullable | |
| city | text | |
| state | text | |
| pincode | text | |
| is_default | boolean | default false |

### 2.3 `brands`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| name | text, unique | e.g. "Yonex", "Nivia", "Cosco" |
| logo_url | text, nullable | |
| slug | text, unique | |

### 2.4 `categories`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| name | text, unique | e.g. "Cricket", "Badminton" |
| slug | text, unique | |
| image_url | text, nullable | for category tile display |
| parent_id | uuid, FK → categories.id, nullable | allows subcategories if needed later |

### 2.5 `products`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| name | text | |
| slug | text, unique | URL-friendly |
| description | text | |
| specifications | jsonb, nullable | flexible key-value specs (e.g. `{"weight":"250g","material":"Carbon"}`) |
| category_id | uuid, FK → categories.id | |
| brand_id | uuid, FK → brands.id, nullable | |
| price | numeric(10,2) | base price (INR) |
| wholesale_price | numeric(10,2), nullable | shown only to retailer role (Phase 2 — nullable in MVP if not yet used) |
| stock_quantity | integer | default 0 |
| sku | text, unique, nullable | |
| is_featured | boolean | default false |
| is_active | boolean | default true (soft "published" toggle) |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**Indexes:** `category_id`, `brand_id`, `slug` (unique), full-text search index on `name` (for search feature).

### 2.6 `product_variants` (optional — for size/color)
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| product_id | uuid, FK → products.id | |
| variant_type | text | e.g. "Size", "Color" |
| variant_value | text | e.g. "L", "Red" |
| price_override | numeric(10,2), nullable | if variant changes price |
| stock_quantity | integer | default 0 |
| sku | text, nullable | |

### 2.7 `product_images`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| product_id | uuid, FK → products.id | |
| image_url | text | |
| display_order | integer | default 0 |
| alt_text | text, nullable | |

### 2.8 `orders`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| order_number | text, unique | human-readable, e.g. "AS-2025-0001" |
| user_id | uuid, FK → users.id, nullable | nullable for guest checkout |
| guest_name | text, nullable | used if user_id is null |
| guest_phone | text, nullable | |
| guest_email | text, nullable | |
| shipping_address | jsonb | snapshot of address at time of order (don't rely on live FK — address may change later) |
| subtotal | numeric(10,2) | |
| shipping_fee | numeric(10,2) | default 0 |
| total | numeric(10,2) | |
| payment_method | enum('razorpay','cod') | |
| payment_status | enum('pending','paid','failed','refunded') | default `'pending'` |
| order_status | enum('pending','confirmed','shipped','delivered','cancelled') | default `'pending'` |
| notes | text, nullable | customer notes |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**Indexes:** `user_id`, `order_status`, `created_at` (for admin sorting/filtering).

### 2.9 `order_items`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| order_id | uuid, FK → orders.id | |
| product_id | uuid, FK → products.id | |
| variant_id | uuid, FK → product_variants.id, nullable | |
| product_name_snapshot | text | preserve name at time of order |
| price_snapshot | numeric(10,2) | preserve price at time of order |
| quantity | integer | |
| line_total | numeric(10,2) | |

### 2.10 `payments`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| order_id | uuid, FK → orders.id | |
| razorpay_order_id | text, nullable | |
| razorpay_payment_id | text, nullable | |
| razorpay_signature | text, nullable | for verification |
| amount | numeric(10,2) | |
| status | enum('created','authorized','captured','failed','refunded') | |
| created_at | timestamptz | |

### 2.11 `wholesale_inquiries`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| retailer_id | uuid, FK → users.id | |
| status | enum('pending','contacted','quoted','closed') | default `'pending'` |
| notes | text, nullable | retailer's submitted notes |
| admin_notes | text, nullable | internal notes, not visible to retailer |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### 2.12 `inquiry_items`
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| inquiry_id | uuid, FK → wholesale_inquiries.id | |
| product_id | uuid, FK → products.id | |
| quantity_requested | integer | |

### 2.13 `wishlists` (Phase 2, optional in MVP)
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| user_id | uuid, FK → users.id | |
| product_id | uuid, FK → products.id | |
| created_at | timestamptz | |

### 2.14 `banners` (admin-managed homepage content)
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| image_url | text | |
| title | text, nullable | |
| link_url | text, nullable | |
| display_order | integer | |
| is_active | boolean | default true |

### 2.15 `testimonials` (carried over from existing site)
| Column | Type | Notes |
|---|---|---|
| id | uuid, PK | |
| customer_name | text | |
| rating | integer | 1–5 |
| content | text | |
| image_url | text, nullable | |
| is_active | boolean | default true |

---

## 3. Row-Level Security (Supabase RLS) — Key Policies

- `products`, `categories`, `brands`, `banners`, `testimonials`: **public read**, **admin-only write**
- `orders`, `order_items`, `payments`: user can **read only their own** orders (`user_id = auth.uid()`); admin can read/write all
- `wholesale_inquiries`, `inquiry_items`: retailer can **read/write only their own**; admin can read/write all
- `addresses`, `wishlists`: user can **read/write only their own**
- `profiles`/`users`: user can read/update **only their own row**; admin can read/update all; `role` field itself should NOT be user-editable (only admin can change roles)

---

## 4. Notes for the AI Coding Agent
- Use UUIDs for all primary keys (Supabase default, avoids sequential ID guessing).
- Always snapshot price/name into `order_items` at time of purchase — never join live to `products` for historical order display (prices/names change over time).
- Use `jsonb` for `shipping_address` on orders (not a live FK) so historical orders remain accurate even if a user edits/deletes a saved address later.
- Enforce stock decrement transactionally when an order is placed (use a Postgres transaction or Supabase Edge Function) to avoid overselling under concurrent orders.
- Seed data needed for development: at least the 13 categories and ~15 brands listed in the PRD, plus 20–30 sample products across categories for realistic testing.
