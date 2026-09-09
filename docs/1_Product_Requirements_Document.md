# Product Requirements Document (PRD)
## Anand Sports — E-commerce & Wholesale Platform

---

## 1. Overview

**Product Name:** Anand Sports (working title — confirm final brand name/domain)
**Type:** Web application (responsive, mobile-first)
**One-liner:** A modern online storefront for Anand Sports — a 40-year-old sports equipment distributor in Odisha — enabling retail customers to buy sports kits directly, and retailers to request bulk/wholesale quotes, while giving the owner a simple admin panel to manage everything.

**Business context (from existing site, anandsports.co.in):**
- 40+ years in business, distributor of 15+ brands (Yonex, Nivia, Cosco, Technoo, Dida, Star Impact, Aryan, ASI, etc.)
- Currently serves 1000+ retailers across the East Zone of India (B2B relationships already exist offline)
- Current website is a static brochure site with no real product catalog and no ordering capability
- Categories: Badminton, Cricket, Athletics, Football, Basketball, Volleyball, Table Tennis, Gym, Shoes, Board Games, Indoor Games, Cones/Hurdles & Agility, Sports Supports

---

## 2. Problem Statement

Anand Sports has a strong 40-year offline reputation and brand distribution network, but no digital sales channel. They are losing:
- Retail customers who search online and can't find a catalog or buy directly
- Efficiency in handling wholesale/retailer inquiries (currently manual via phone/WhatsApp)
- Credibility vs. competitors who have modern e-commerce sites

---

## 3. Goals

| Goal | Metric |
|---|---|
| Launch a functional online store | MVP live within implementation timeline |
| Enable direct retail sales | X orders/month post-launch (baseline TBD) |
| Streamline wholesale inquiries | Retailers can submit structured quote requests instead of phone calls |
| Give owner self-service control | Owner can add/edit products & view orders without a developer |
| Establish digital brand presence | Indexed on Google, mobile-friendly, fast load times |

## 3.1 Non-Goals (Out of scope for MVP)
- Multi-vendor marketplace (only Anand Sports sells)
- Native mobile apps (responsive web only)
- International shipping/currency
- Live chat support (use WhatsApp link instead)
- Inventory sync with any existing offline POS/ERP system (manual entry in MVP)

---

## 4. Target Users & Personas

### Persona 1: Retail Customer ("Rohan")
- Individual buyer (parent, athlete, hobbyist) looking to buy a cricket bat, badminton racket, gym gear, etc.
- Wants: easy browsing by category/brand, clear pricing, fast checkout, trust signals (reviews, "40 years" credibility)

### Persona 2: Retailer/Shop Owner ("Suresh")
- Owns a sporting goods shop in a nearby town, wants to buy in bulk from Anand Sports at wholesale rates
- Wants: bulk quantity ordering, ability to request a quote, faster reordering, sees this as a B2B relationship, not a one-off purchase

### Persona 3: Admin/Owner ("Anand Sports Staff")
- Manages the catalog, fulfills orders, follows up on wholesale inquiries
- Wants: simple dashboard, no technical knowledge required, mobile-usable

---

## 5. Scope — MVP Features (Phase 1)

### 5.1 Public Storefront
- Homepage: hero banner, featured categories, featured/best-selling products, brand partner logos, testimonials, "About" summary
- Product Listing Page (per category/brand): grid view, filters (brand, price range, category, in-stock), sort (price, newest, popularity)
- Product Detail Page: images (gallery/zoom), name, brand, price, description, specifications, stock status, size/variant selector (if applicable), "Add to Cart", related products
- Search: keyword search across product name/category/brand
- Cart: add/remove/update quantity, view subtotal
- Checkout: guest checkout allowed; shipping address form; payment method selection (Razorpay online payment or Cash on Delivery); order summary & confirmation
- Order Confirmation page + email/SMS confirmation
- User Account: register/login (email+password or phone OTP), order history, saved addresses, wishlist (optional nice-to-have)
- Static pages: About Us, Contact Us (with map/store address), Privacy Policy, Terms & Conditions

### 5.2 Wholesale/B2B Flow
- "Become a Retailer Partner" / "Bulk Order Inquiry" page
- Retailer registration form (business name, GST number optional, phone, address, categories of interest)
- Bulk Quote Request: select products + quantities → submit inquiry (no online payment; admin follows up via phone/email)
- Retailer inquiry status visible to retailer (Pending / Contacted / Quoted / Closed) — simple status tracker

### 5.3 Admin Dashboard
- Login (admin-only role)
- Products: CRUD (create/edit/delete), bulk image upload, stock quantity management, mark in/out of stock, set featured products
- Categories & Brands: CRUD
- Orders: view list, filter by status, update order status (Pending → Confirmed → Shipped → Delivered → Cancelled), view customer + shipping details
- Wholesale Inquiries: view list, update status, add internal notes
- Banners/Homepage content: manage hero banner images & featured sections
- Basic Analytics: total orders, revenue (simple), top products (nice-to-have for MVP, can be Phase 2)

---

## 6. Phase 2 (Post-MVP, Explicitly Deferred)
- Coupons/discount codes
- Product reviews & ratings
- Wishlist sync across devices
- SMS/WhatsApp order notifications via API (vs. email only in MVP)
- Retailer-specific pricing tiers (login-gated wholesale price list)
- Advanced analytics dashboard
- Abandoned cart recovery emails
- Multiple admin roles (staff vs. owner permissions)

---

## 7. Assumptions Log
1. Payments via Razorpay (most common India-first gateway; supports UPI/cards/netbanking) — confirm if a different gateway is preferred.
2. Single warehouse/store location for shipping origin — no multi-warehouse logic needed.
3. Shipping cost: flat rate or free-above-threshold (to be configured by admin) — no live courier API integration in MVP.
4. GST/tax handling: prices shown as final (tax-inclusive) — no complex tax-by-state logic in MVP.
5. Currency: INR only.
6. No real-time inventory sync with any offline system — admin manually updates stock.

---

## 8. Success Criteria for MVP Launch
- [ ] All public storefront pages functional and mobile-responsive
- [ ] End-to-end purchase flow works (browse → cart → checkout → payment → confirmation)
- [ ] Wholesale inquiry flow works end-to-end
- [ ] Admin can independently add a new product and see it live within 2 minutes
- [ ] Site passes basic performance check (Lighthouse score > 80 on mobile)
- [ ] All existing content from anandsports.co.in (About, brands, categories, testimonials) migrated
