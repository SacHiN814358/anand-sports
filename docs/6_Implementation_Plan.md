# Implementation Plan
## Anand Sports — E-commerce & Wholesale Platform

This plan is structured in phases so an AI coding agent (Cursor, Claude Code, Lovable, Bolt, Replit) can build incrementally and testably, rather than attempting the whole app in one pass.

---

## Phase 0: Project Setup (Day 1)
- [ ] Initialize Next.js 14 project (App Router, TypeScript, Tailwind CSS)
- [ ] Set up Supabase project (database, auth, storage bucket for images)
- [ ] Configure Prisma (or Supabase client) and run initial migration using schema from Backend Schema Document
- [ ] Set up environment variables (`.env.local`) per Technical Requirements Document
- [ ] Set up Git repo + deploy a "Hello World" version to Vercel to confirm pipeline works end-to-end
- [ ] Install core dependencies: Tailwind, shadcn/ui (for admin), Zod (validation), Razorpay SDK

**Deliverable:** Empty but deployed skeleton app, database schema live.

---

## Phase 1: Core Catalog (Storefront — Read Only)
- [ ] Seed database: categories, brands, ~20-30 sample products (with images) per Backend Schema notes
- [ ] Build Header + Footer components (shared layout)
- [ ] Build Homepage: hero banner, category tiles, featured products, brand logos, testimonials, about summary
- [ ] Build Product Listing Page with filters (category, brand, price) and sort
- [ ] Build Product Detail Page (gallery, price, specs, variant selector UI — no cart function yet)
- [ ] Build Search functionality (keyword search across product name)
- [ ] Build static pages: About, Contact, Privacy Policy, Terms & Conditions, Gallery

**Deliverable:** Fully browsable catalog, no purchasing yet. **Test:** every product/category page loads correctly, mobile-responsive.

---

## Phase 2: Cart & Checkout (B2C Purchase Flow)
- [ ] Implement cart state (client-side, e.g. Zustand or React Context + localStorage persistence)
- [ ] Build Cart page (add/remove/update quantity, subtotal calc)
- [ ] Build Checkout page (guest + logged-in flows, address form, payment method selection)
- [ ] Integrate Razorpay Checkout (test mode): create order → open Razorpay modal → verify payment signature server-side → create order record in DB
- [ ] Implement Cash on Delivery order path (skip payment gateway, create order directly)
- [ ] Build Order Confirmation page
- [ ] Set up transactional email (Resend) for order confirmation
- [ ] Implement stock decrement logic on successful order (transactional, per Backend Schema notes)

**Deliverable:** End-to-end purchase flow works in Razorpay test mode.
**Test checklist:**
- [ ] Add to cart → checkout → pay via Razorpay test card → order appears with correct status
- [ ] COD flow creates order without payment step
- [ ] Out-of-stock product blocked at checkout
- [ ] Payment failure handled gracefully (order marked failed, user can retry)

---

## Phase 3: Authentication & Customer Account
- [ ] Implement Supabase Auth: register, login, logout (email/password; phone OTP optional/Phase 2)
- [ ] Build Account dashboard: profile info, order history, order detail view, saved addresses (CRUD)
- [ ] Link guest checkout email to account if user later registers with same email (nice-to-have, optional)
- [ ] Protect account routes via auth middleware

**Deliverable:** Users can register, log in, and view their own order history/addresses.

---

## Phase 4: Wholesale/B2B Flow
- [ ] Build /wholesale landing page
- [ ] Build retailer registration form → creates user with `role='retailer'`, `retailer_status='pending'`
- [ ] Build bulk inquiry submission flow (product picker + quantity + notes)
- [ ] Build retailer's "My Inquiries" status tracker page
- [ ] Set up email notification to admin on new inquiry/registration

**Deliverable:** Retailers can register and submit structured bulk inquiries; admin gets notified.

---

## Phase 5: Admin Dashboard
- [ ] Build admin auth guard (role check middleware on `/admin/*`)
- [ ] Build Admin Dashboard home (basic stats: total orders, pending inquiries, low-stock alerts)
- [ ] Build Product management: list, add, edit, delete, image upload, stock update
- [ ] Build Category & Brand management: list, add, edit, delete
- [ ] Build Order management: list with filters, order detail view, status update (triggers status email — optional for MVP)
- [ ] Build Wholesale Inquiry management: list, detail view, status update, internal notes
- [ ] Build Banner/homepage content management

**Deliverable:** Admin/owner can fully manage the store without developer involvement.
**Test checklist:**
- [ ] Add a new product in admin → confirm it appears live on storefront within seconds
- [ ] Update order status → confirm reflected in customer's order history
- [ ] Update inquiry status → confirm reflected in retailer's inquiry tracker

---

## Phase 6: Polish, SEO & Launch Prep
- [ ] Add meta tags, Open Graph tags, Product schema.org JSON-LD to product pages
- [ ] Generate sitemap.xml and robots.txt
- [ ] Run Lighthouse audit (target: Performance ≥ 80 mobile, Accessibility ≥ 90)
- [ ] Cross-browser/device testing (Chrome, Safari, mobile Chrome/Safari)
- [ ] Set up Google Analytics 4
- [ ] Final content migration: real product data, real images, real brand logos, real testimonials (replace seed/placeholder data)
- [ ] Switch Razorpay from test mode to live keys
- [ ] Set up custom domain + SSL on Vercel
- [ ] Final QA pass through full test checklists from Phases 2 and 5

**Deliverable:** Production-ready site, live on custom domain.

---

## 7. Suggested Order of Building (for feeding into an AI coding tool)

If working sequentially with an AI coding agent, feed these documents in this order per session:
1. This Implementation Plan + Technical Requirements Document (sets up project scaffold)
2. Backend Schema Document (generates migrations/schema)
3. App Flow Document + UI/UX Design Brief (builds Phase 1 storefront pages)
4. Continue phase by phase, referencing PRD for feature acceptance criteria at each step

**Tip:** Ask the AI coding tool to complete and test one phase fully before moving to the next — avoids compounding errors across a large codebase.

---

## 8. Open Items to Confirm Before/During Build
- [ ] Final brand name/domain confirmation
- [ ] Real product catalog data (names, prices, images, specs) — currently using placeholder assumption of 20-30 sample products
- [ ] Actual Razorpay account setup (business KYC required for live mode)
- [ ] Shipping fee logic (flat rate vs. free-above-threshold vs. per-courier — currently assumed flat/admin-configurable)
- [ ] Whether wholesale pricing should eventually be shown directly to logged-in retailers (Phase 2 `wholesale_price` field is in schema but unused in MVP)
