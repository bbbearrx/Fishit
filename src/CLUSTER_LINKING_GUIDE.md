# Cluster Linking Guide — Internal Linking Architecture

## 🎯 Purpose

This document explains the **cluster linking system** used across FishIt.gg to improve SEO, user navigation, and site authority.

---

## 📋 Quick Reference: Linking Checklist

When creating ANY cluster/detail page, you MUST include:

### ✅ Required Components:

1. **`<RelatedPages />`** component
   - Links to parent pillar page
   - Links to 2-3 related cluster pages
   - Links back to homepage

2. **`<RelatedGuides />`** component
   - Auto-links to main pillar pages
   - Placed after RelatedPages

---

## 🏗️ Site Architecture

```
Homepage (Authority Hub)
    │
    ├─── Pillar Pages (Main Categories)
    │    ├─── Rod Tier List (/tier-list)
    │    ├─── Fish & Creatures (/fish)
    │    ├─── Items & Equipment (/items)
    │    ├─── Updates (/updates)
    │    └─── Guides (/guides)
    │
    └─── Cluster Pages (Detail Pages)
         ├─── Individual Fish (/fish/golden-koi)
         ├─── Individual Rods (/gear/master-rod)
         └─── Individual Guides (/guides/beginner-tips)
```

---

## 🔗 Linking Rules

### Rule 1: Every Cluster Page Links UP to Parent Pillar

**Example:**
- `/fish/golden-koi` → links to → `/fish` (parent category)
- `/gear/master-rod` → links to → `/tier-list` (parent pillar)

**Why?** Tells search engines the hierarchical relationship.

---

### Rule 2: Every Cluster Page Links SIDEWAYS to Related Clusters

**Example:**
- `/fish/golden-koi` → links to:
  - `/fish/silver-koi`
  - `/fish/crystal-koi`
  - `/fish/diamond-koi`

**Why?** Creates a web of related content, improves crawlability, reduces bounce rate.

---

### Rule 3: Every Cluster Page Links to Main Pillars

**Example:**
Every cluster page should link to these pillar pages:
- `/tier-list` (Rod Tier List)
- `/mechanics` (Fishing Mechanics — if it exists)
- `/updates` (Latest Updates)
- `/fish` or `/items` (Main catalog)

**Why?** Pushes link equity (page authority) from cluster pages to important pillars.

---

### Rule 4: Every Cluster Page Links Back to Homepage

**Why?** Creates a complete navigation loop, distributes homepage authority.

---

## 🧩 Components

### 1. RelatedPages Component

**Location:** `/components/sections/RelatedPages.tsx`

**Usage:**
```tsx
<RelatedPages
  parent={{ label: "Rod Tier List", href: "/tier-list" }}
  related={[
    { label: "Silver Rod", href: "/gear/silver-rod" },
    { label: "Diamond Rod", href: "/gear/diamond-rod" }
  ]}
  includeHome={true}
/>
```

**Props:**
- `parent` (required): Link to parent pillar/category
- `related` (required): Array of 2-3 related cluster pages
- `includeHome` (optional): Show homepage link (default: true)

---

### 2. RelatedGuides Component

**Location:** `/components/sections/RelatedGuides.tsx`

**Usage:**
```tsx
<RelatedGuides />
```

**No props needed** — automatically links to:
- Rod Tier List
- Fishing Mechanics (if exists)
- Updates
- Fish & Creatures

---

## 📄 Example Implementation

### Fish Detail Page Example

```tsx
// /pages/FishDetail.tsx

import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';

export default function FishDetail() {
  const parentLink = {
    label: 'Fish & Creatures Catalog',
    href: '/fish',
  };

  const relatedLinks = [
    { label: 'Golden Koi', href: '/fish/golden-koi' },
    { label: 'Silver Koi', href: '/fish/silver-koi' },
  ];

  return (
    <div>
      {/* Main content here */}
      
      {/* REQUIRED: Related Pages */}
      <RelatedPages
        parent={parentLink}
        related={relatedLinks}
        includeHome={true}
      />

      {/* REQUIRED: Related Guides */}
      <RelatedGuides />
    </div>
  );
}
```

---

### Rod Detail Page Example

```tsx
// /pages/GearDetail.tsx

import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';

export default function GearDetail() {
  const parentLink = {
    label: 'Rod Tier List',
    href: '/tier-list',
  };

  const relatedLinks = [
    { label: 'Silver Rod', href: '/gear/silver-rod' },
    { label: 'Diamond Rod', href: '/gear/diamond-rod' },
  ];

  return (
    <div>
      {/* Main content here */}
      
      {/* REQUIRED: Related Pages */}
      <RelatedPages
        parent={parentLink}
        related={relatedLinks}
        includeHome={true}
      />

      {/* REQUIRED: Related Guides */}
      <RelatedGuides />
    </div>
  );
}
```

---

## 🎨 Placement Guidelines

### Section Order on Cluster Pages:

1. Hero Section (title, image, badge)
2. Main Content (stats, description, tips)
3. **`<RelatedPages />`** ← Place here
4. **`<RelatedGuides />`** ← Place here
5. Footer (global component)

---

## 🚀 SEO Benefits

### Why This System Works:

1. **Topic Clusters Signal Expertise**
   - Search engines see organized content around topics
   - Signals you're an authority on "Fish It"

2. **Link Equity Distribution**
   - Detail pages pass authority to pillar pages
   - Pillar pages rank higher in search results

3. **Improved Crawlability**
   - Search engine bots discover all pages easily
   - Every page is 2-3 clicks from homepage

4. **Lower Bounce Rate**
   - Users find related content easily
   - More pages per session = better SEO signals

5. **Long-Tail Keyword Rankings**
   - Cluster pages target specific queries
   - "best rod for rare fish" → rod detail page
   - Cluster links to pillar for main keyword

---

## ⚠️ Common Mistakes to Avoid

❌ **DON'T:**
- Create cluster pages without RelatedPages component
- Forget to link back to parent pillar
- Only link to unrelated pages
- Invent fake fish/rod names for links

✅ **DO:**
- Always include both components
- Link to genuinely related content
- Use placeholder links with TODO comments if pages don't exist yet
- Update links when new cluster pages are created

---

## 📊 Authority Flow Diagram

```
Homepage (High Authority)
    ↓
Pillar Pages (Medium-High Authority)
    ↑ (links flow up)
Cluster Pages (Medium Authority)
```

**How it works:**
1. Detail pages link to pillars → authority flows UP
2. Pillars link to detail pages → authority flows DOWN
3. Detail pages link sideways → creates web of related content
4. Result: Entire site benefits from distributed authority

---

## 🔄 Maintenance

### When Adding New Cluster Pages:

1. Create the detail page
2. Add `<RelatedPages />` with correct parent link
3. Add 2-3 related cluster links
4. Add `<RelatedGuides />`
5. Update OTHER cluster pages to link to your new page

### When Adding New Pillar Pages:

1. Update `RelatedGuides.tsx` to include new pillar
2. Update cluster page configurations to use new pillar as parent (if appropriate)

---

## 🎯 End Goal

Every page on the site should be:
- ✅ Linked from at least 3 other pages
- ✅ Linking to at least 5 other pages
- ✅ Within 3 clicks of the homepage
- ✅ Part of a clear topic cluster

This creates a **strong internal linking structure** that:
- Helps search engines understand your site
- Improves rankings for all pages
- Provides excellent user experience
- Distributes authority throughout the site

---

## 📝 Template Checklist

When creating a new cluster detail page, copy this checklist:

```
[ ] Import RelatedPages component
[ ] Import RelatedGuides component
[ ] Define parentLink object (parent pillar)
[ ] Define relatedLinks array (2-3 related pages)
[ ] Add <RelatedPages /> after main content
[ ] Add <RelatedGuides /> after RelatedPages
[ ] Test all links work correctly
[ ] Add page to /routes.ts
[ ] Update other cluster pages to link to this new page
```

---

**Last Updated:** February 2026  
**Maintained by:** FishIt.gg Development Team
