# Mavon Project - Developer Guide

## 🔗 How to Add Example Project Links

All example project cards currently have placeholder URLs that need to be replaced with actual project links.

### Location of URLs

All project URLs are centralized in one file:
```
src/lib/servicesData.ts
```

### Steps to Update

1. Open `src/lib/servicesData.ts`
2. Find all instances of `REPLACE_WITH_URL_*`
3. Replace each placeholder with the actual project URL

### Example

**Before:**
```typescript
{
  title: 'Smart School ERP',
  description: 'Complete school management with attendance, fees & assignments tracking.',
  image: smartschoolErp,
  demoUrl: 'REPLACE_WITH_URL_SMARTSCHOOL', // ❌ Placeholder
}
```

**After:**
```typescript
{
  title: 'Smart School ERP',
  description: 'Complete school management with attendance, fees & assignments tracking.',
  image: smartschoolErp,
  demoUrl: 'https://your-actual-project-url.com', // ✅ Real URL
}
```

## 📋 Complete List of Placeholders

### Software Solutions

**Web Apps:**
- `REPLACE_WITH_URL_SMARTSCHOOL` - Smart School ERP demo
- `REPLACE_WITH_URL_POS` - Retail POS System demo

**Mobile Apps:**
- `REPLACE_WITH_URL_FOOD` - Food Delivery App demo
- `REPLACE_WITH_URL_EVENT` - Event Booking App demo

**Chatbots:**
- `REPLACE_WITH_URL_SUPPORT_BOT` - Customer Support Bot demo
- `REPLACE_WITH_URL_LEADGEN_BOT` - Lead Generation Bot demo

**DBMS:**
- `REPLACE_WITH_URL_INVENTORY` - Inventory Management demo
- `REPLACE_WITH_URL_STUDENT` - Student Records System demo

**Automation:**
- `REPLACE_WITH_URL_INVOICE` - Invoice Generator demo
- `REPLACE_WITH_URL_EMAIL` - Email Scheduler demo

**SaaS:**
- `REPLACE_WITH_URL_ANALYTICS` - Marketing Analytics demo
- `REPLACE_WITH_URL_SALES` - Sales Performance Tracker demo

### Digital Products

**Festival Posts:**
- `REPLACE_WITH_URL_DIWALI` - Diwali Greeting Post
- `REPLACE_WITH_URL_NEWYEAR` - New Year Celebration

**Business Posts:**
- `REPLACE_WITH_URL_OFFER` - Business Offer Template
- `REPLACE_WITH_URL_PRODUCT` - Product Launch Post

### Branding & Design

**Logos:**
- `REPLACE_WITH_URL_LOGO3D` - 3D Lettermark Logo
- `REPLACE_WITH_URL_MASCOT` - Mascot Logo

**Brochures:**
- `REPLACE_WITH_URL_BROCHURE` - Corporate Brochure
- `REPLACE_WITH_URL_CATALOG` - Product Catalog

### Marketing Automation

**Social Media:**
- `REPLACE_WITH_URL_INSTAGRAM` - Instagram Ad Campaign
- `REPLACE_WITH_URL_CALENDAR` - Social Media Calendar

**Email Campaigns:**
- `REPLACE_WITH_URL_WELCOME` - Welcome Email Series
- `REPLACE_WITH_URL_NEWSLETTER` - Newsletter Template

## 🎨 Design Customization

### Colors

All colors are defined in `src/index.css` using HSL format. To customize the color palette:

```css
:root {
  --leaf-green: 127 53% 51%;  /* Primary green */
  --teal: 178 85% 38%;        /* Accent teal */
  --amber: 45 100% 70%;       /* Accent amber */
  --violet: 256 92% 76%;      /* Accent violet */
  --sky: 201 100% 74%;        /* Accent sky blue */
}
```

### Animations

Custom animations are defined in `tailwind.config.ts`. Adjust timing and easing:

```typescript
animation: {
  "fade-in": "fade-in 0.5s ease-out",
  "float": "float 3s ease-in-out infinite",
  "glow-pulse": "glow-pulse 2s ease-in-out infinite",
}
```

## ⚡ Performance

### Lite Mode

Users can toggle "Lite Mode" to disable:
- Firefly cursor effects
- Floating mascot
- Particle animations
- Heavy visual effects

This improves performance on slower devices and respects `prefers-reduced-motion`.

### Image Optimization

All images use:
- Lazy loading (`loading="lazy"`)
- Proper aspect ratios
- Compressed formats

## 🌐 SEO

Metadata is configured in `index.html`:
- Title: "Mavon - Moving Innovation Forward"
- Description optimized for search
- Open Graph tags for social sharing
- Canonical URL set

## 🐛 Testing

### Check Placeholder URLs

Before deploying, verify all URLs are updated:

```bash
# Search for placeholder URLs
grep -r "REPLACE_WITH_URL" src/
```

Should return no results once all URLs are updated.

### Test Interactions

1. Click each example card
2. Verify correct project opens
3. Test modal fallback for missing URLs
4. Check smooth scroll navigation
5. Toggle Lite Mode
6. Test mobile responsiveness

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

- ✅ Single-page smooth scroll navigation
- ✅ Glassmorphism effects
- ✅ Holographic gradients
- ✅ Backward tilt hover animations
- ✅ Firefly cursor trail
- ✅ Floating 3D mascot
- ✅ Modal previews for examples
- ✅ Lite mode toggle
- ✅ SEO optimized
- ✅ Accessibility compliant

## 🚀 Deployment

The site is ready to deploy once all placeholder URLs are updated. No build errors should occur as all imports are properly configured.

## 📞 Support

For questions or issues, refer to the project documentation or contact the development team.

---

**Remember:** The most important step is updating all `REPLACE_WITH_URL_*` placeholders in `src/lib/servicesData.ts` with actual project URLs!
