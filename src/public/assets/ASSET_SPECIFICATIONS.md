# Asset Specifications for Fish It

## Required Assets

### 1. bloxy-fish.png

**Purpose:** Legendary Bloxy Fish - Premium golden mythic creature that swims across the hero section

**Technical Requirements:**
- **Format:** PNG
- **Transparency:** Required (alpha channel)
- **Recommended Dimensions:** 180x180px (or larger, scales down to 180px)
- **Color Profile:** sRGB
- **File Size:** < 100KB (optimized for web)

**Visual Requirements:**
- Golden/yellow primary color (#D4AF37 or similar)
- Magenta/purple accent colors for branding
- "bloxy.gg" text embedded in design (optional but preferred)
- Fish shape recognizable at small sizes
- High contrast for visibility against ocean backgrounds

**Design Considerations:**
- Should look like a mythic/legendary item
- Roblox arcade game aesthetic
- Suitable for ages 9-18
- Eye-catching but not distracting
- Works well with glow effects (applied via CSS)

**Usage Context:**
- Animated swimming across screen
- Has golden glow effect (drop-shadow)
- Clickable (opens bloxy.gg)
- Visible against blue/cyan ocean backgrounds
- Part of hero section decoration

**Component:** `/src/components/hero/LegendaryBloxyFish.tsx`

**CSS Effects Applied:**
```css
filter: 
  drop-shadow(0 0 24px rgba(255, 215, 100, 0.6)) 
  drop-shadow(0 0 12px rgba(255, 223, 130, 0.8))
  drop-shadow(0 4px 8px rgba(0,0,0,0.3))
```

---

## Asset Creation Tips

### Using Design Tools

**Photoshop/GIMP:**
1. Create 256x256px canvas (export at 180x180)
2. Use transparent background
3. Design golden fish with magenta accents
4. Add subtle shine/highlight effects
5. Export as PNG-24 with transparency
6. Optimize with TinyPNG or similar

**Figma/Illustrator:**
1. Design at 180x180px or larger
2. Use vector shapes for clean edges
3. Add gradient for metallic gold effect
4. Include "bloxy.gg" text if desired
5. Export as PNG with transparency
6. Ensure anti-aliasing is enabled

**AI Generation (Midjourney/DALL-E):**
- Prompt: "golden legendary fish icon, Roblox game style, mythic creature, magenta accents, transparent background, arcade aesthetic"
- Post-process to add transparency if needed
- Add text overlay in design tool

---

## Alternative Asset Sources

If you don't have the original asset, you can:

1. **Commission an artist** on Fiverr or similar
2. **Use AI generation** with proper prompts
3. **Create a placeholder** temporarily:
   - Simple golden fish silhouette
   - Yellow/gold gradient
   - PNG with transparency
   - 180x180px minimum

---

## Testing Your Asset

After adding the asset, verify:

1. **Visual Check:**
   ```bash
   npm run dev
   # Visit http://localhost:5173
   # Look for swimming fish in hero section
   ```

2. **File Path Check:**
   - Asset location: `/public/assets/bloxy-fish.png`
   - Accessible at: `http://localhost:5173/assets/bloxy-fish.png`

3. **Performance Check:**
   - File size < 100KB
   - Loads quickly on slow connections
   - No visible pixelation

4. **Compatibility Check:**
   - Works in Chrome, Firefox, Safari, Edge
   - Transparency renders correctly
   - Colors match design intent

---

## Placeholder Option

If you need to deploy immediately without the asset, use this temporary solution:

1. Create a simple SVG placeholder:
```svg
<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="90" cy="90" rx="70" ry="40" fill="#D4AF37"/>
  <ellipse cx="65" cy="80" rx="5" ry="5" fill="#000"/>
  <path d="M 140 90 L 160 70 L 160 110 Z" fill="#D4AF37"/>
</svg>
```

2. Convert to PNG using any tool
3. Place in `/public/assets/bloxy-fish.png`
4. Replace with proper asset later

---

**Note:** This is the only required asset for the Fish It website. All other visuals are CSS-based or component-generated.
