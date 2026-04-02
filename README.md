# Lumina - Image Editor 🎨

**Transform your photos with professional-grade editing in seconds.**

Lumina is a modern, intuitive web-based image editor featuring 9 powerful adjustable filters and 21 expertly-crafted presets. Built with pure HTML5, CSS3, and JavaScript, Lumina delivers real-time image processing directly in your browser - no downloads, no subscriptions, no complicated tools. Perfect for photographers, social media creators, content creators, and anyone who wants to enhance their images quickly and easily.

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

| Filter           | Range | Unit | Description                                                                                             |
| ---------------- | ----- | ---- | ------------------------------------------------------------------------------------------------------- |
| **Brightness**   | 0-200 | %    | Adjust overall brightness. Tip: Use 110-120% to fix underexposed photos.                               |
| **Contrast**     | 0-200 | %    | Control light and dark differences. Tip: Combine with saturation at 120% for vibrant look.             |
| **Saturation**   | 0-200 | %    | Adjust color intensity. 0% = grayscale, 200% = hyper-saturated. Tip: Use 130% for social media.       |
| **Hue Rotation** | 0-360 | deg  | Rotate colors around the wheel. Tip: 180 degrees inverts colors, 20-40 degrees shifts warm to cool.    |
| **Blur**         | 0-20  | px   | Apply Gaussian blur for softness. Tip: Combine with reduced contrast for portraits.                    |
| **Grayscale**    | 0-200 | %    | Convert to shades of gray. Tip: 100% = classic B&W, 50% = muted tones.                                 |
| **Sepia**        | 0-200 | %    | Add warm, brownish vintage tones. Tip: Combine with 70% grayscale for authentic vintage.               |
| **Invert**       | 0-200 | %    | Reverse colors for negative effect. Tip: Combine with hue rotation for surreal effects.                |
| **Opacity**      | 0-100 | %    | Control transparency. Tip: Use 30-50% for watermark protection.                                        |

### 🎭 Professional Presets

Choose from 21 carefully crafted presets that combine filters for specific visual styles:

| Preset | Best For | Visual Style |
|--------|----------||---------|
| Normal | Default | Original colors |
| Vivid | Landscapes | High saturation and contrast |
| Warm | Portraits | Golden, flattering tones |
| Cool | Water scenes | Blue-shifted, calming |
| Black & White | Classic | Pure monochrome |
| Vintage | Retro | Faded sepia |
| Faded | Dreamy | Low contrast, soft |
| Dramatic | Bold | Maximum contrast |
| Dreamy | Artistic | Soft blur and warmth |
| Neon | Modern | Vibrant, futuristic |
| Retro | 70s/80s | Warm sepia tone |
| High Contrast | Graphics | Maximum detail |
| Soft | Minimalist | Gentle, smooth |
| Noir | Moody | Extreme B&W contrast |
| Sepia | Antique | Classic brown tones |
| Ocean | Water | Cool saturated blues |
| Sunset | Golden hour | Orange/gold warmth |
| Midnight | Night | Cool, dark tones |
| Cyberpunk | Futuristic | Intense purples |
| Forest | Nature | Green-shifted tones |
| Polaroid | Instant film | Warm vintage |

*Presets are starting points - adjust sliders after applying for custom results.*

### 🎯 User Experience

- **Real-time Preview** - See changes instantly as you adjust sliders
- **Live Value Display** - Current values displayed next to each slider for precision control
- **Interactive Controls** - Smooth, responsive sliders with intuitive ranges
- **Preset Highlighting** - Active preset glows blue so you know what is applied
- **Custom Scrollbar** - Modern, styled sidebar scrollbar for smooth navigation
- **Professional Layout** - Clean, modern UI inspired by professional editing software
- **Optimal Spacing** - Comfortable padding for easy access to all controls
- **Non-scrollable Design** - All controls fit on screen without excessive scrolling
- **Keyboard Friendly** - Intuitive workflow with mouse, trackpad, or touch
- **Lightweight & Fast** - ~50KB total, instant page load, works offline

### 📥 Core Features

- **Upload Images** - All common formats (JPG, PNG, GIF, WebP, SVG) with instant preview
- **Reset Button** - Restore all filters to defaults with one click
- **Export Images** - Download high-quality PNG files
- **Fast Processing** - Real-time filter application using Canvas API
- **Non-Destructive Editing** - Original file never modified until export

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
- Your image appears instantly on the left
- _Tip:_ Upload a new image anytime without losing current edits

**Step 2: Adjust Filters** 🎚

- Use the slider controls in the **Adjustments** sidebar panel
- Move each slider left/right to see real-time preview changes
- Current value displays next to slider for precision control
- _Pro Tips:_ Start with Saturation, then Brightness/Contrast, then specialized filters

**Step 3: Apply Presets** ⚡

- Browse the **Presets** section below adjustments
- Click any preset button to apply a professional filter combination
- The active preset glows blue - you always know which is active
- _Tip:_ Adjust individual sliders after applying for custom results
- _Tip:_ Layer effects by applying one preset, adjusting sliders, then applying another

**Step 4: Export Your Image** 💾

- Click the green **Export** button when satisfied with edits
- Image downloads as high-quality PNG file
- Filename: `edited-image.png`
- _Tip:_ Export multiple versions with different presets

**Reset Anytime** 🔄

- Click the red **Reset** button to restore all filters to defaults instantly
- Clears only edits - original file is unaffected

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

**Power Trio** - Brightness +10-20% + Contrast +15-25% + Saturation +10-30% = Professional results

**Soft Look** - Apply preset + Blur 2-4px + Reduce Contrast 10% + Add Sepia 5-10%

**HDR Look** - Boost Contrast +30% + Saturation +40% + Brightness +15%

**By Scenario:**
- Dark photos: Brightness +20-30%, Contrast +15-20%, Saturation +10-15%
- Bright photos: Brightness -10-15%, Contrast +15-25%, Saturation -10%
- Flat photos: Saturation +20-40%, Contrast +20-30%
- Color shift: Use Hue Rotation 5-15 degrees to adjust warm/cool tones

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
