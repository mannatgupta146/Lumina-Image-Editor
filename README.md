# Lumina - Image Editor 🎨

**Transform your photos with professional-grade editing in seconds.**

Lumina is a modern, intuitive web-based image editor featuring 9 powerful adjustable filters and 21 expertly-crafted presets. Built with pure HTML5, CSS3, and JavaScript, Lumina delivers real-time image processing directly in your browser—no downloads, no subscriptions, no complicated tools. Perfect for photographers, social media creators, content creators, and anyone who wants to enhance their images quickly and easily.

**Why Lumina?**

- ⚡ **Instant Processing** - Real-time preview as you adjust filters
- 🎯 **Intuitive Interface** - Professional-quality editing for everyone
- 🚀 **Zero Dependencies** - Pure web technologies, works offline
- 💾 **Export Control** - Download high-quality PNG files
- 🎭 **Smart Presets** - Professionally optimized filter combinations

---

## 📚 Table of Contents

- [Quick Start](#quick-start-guide) - Get started in 5 minutes
- [Features](#features) - Filters & Presets overview
- [Installation](#installation) - Clone & run locally
- [Workflows](#example-workflows) - Real-world use cases
- [Tips & Tricks](#tips--tricks-for-better-editing) - Pro editing techniques
- [Troubleshooting](#troubleshooting) - Common issues & solutions
- [Customization](#customization--extension-guide) - Add your own presets
- [Technology](#technology-stack) - Built with modern web standards
- [Browser Support](#browser-support) - Compatibility info

---

## Quick Start Guide

### 🚀 5-Minute Startup

**Option 1: Online (No Installation)**
- Open `index.html` in your browser
- Click **Upload** and select an image
- Adjust filters or pick a preset
- Click **Export** to download

**Option 2: Clone from GitHub**
```bash
git clone https://github.com/mannatgupta146/Lumina-Image-Editor.git
cd Lumina-Image-Editor
# Open index.html in your browser
```

---

## Features

### 🎨 Adjustable Filters

Lumina provides 9 powerful and intuitive filters to transform your images. Each filter is adjustable via interactive sliders with real-time preview. All adjustments are non-destructive—your original image remains unchanged.

| Filter           | Range | Unit | Description & Tips                                                                                                                                                                        |
| ---------------- | ----- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Brightness**   | 0-200 | %    | Increase or decrease the overall brightness of the image. 100% is the original brightness. Tip: Use 110-120% to fix slightly underexposed photos without losing detail.                   |
| **Contrast**     | 0-200 | %    | Control the difference between light and dark areas. Higher values create more dramatic differences. Tip: Combine with saturation for more impact (both at 120% for vibrant look).        |
| **Saturation**   | 0-200 | %    | Adjust color intensity from muted to vibrant. 0% creates greyscale, 200% creates hyper-saturated colors. Tip: Use 130% for Instagram-ready social media photos.                           |
| **Hue Rotation** | 0-360 | °    | Rotate colors around the color wheel for creative color shifts. 180° inverts all colors, creating a complementary palette. Tip: Small adjustments (20-40°) can shift warm to cool tones.  |
| **Blur**         | 0-20  | px   | Apply Gaussian blur effect for softness, depth, and dreamy aesthetics. Useful for background separation and focus effects. Tip: Combine with reduced contrast for soft, gentle portraits. |
| **Grayscale**    | 0-200 | %    | Convert colors to shades of gray with fully controllable intensity. Can be stacked beyond 100% for inverted intensified effects. Tip: 100% creates classic B&W; try 50% for muted tones.  |
| **Sepia**        | 0-200 | %    | Add warm, brownish vintage tones reminiscent of old photographs. Perfect for retro aesthetics and nostalgic vibes. Tip: Combine with 70% grayscale for authentic vintage film look.       |
| **Invert**       | 0-200 | %    | Reverse colors creating negative-like effects ideal for experimental and artistic photography. Tip: Combine with hue rotation for surreal, otherworldly effects.                          |
| **Opacity**      | 0-100 | %    | Control image transparency from invisible to fully visible. Creates overlay effects and blending opportunities. Tip: Use 30-50% opacity for watermark protection on social media.         |

### 🎭 Professional Presets

Choose from 21 carefully crafted presets that combine multiple filters to achieve specific visual styles instantly. Each preset is optimized for different photography styles, moods, and social platforms. **Presets are starting points**—you can still fine-tune individual filters after applying any preset:

| Preset            | Best For              | Visual Characteristics & Tips                    |
| ----------------- | --------------------- | ------------------------------------------------ |
| **Normal**        | Reference/Default     | Original image—use as baseline for comparison    |
| **Vivid**         | Landscapes, Nature    | 140% saturation + high contrast—punchy & vibrant |
| **Warm**          | Portraits, Sunsets    | Golden glow—flatters skin tones beautifully      |
| **Cool**          | Water, Calm Scenes    | Blue-shifted—creates serene, peaceful moods      |
| **Black & White** | Classic Photography   | Pure monochrome—timeless, professional elegance  |
| **Vintage**       | Retro, Nostalgia      | Faded sepia—aged film look with character        |
| **Faded**         | Dreamy, Soft Focus    | Low contrast—washed out ethereal appearance      |
| **Dramatic**      | Bold Statements       | Maximum contrast—striking, eye-catching impact   |
| **Dreamy**        | Artistic, Creative    | Soft blur + warmth—magical, otherworldly feel    |
| **Neon**          | Modern, Cyberpunk     | Vibrant saturation—bold futuristic aesthetic     |
| **Retro**         | 70s/80s Vibe          | Warm sepia + grain—authentic decade feel         |
| **High Contrast** | Technical, Graphics   | Precise detail—maximum visibility & separation   |
| **Soft**          | Gentle, Minimalist    | Low contrast + blur—smooth, approachable look    |
| **Noir**          | Film Noir, Moody      | Extreme B&W contrast—dramatic cinematography     |
| **Sepia**         | Antique, Historical   | Classic brown tones—museum-quality vintage       |
| **Ocean**         | Aquatic Scenes        | Cool saturated blues—perfect for water photos    |
| **Sunset**        | Golden Hour           | Orange/gold warmth—amplifies natural sunset hues |
| **Midnight**      | Night Photography     | Cool darkness—mysterious atmospheric quality     |
| **Cyberpunk**     | Digital Art, Futurism | Intense purples & magentas—ultra-modern vibe     |
| **Forest**        | Green Nature          | Green-shifted saturation—lush & natural tones    |
| **Polaroid**      | Instant Film          | Warm + soft—nostalgic instant camera aesthetic   |

### 🎯 User Experience

- **Real-time Preview** - See changes instantly as you adjust sliders without delay (typically <16ms)
- **Live Value Display** - Current filter values displayed next to each slider with units (e.g., 120%, 45°, 8px) for precision control
- **Interactive Controls** - Smooth, responsive sliders with intuitive ranges and visual feedback
- **Preset Highlighting** - Active preset button is visually highlighted in blue glow—you always know which preset is applied
- **Custom Scrollbar** - Modern, styled scrollbar on the sidebar for smooth, aesthetically pleasing navigation
- **Professional Layout** - Clean, modern UI inspired by professional editing software (Figma, Adobe Lightroom style)
- **Optimal Spacing** - Comfortable padding and gaps for easy thumb access on all controls
- **Non-scrollable Design** - All major controls fit on screen without excessive scrolling needed
- **Keyboard Friendly** - Intuitive workflow with mouse/trackpad but optimized for touch devices
- **Lightweight & Fast** - ~50KB total size, instant page load, works offline

### 📥 Core Features

- **Upload Images** - Support for all common image formats (JPG, PNG, GIF, WebP, SVG) with instant preview
- **Reset Button** - Instantly restore all filters to original defaults with one click—never lose your original
- **Export Images** - Download your edited images as high-quality PNG files preserving all quality and transparency
- **Fast Processing** - Lightning-fast real-time filter application using native Canvas API (GPU-accelerated)
- **Non-Destructive Editing** - Your original file is never modified; all changes are temporary until export

## Installation

### 🔧 Setup Options

**Option 1: Use Online (Simplest)**
- Download the files or clone the repo
- Open `index.html` directly in your browser
- No server or build tools needed!

**Option 2: Clone from GitHub**

```bash
# Clone the repository
git clone https://github.com/mannatgupta146/Lumina-Image-Editor.git

# Navigate to the project directory
cd Lumina-Image-Editor

# Open in your favorite browser
# On macOS:
open index.html

# On Windows:
start index.html

# Or just double-click index.html in your file explorer
```

**Option 3: Download ZIP**
1. Visit https://github.com/mannatgupta146/Lumina-Image-Editor
2. Click **Code** → **Download ZIP**
3. Extract the ZIP file
4. Open `index.html` in your browser

### ✅ Requirements
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation needed
- No dependencies or packages to install
- Works offline after page loads

### Step-by-Step Usage

**Step 1: Upload an Image** 📤

- Click the blue **Upload** button in the navbar
- Select an image file from your device (JPG, PNG, GIF, WebP supported)
- Your image appears instantly in the canvas on the left side
- _Tip:_ You can upload a new image anytime without losing your current edits

**Step 2: Adjust Filters** 🎚️

- Use the slider controls in the **Adjustments** sidebar panel on the right
- Move each slider left/right to see real-time preview changes on your image
- Current value is displayed next to slider (%, °, or px) for precise control
- _Pro Tips:_
  - Start with Saturation for impact
  - Then adjust Brightness/Contrast for balance
  - Fine-tune with specialized filters (Blur, Sepia, etc.)

**Step 3: Apply Presets** ⚡

- Browse the **Presets** section below the adjustments
- Click any preset button to instantly apply a professional filter combination
- The active preset is highlighted in blue—you always know which preset is active
- _Tip:_ Presets are starting points; you can still fine-tune individual sliders after applying
- Layer effects by applying one preset, then adjusting sliders, then applying another

**Step 4: Export Your Image** 💾

- Once satisfied with your edits, click the green **Export** button
- Your edited image downloads as a high-quality PNG file
- Filename format: `edited-image.png`
- _Pro Tip:_ Export multiple versions with different presets for comparison

**Reset Anytime** 🔄

- Click the red **Reset** button to restore ALL filters to defaults instantly
- This clears only the edits—your original image file is unaffected
- Perfect for starting fresh or comparing before/after versions
- _Tip:_ No undo needed because reset is always one click away

### Example Workflows 🎬

**Workflow 1: Fix Underexposed Photos** 📸

- Step 1: Apply Vivid preset for instant punch
- Step 2: Increase Brightness (110-130%) for detail
- Step 3: Boost Contrast (110-120%) for definition
- Step 4: Add Saturation (120-140%) for vibrancy
- _Result:_ Professional-looking rescued photo

**Workflow 2: Create Authentic Vintage Look** 🎞️

- Step 1: Apply Polaroid or Vintage preset
- Step 2: Reduce Saturation by 20-30% for authentic faded feel
- Step 3: Add slight Sepia (30-50%) for vintage warmth
- Step 4: Reduce Contrast by 10-20% for film authenticity
- _Result:_ Nostalgic retro aesthetic

**Workflow 3: Bold Artistic/Surreal Effects** 🎨

- Step 1: Apply Cyberpunk or Neon preset
- Step 2: Adjust Hue Rotation (30-80°) for unexpected color shifts
- Step 3: Add controlled Invert (5-30%) for dreamlike quality
- Step 4: Apply slight Blur (2-4px) for surreal softness
- _Result:_ Eye-catching, experimental artistic photograph

**Workflow 4: Professional Headshots** 👤

- Step 1: Apply Warm preset for flattering skin tones
- Step 2: Increase Brightness (+10-20%) to open eyes
- Step 3: Boost Contrast (+20%) for facial definition
- Step 4: Slightly increase Saturation (+10%) without overdoing
- _Result:_ Professional, polished headshot ready for LinkedIn/portfolios

**Workflow 5: Social Media Ready Content** 📱

- Step 1: Apply Vivid preset for eye-catching feed
- Step 2: Increase Saturation to 130-150% for maximum pop
- Step 3: Adjust Brightness for consistency with feed aesthetic
- Step 4: Add slight Blur (1-2px) for polished smoothness
- _Result:_ Instagram/social media optimized imagery

## Project Structure

```
Image Editor/
├── index.html          # Main HTML structure
├── style.scss          # Styling (SCSS)
├── style.css           # Compiled CSS
├── style.css.map       # CSS source map
├── theme.css           # Theme variables
├── script.js           # Application logic
└── readme.md           # This file
```

## Technology Stack 🛠️

### Frontend Fundamentals

- **HTML5** - Semantic markup providing accessible structure and native file input APIs
- **SCSS/CSS3** - Modern styling with CSS variables, flexbox layouts, custom scrollbars, and smooth animations
- **JavaScript (ES6+)** - Modern ES6+ features including arrow functions, destructuring, and object literals for clean code

### Image Processing

- **Canvas API** - Native browser Canvas for GPU-accelerated real-time filter rendering
- **CSS Filters** - Hardware-accelerated filter effects (brightness, contrast, saturation, hue-rotate, blur, grayscale, sepia, invert, opacity)
- **Blob API** - Efficient file handling for uploads and exports

### Design Principles

- **No External Dependencies** - Zero npm packages means zero bloat, pure web standards
- **Progressive Enhancement** - Works on modern browsers with graceful behavior
- **Mobile-Friendly** - Responsive design works on tablets and large screens
- **Accessibility First** - Semantic HTML and ARIA-friendly structure

## Browser Support 🌐

| Browser               | Support          | Notes                                                |
| --------------------- | ---------------- | ---------------------------------------------------- |
| **Chrome**            | ✅ Excellent     | Recommended for best performance and compatibility   |
| **Firefox**           | ✅ Excellent     | Full support, identical performance to Chrome        |
| **Safari**            | ✅ Good          | Works well on macOS/iOS, some filters optimized      |
| **Edge**              | ✅ Excellent     | Chromium-based, near-identical to Chrome performance |
| **Opera**             | ✅ Good          | Chromium-based, fully compatible                     |
| **Internet Explorer** | ❌ Not Supported | Please use a modern browser                          |

**Recommended:** Use the latest version of Chrome, Firefox, or Edge for optimal performance.

## Tips & Tricks for Better Editing 💡

### Filter Combination Techniques

**The Power Trio**

- Combining three core adjustments creates professional results:
  1. **Brightness +10-20%** - Opens up the image
  2. **Contrast +15-25%** - Adds punch and depth
  3. **Saturation +10-30%** - Makes colors pop

**The Soft Look (Great for Portraits)**

1. Apply any preset as a base
2. Add **Blur 2-4px** for gentle softness
3. Reduce **Contrast -10%** for approachable feel
4. Add warmth with **Sepia 5-10%**

**The HDR Look (Dramatic & Punchy)**

1. Boost **Contrast +30%** for maximum separation
2. Increase **Saturation +40%** for vibrant colors
3. Push **Brightness +15%** for exposed highlights
4. Add **Clarity** by combining high contrast + saturation

### Preset Layering Strategy

Apply one preset, manually adjust, then apply another for unique hybrid effects:

- Apply "Warm" preset (+30% saturation)
- Manually reduce saturation to 50% (creating custom intermediate look)
- Then apply "Vintage" preset on top for blended effect
- **Result:** Custom hybrid preset unique to your image

### Settings by Scenario

**Dark / Underexposed Images:**

- Brightness: +20-30% | Contrast: +15-20% | Saturation: +10-15%

**Blown Out / Overexposed Images:**

- Brightness: -10-15% | Contrast: +15-25% | Saturation: Normal to -10%

**Flat / Boring Images:**

- Saturation: +20-40% | Contrast: +20-30% | Brightness: Adjust as needed

**Color Correction / White Balance:**

- Use Hue Rotation (5-15°) to shift blue→warm or warm→cool
- Then fine-tune with Saturation if colors feel pushed

## Troubleshooting 🔧

### Q: Image isn't showing after upload

**A:** Check file format (JPG, PNG, GIF, WebP supported) • Verify file isn't corrupted by opening in image viewer • Try a different image to isolate the issue • Clear browser cache and reload

### Q: Filters are slow or laggy

**A:** Try with a smaller image (resize before uploading) • Close other browser tabs to free up memory • Update your browser to the latest version • Note: Large images (>8MP) may show lag on older devices

### Q: Preset highlighting isn't visible

**A:** Ensure you're using a modern browser (Chrome, Firefox, Edge, Safari) • The preset button should glow blue when selected • Click any other preset, then click back to see the highlight • Try refreshing the page if highlighting seems stuck

### Q: Export button creates blank or corrupted file

**A:** Ensure an image has been uploaded • Try resetting filters first, then re-applying them • Use a different image to test • Check browser permissions for downloads • Try a different browser if issue persists

### Q: Some filters aren't having visible effect

**A:** This is normal! Some filters are subtle by design. Try extreme values (max slider position) to see the effect. Combine with other filters for more visible impact.

### Q: Can I undo my changes?

**A:** Click the **Reset** button to clear all edits instantly. There's no multi-level undo, but Reset returns everything to original.

## Performance 🚀

- **Lightweight** - Only ~50KB total (minified), super fast page load
- **No Dependencies** - Zero npm packages = instant load, no waiting
- **GPU Accelerated** - Canvas filters use GPU for silky smooth 60+ FPS
- **Real-time Processing** - Typically <16ms per frame (that's 60+ times per second)
- **Memory Efficient** - Single canvas rendering, no memory leaks
- **Works Offline** - No internet needed after initial page load
- **Optimized for Desktop/Tablet** - Best experience on larger screens

## How It Works

### Image Processing Architecture

Lumina uses the **HTML5 Canvas API** combined with modern CSS filters to deliver real-time image processing:

**Processing Pipeline:**

1. User uploads an image via the file input
2. Image is loaded into a canvas element (HTML5 Canvas)
3. Filter adjustments trigger real-time re-rendering
4. Canvas `filter` property applies all active filters simultaneously
5. Image preview updates instantly (typically within 16ms)
6. User can download the final result as PNG

**Performance Optimization:**

- Filters are applied using native browser APIs (no heavy computation)
- Real-time processing at 60+ frames per second on modern browsers
- Minimal memory footprint with efficient DOM manipulation
- Lazy loading of preset data

### Filter System

Each filter is implemented using CSS filter properties:

- **Brightness & Contrast** - Adjust luminance and dynamic range
- **Saturation** - Modify color intensity without changing hue
- **Hue Rotation** - Shift colors around the RGB color wheel
- **Blur** - Apply Gaussian blur using GPU acceleration
- **Grayscale & Sepia** - Color space transformations
- **Invert** - Bitwise color inversion for negative effect
- **Opacity** - Alpha channel manipulation

### Preset System

Presets are data structures containing predefined values for all 9 filters. When applied:

1. All filter values are updated simultaneously
2. Canvas re-renders with combined filter effects
3. UI sliders update to reflect new values
4. Preset button highlighting indicates active selection
5. User can further adjust individual sliders for fine-tuning

### State Management

The filtering engine maintains state through a centralized `filters` object:

- Stores current value for each of the 9 filters
- Tracks min/max ranges and units for validation
- Enables undo functionality through state snapshots
- Persists settings during the editing session

### Event System

Real-time responsiveness is achieved through:

- Input event listeners on all sliders (capture phase)
- Preset button click handlers with proper event delegation
- Canvas update triggers on every state change
- Debounced re-rendering for performance (if needed)

## Customization & Extension Guide 🔧

### Adding New Presets

Lumina is highly customizable. To add new preset filters:

**For Photographers & Designers:**

- Edit the `presets` object in `script.js`
- Add a new preset entry with custom filter values
- Each preset needs all 9 filter properties defined
- Values must be within acceptable ranges:
  - Brightness, Contrast, Saturation, Grayscale, Sepia, Invert: 0-200%
  - Opacity: 0-100%
  - Hue Rotation: 0-360°
  - Blur: 0-20px
- New presets appear as buttons in the Presets section automatically

**Preset Structure Example:**

```
myCustomPreset: {
  brightness: 110,
  contrast: 120,
  saturation: 130,
  hueRotation: 0,
  blur: 0,
  grayscale: 0,
  sepia: 10,
  invert: 0,
  opacity: 100
}
```

### Modifying Slider Ranges

To change adjustment ranges for any filter:

- Edit the `filters` object in `script.js`
- Modify the `min` and `max` properties for any filter
- Users can then adjust values within your new range
- Range changes are immediate and reflected in UI
- **Example:** To allow Saturation up to 300% instead of 200%:
  - Find: `max: 200` in saturation filter
  - Change to: `max: 300`

### Styling Customization

Comprehensive theming options:

- Edit `style.scss` for layout, colors, spacing, and typography
- Update theme variables in `theme.css` for quick color changes
- SCSS compiles to CSS automatically
- CSS custom properties enable dark/light mode implementations
- All colors are centralized making full rebranding quick and easy

### Adding New Filters

Advanced users can add custom filters:

1. Add new filter object to `filters` object with ranges
2. Add filter application in the `applyFilters()` function
3. Create corresponding UI in `createFilterElement()`
4. Test with various images for smooth performance
5. Document the new filter for users

### Theme Customization

**Color Scheme Changes:**

- Open `theme.css` to find main color variables
- Modify colors for buttons, background, text
- Changes instantly propagate throughout the interface
- Try different color palettes for dark/light modes

**Button Colors:**

- Upload button: `.upload` in `style.scss` - default #2563eb (blue)
- Reset button: `.reset` in `style.scss` - default #ef4444 (red)
- Export button: `.export` in `style.scss` - default #22c55e (green)

### Community Contribution Ideas

Popular preset ideas perfect for contribution:

- **Seasonal Effects**: Spring bloom, Summer heat, Fall warmth, Winter chill
- **Time-based**: Golden Hour, Blue Hour, Midday sun, Twilight
- **Photography Styles**: Automotive, Food, Product, Landscape, Macro
- **Decade Vibes**: 1920s Art Deco, 1950s Film, 1970s Disco, 1990s Grunge, Y2K
- **Mood-based**: Energetic & Exciting, Calm & Peaceful, Mysterious & Dark, Romantic & Soft
- **Social Platforms**: TikTok Ready, Instagram Optimized, Twitter Feed, Pinterest Style

## Performance

- Lightweight (~50KB total)
- No external dependencies
- Smooth real-time processing on modern browsers
- Optimized for desktop and tablet viewing

## Known Limitations 📋

- **Desktop/Tablet Optimized** - Best experience on larger screens; smaller mobile screens may feel cramped
- **Large Images** - Images >8MP may show lag on older devices or with all filters maxed out
- **Export Quality** - Canvas rendering quality depends on browser capabilities and system hardware
- **Filter Precision** - Some very subtle adjustments may not be visible at small preview scales
- **Browser Specific** - Major browsers fully supported, older browsers (IE11) not supported
- **No Multi-Undo** - Reset clears all changes at once (but you always have one-click reset)

## Future Enhancements 🔮

Potential features for future versions:

- **Crop & Resize** - Built-in image cropping and resizing tools
- **Layers & Compositing** - Multiple layers with blend modes
- **Undo/Redo History** - Full edit history with step-by-step navigation
- **Before/After Comparison** - Side-by-side or split view comparisons
- **Advanced Filters** - Sharpen, Curves, Levels, Highlights/Shadows
- **Color Grading** - Professional color wheels and curves adjustments
- **Mobile App** - Dedicated mobile app for iOS/Android
- **Batch Processing** - Apply presets to multiple images at once
- **Preset Sharing** - Share custom presets with community
- **RAW Support** - Import and edit RAW camera files
- **Metadata Preservation** - EXIF data handling for professional workflows

---

## Create & Share 🎨

**Lumina is your creative canvas.** Transform ordinary photos into extraordinary images with professional-grade editing tools designed for simplicity and power.

### Quick Links

- 📸 **Upload an image** and start editing in seconds
- 🎭 **Explore all 21 presets** for instant style transformations
- 💾 **Export high-quality PNG** ready for sharing anywhere
- 🎯 **Reset anytime** to experiment without fear

### Share Your Work

When using Lumina to create amazing photos, consider:

- Sharing edited images on social media
- Tagging us in your creative work
- Contributing new preset ideas
- Suggesting features you'd love to see

---

**Happy editing!** 🎨

**Lumina** - Where your photos meet professional editing.

_For issues, suggestions, or to contribute to this project, feel free to enhance and customize this editor for your specific needs. It's completely open and ready for your creative vision._
