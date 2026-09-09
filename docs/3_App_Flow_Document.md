# App Flow Document
## Anand Sports — E-commerce & Wholesale Platform

---

## 1. Site Map

```
/                           Home
/products                   All products (with filters)
/products/[category]        Category listing (e.g. /products/cricket)
/product/[slug]              Product detail page
/cart                        Cart
/checkout                    Checkout
/order-confirmation/[id]     Order success page
/account                     Customer account (dashboard)
/account/orders              Order history
/account/orders/[id]         Order detail
/account/addresses           Saved addresses
/wholesale                   Wholesale/Bulk inquiry landing page
/wholesale/register           Retailer registration
/wholesale/inquiry            Submit bulk inquiry (product picker)
/wholesale/my-inquiries       Retailer's inquiry status tracker
/about                        About Us
/contact                      Contact Us
/gallery                      Gallery (carried over from existing site)
/login  /register            Auth pages
/admin                        Admin login
/admin/dashboard              Admin home (overview stats)
/admin/products               Product management
/admin/products/new           Add product
/admin/products/[id]/edit     Edit product
/admin/categories             Category management
/admin/orders                 Order management
/admin/orders/[id]            Order detail + status update
/admin/inquiries              Wholesale inquiry management
/admin/banners                 Homepage banner/content management
```

---

## 2. Core User Flow: Retail Purchase (Guest or Logged-in)

```
1. Land on Home
   → Browse featured categories OR use search bar
2. Navigate to Product Listing Page (e.g. /products/cricket)
   → Apply filters (brand, price) / sort
3. Click a product → Product Detail Page
   → View images, price, description, stock status
   → Select variant (size/color) if applicable
   → Click "Add to Cart"
4. Cart icon updates (item count badge)
   → User can continue shopping OR click cart icon
5. Cart page
   → Review items, adjust quantity, remove items
   → See subtotal
   → Click "Proceed to Checkout"
6. Checkout page
   → If guest: enter name, phone, email, shipping address
   → If logged in: select saved address or add new
   → Select payment method: Razorpay (online) or Cash on Delivery
   → Review order summary (items, subtotal, shipping, total)
   → Click "Place Order"
7a. If Razorpay selected:
   → Razorpay checkout modal opens
   → User completes payment
   → On success → redirect to Order Confirmation page
   → On failure → show error, allow retry, order remains "Pending Payment"
7b. If COD selected:
   → Order created directly with status "Confirmed"
   → Redirect to Order Confirmation page
8. Order Confirmation page
   → Show order ID, summary, estimated delivery info
   → Confirmation email sent
9. (If logged in) Order appears in /account/orders
```

**Edge cases to handle:**
- Product goes out of stock while in cart → show warning at checkout, block order for that item
- Payment fails/times out → order saved as "Payment Failed", user can retry from order history
- Guest checkout → still create a lightweight user record (or order-only record) so admin can track it

---

## 3. Core User Flow: Wholesale/Retailer Inquiry

```
1. Retailer lands on /wholesale (linked from header/footer: "Retailer? Buy in Bulk")
   → Page explains B2B program, shows CTA "Register as Retailer" or "Submit Inquiry"
2. If not registered:
   → /wholesale/register
   → Form: Business name, owner name, phone, email, shop address,
     GST number (optional), categories of interest
   → Submit → account created with role = retailer, status = "Pending Verification"
   → Confirmation message: "Our team will contact you within 24 hours"
   → Notification sent to Admin
3. Retailer logs in → /wholesale/inquiry
   → Product picker: search/browse products, add product + desired quantity
   → Add multiple products to one inquiry
   → Optional notes field (e.g. delivery timeline, special requirements)
   → Submit inquiry
4. Inquiry submitted → status = "Pending"
   → Confirmation shown + email sent to retailer
   → Notification sent to Admin
5. Retailer can view all their inquiries at /wholesale/my-inquiries
   → Status badges: Pending → Contacted → Quoted → Closed/Fulfilled
6. Admin reviews inquiry in /admin/inquiries
   → Contacts retailer offline (phone/WhatsApp) to negotiate pricing
   → Updates status in admin panel → retailer sees status change
```

**Note:** No online payment for wholesale in MVP — this mirrors how the business already operates (relationship-based bulk deals), digitized as a structured lead/inquiry system rather than instant checkout.

---

## 4. Admin Flow: Managing Products

```
1. Admin logs in at /admin
2. Navigate to /admin/products
   → See table: image thumbnail, name, category, price, stock, status
   → Search/filter by category
3. Click "Add Product" → /admin/products/new
   → Fill form: name, category, brand, description, price, stock qty,
     images (upload multiple), variants (size/color if applicable), featured (yes/no)
   → Save → product appears live on storefront immediately (or as "Draft" if unpublished toggle used)
4. Click existing product → /admin/products/[id]/edit
   → Edit any field, update stock, mark out-of-stock, delete product
```

## 5. Admin Flow: Managing Orders

```
1. /admin/orders → table of all orders (ID, customer, date, total, status, payment method)
2. Filter by status: Pending / Confirmed / Shipped / Delivered / Cancelled
3. Click order → /admin/orders/[id]
   → View full details: items, customer info, shipping address, payment status
   → Update order status (dropdown) → triggers status-change email to customer (Phase 2 optional; MVP can be manual)
```

## 6. Admin Flow: Managing Wholesale Inquiries

```
1. /admin/inquiries → table of all inquiries (retailer name, date, product count, status)
2. Click inquiry → view products requested + quantities + retailer contact info
3. Update status: Pending → Contacted → Quoted → Closed
4. Add internal note (e.g. "Quoted ₹X, follow up next week")
```

---

## 7. Auth Flow

```
Register:
  Email/Phone + Password → Supabase Auth creates account
  → Default role = "customer"
  → (Retailer registration sets role = "retailer" via separate form, see Section 3)

Login:
  Email/Phone + Password → session created → redirect to previous page or /account

Logout:
  Clears session → redirect to home

Admin Login:
  Same login page, but only users with role="admin" can access /admin/* routes
  (checked server-side in middleware; non-admins attempting /admin/* are redirected to home)
```

---

## 8. Navigation Structure (Header/Footer)

**Header:** Logo | Home | Products (dropdown by category) | Wholesale | About | Contact | Search icon | Cart icon | Account icon

**Footer:** About summary | Quick links (Products, Wholesale, Gallery) | Contact info + address | Social links (Facebook, Instagram — carried over) | Privacy Policy | Terms & Conditions | Newsletter signup (carried over from existing site)
