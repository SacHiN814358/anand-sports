# Technical Requirements Document (TRD)
## Anand Sports — E-commerce & Wholesale Platform

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend Framework | **Next.js 14+ (React, App Router)** | SSR/SSG for SEO on product pages; works well in Cursor/Lovable/Bolt/Replit |
| Styling | **Tailwind CSS** | Fast to build, easy for AI agents to generate consistent UI |
| Backend | **Next.js API Routes / Route Handlers** | Avoids running a separate backend server; simplest for AI-tool deployment |
| Database | **PostgreSQL (via Supabase)** | Relational data fits orders/products/inventory well |
| ORM | **Prisma** (or Supabase JS client directly) | Type-safe queries, easy schema migrations |
| Auth | **Supabase Auth** (email/password + phone OTP) | Built-in, avoids custom auth security risk |
| File/Image Storage | **Supabase Storage** (or Cloudinary if richer image transforms needed) | Product images, banners |
| Payments | **Razorpay** (Checkout + Orders API) | India-first, supports UPI/cards/netbanking/COD flag |
| Hosting | **Vercel** (frontend + API routes) | Native Next.js support, free tier sufficient for MVP |
| Transactional Email | **Resend** or Supabase's built-in email | Order confirmations, inquiry notifications |
| Analytics | **Vercel Analytics** or Google Analytics 4 | Basic traffic/conversion tracking |

> **Assumption:** This stack is chosen for maximum compatibility with AI coding tools (Lovable and Bolt default well to Supabase; Cursor/Replit/ChatGPT handle Next.js + Prisma equally well). If you have a preferred stack already (e.g., MERN, Django), say so and I'll re-issue this document.

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   Client (Browser)                │
│         Next.js Frontend (React, Tailwind)         │
└───────────────────┬─────────────────────────────┘
                     │ HTTPS
┌───────────────────▼─────────────────────────────┐
│         Next.js API Routes / Route Handlers        │
│  /api/products  /api/orders  /api/inquiries  etc.  │
└───────┬───────────────────┬──────────────────┬───┘
        │                   │                  │
┌───────▼──────┐   ┌────────▼────────┐  ┌──────▼──────┐
│   Supabase    │   │    Razorpay      │  │   Resend    │
│ (Postgres,    │   │  (Payments API)  │  │  (Email)    │
│ Auth, Storage)│   └─────────────────┘  └─────────────┘
└───────────────┘
```

- **Rendering strategy:** Product listing/detail pages use SSR or ISR (Incremental Static Regeneration) for SEO. Cart/checkout/account pages are client-rendered (CSR) since they're user-specific and dynamic.
- **Admin dashboard** is a separate route group (`/admin/*`) protected by role-based auth middleware, sharing the same Next.js app (not a separate deployment) to keep it simple for MVP.

---

## 3. User Roles & Access Control

| Role | Access |
|---|---|
| **Guest** | Browse, search, add to cart, checkout as guest |
| **Customer** (registered) | Above + order history, saved addresses, wishlist |
| **Retailer** (registered, `is_retailer=true`) | Above + wholesale inquiry submission & status tracking |
| **Admin** | Full dashboard access: products, orders, inquiries, content |

Auth implemented via Supabase Auth with a `role` field on the `users` table (or a separate `user_roles` table — see Backend Schema doc). Route protection via Next.js middleware checking session + role.

---

## 4. Non-Functional Requirements

### 4.1 Performance
- Product pages should achieve Lighthouse Performance score ≥ 80 on mobile
- Images served in modern formats (WebP/AVIF) with responsive sizing via Next.js `<Image>`
- Target Time to First Byte (TTFB) < 600ms on hosted product pages

### 4.2 Security
- All admin routes require authenticated session + `role = admin` check server-side (never trust client-side role checks alone)
- Payment handled via Razorpay Checkout (no raw card data touches our server — PCI scope minimized)
- Input validation on all forms (client + server-side) using a schema library (e.g., Zod)
- Rate limiting on public API routes (inquiry/contact forms) to prevent spam/abuse
- Environment secrets (API keys) stored in `.env` / Vercel environment variables, never committed to source control

### 4.3 SEO
- Server-rendered product/category pages with proper meta tags, Open Graph tags, and structured data (Product schema.org JSON-LD)
- Auto-generated `sitemap.xml` and `robots.txt`
- Clean URL structure: `/products/[category]/[product-slug]`

### 4.4 Scalability
- MVP expected load: low-to-moderate traffic (regional business). Postgres + Vercel serverless functions comfortably handle this without special scaling work.
- Design schema to support future growth (indexes on frequently queried fields — see Backend Schema doc).

### 4.5 Accessibility
- Semantic HTML, alt text on all product images, sufficient color contrast (WCAG AA baseline), keyboard-navigable menus and forms

---

## 5. Third-Party Integrations

| Integration | Purpose | Notes |
|---|---|---|
| Razorpay | Payment processing | Test mode keys during dev; live keys at launch |
| Resend / Supabase Email | Transactional emails | Order confirmation, inquiry received, status updates |
| Google Maps Embed | Store location on Contact page | Static embed, no API key needed for basic embed |
| Google Analytics 4 | Traffic/conversion tracking | Optional but recommended |
| WhatsApp Click-to-Chat link | Quick contact | `wa.me/<number>` link, no API integration needed for MVP |

---

## 6. Environment Variables (expected)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=                 # Postgres connection string (Prisma)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

---

## 7. API Design Conventions

- RESTful routes under `/api/*`, JSON request/response
- Standard response shape: `{ success: boolean, data?: T, error?: string }`
- Status codes: 200 (success), 201 (created), 400 (validation error), 401 (unauthenticated), 403 (forbidden), 404 (not found), 500 (server error)
- Pagination for list endpoints: `?page=1&limit=20`, response includes `{ items, total, page, totalPages }`

### Core API Endpoints (MVP)
```
GET    /api/products                 # list + filter + search
GET    /api/products/[slug]          # single product detail
GET    /api/categories               # list categories
GET    /api/brands                   # list brands

POST   /api/cart                     # add item (or client-side cart state, synced on checkout)
POST   /api/orders                   # create order (checkout)
GET    /api/orders/[id]              # order detail
GET    /api/orders/user/[userId]     # order history

POST   /api/inquiries                # submit wholesale inquiry
GET    /api/inquiries/user/[userId]  # retailer's own inquiries

POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout

# Admin-protected
POST   /api/admin/products
PUT    /api/admin/products/[id]
DELETE /api/admin/products/[id]
GET    /api/admin/orders
PUT    /api/admin/orders/[id]/status
GET    /api/admin/inquiries
PUT    /api/admin/inquiries/[id]
```

---

## 8. Testing Requirements
- Unit tests for critical business logic (cart total calc, order creation) — Vitest/Jest
- Manual QA checklist for checkout flow (see Implementation Plan doc)
- Payment integration tested thoroughly in Razorpay test mode before go-live
