# UI/UX Design Brief
## Anand Sports — E-commerce & Wholesale Platform

---

## 1. Brand Personality

Anand Sports is a **trusted, established, energetic** sports brand — 40 years of legacy meets a modern digital storefront. The design should feel:
- **Trustworthy & credible** (heritage business, not a fly-by-night store)
- **Energetic & active** (sports = movement, achievement, teamwork)
- **Accessible** (used by everyday customers and busy shop owners alike — not overly "fashion e-commerce" fussy)

**Assumption:** Since the existing site uses a fairly generic Elementor template, this is an opportunity for a real visual refresh. Suggested direction below — adjust to taste/existing brand guidelines if the owner has strong preferences.

---

## 2. Color Palette

| Role | Color | Notes |
|---|---|---|
| Primary | Deep Blue `#0B3D91` or Sport Green `#1B7A3D` | Pick one as brand primary — conveys trust + energy |
| Accent/CTA | Energetic Orange `#FF6B00` | For "Add to Cart", "Buy Now" buttons — high contrast, action-driving |
| Secondary | Charcoal `#1F2937` | Headings, nav text |
| Background | Off-white `#F9FAFB` | Clean, product-photo-friendly |
| Success | Green `#16A34A` | Order confirmed, in-stock badges |
| Error/Warning | Red `#DC2626` | Out-of-stock, form errors |
| Neutral borders | Gray `#E5E7EB` | Cards, dividers |

## 3. Typography
- **Headings:** A bold, modern sans-serif (e.g., "Poppins" or "Inter", weight 600–700) — energetic and legible
- **Body:** "Inter" or "Roboto", weight 400–500 — highly readable at small sizes for product specs
- **Scale:** H1 32–40px / H2 24–28px / H3 20px / Body 16px / Small 14px (mobile-first, scale up for desktop)

## 4. Layout Principles
- Mobile-first (majority of Indian e-commerce traffic is mobile) — design for 375px width first, scale to desktop
- Grid: 2-column product grid on mobile, 3–4 column on desktop
- Generous product image whitespace — sports equipment photography should be the visual hero
- Sticky "Add to Cart" bar on mobile product detail pages (common e-commerce pattern, improves conversion)
- Sticky header with cart icon always visible

---

## 5. Page-by-Page Design Notes

### 5.1 Homepage
- Full-width hero banner (rotating/carousel) — "Stay Fit, Live in Style" messaging carried over, with a strong CTA button ("Shop Now")
- Category tiles below hero (icon or image + label) — Cricket, Badminton, Football, Gym, etc. — tappable, grid of 6–8
- "Featured Products" horizontal scroll/carousel
- "Our Brand Partners" logo strip (carried over from existing site — Yonex, Nivia, Cosco, etc.)
- "40 Years of Trust" About summary section with stats (40+ years, 15+ brands, 1000+ retailers) as visual counters
- Testimonials section (carried over, styled as cards)
- "Retailer? Partner With Us" banner linking to /wholesale
- Footer as described in App Flow doc

### 5.2 Product Listing Page
- Left sidebar (desktop) / collapsible filter drawer (mobile): Category, Brand, Price range, In Stock toggle
- Top bar: result count, sort dropdown (Price low-high, high-low, Newest)
- Product cards: image, name, brand, price, "Add to Cart" quick-action button, stock badge
- Pagination or infinite scroll (recommend pagination for simplicity + SEO)

### 5.3 Product Detail Page
- Left: image gallery (main image + thumbnails, pinch-zoom on mobile)
- Right: product name, brand, price, stock status, variant selector (if applicable, e.g. size), quantity stepper, "Add to Cart" (primary orange CTA), "Buy Now" (optional secondary flow)
- Below fold: Description tab, Specifications tab, Related Products carousel

### 5.4 Cart Page
- Line items: thumbnail, name, variant, price, quantity stepper, remove (X)
- Order summary card (sticky on desktop, bottom-fixed on mobile): subtotal, estimated shipping, total, "Proceed to Checkout" CTA
- Empty cart state: friendly illustration/message + "Continue Shopping" CTA

### 5.5 Checkout Page
- Single-page checkout (not multi-step wizard) for simplicity — sections: Contact Info → Shipping Address → Payment Method → Order Summary → Place Order button
- Clear progress/trust indicators (secure payment badge, Razorpay logo)

### 5.6 Wholesale/Retailer Pages
- /wholesale landing: professional B2B tone — stats on distribution network, brand logos, clear "Register" and "Submit Inquiry" CTAs
- Inquiry form: product picker with search + quantity input, running list of added items, notes field
- Status tracker: simple horizontal stepper (Pending → Contacted → Quoted → Closed) per inquiry

### 5.7 Admin Dashboard
- Clean, functional, NOT customer-facing styling — use a simple admin UI pattern (sidebar nav + data tables)
- Sidebar: Dashboard, Products, Categories, Orders, Inquiries, Banners
- Data tables with search/filter/sort, clear primary actions (Add, Edit, Delete) as buttons/icons
- Use a component library (e.g., shadcn/ui) to speed up admin build — visual polish matters less here than in the storefront

---

## 6. Component Inventory (for AI coding agent reference)

- Header (with search, cart badge, account menu, mobile hamburger)
- Footer
- Product Card
- Category Tile
- Filter Sidebar / Filter Drawer (mobile)
- Cart Line Item
- Order Summary Card
- Button variants (Primary/CTA, Secondary, Ghost, Danger)
- Form Input, Select, Textarea (with validation error states)
- Badge (In Stock / Out of Stock / Order Status)
- Toast/Notification (add-to-cart confirmation, form success/error)
- Modal (Razorpay checkout wraps its own, but use modals for confirmations e.g. "Remove item?")
- Data Table (admin)
- Stepper (wholesale inquiry status)
- Image Gallery/Carousel

---

## 7. Responsive Breakpoints
- Mobile: < 640px (primary design target)
- Tablet: 640px – 1024px
- Desktop: > 1024px

## 8. Accessibility Notes
- Minimum 4.5:1 contrast ratio for body text
- All interactive elements keyboard-focusable with visible focus states
- Form fields with associated `<label>` elements and error messages announced via `aria-live`
- Alt text required for all product images (use product name as default alt text)
