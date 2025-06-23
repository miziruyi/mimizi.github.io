# Style Guide - Personal Brand Portfolio

This document provides comprehensive guidelines for using the design system in the Personal Brand Portfolio website.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Layout](#layout)
5. [Components](#components)
6. [Animations](#animations)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)

## Color System

### Primary Colors

The primary color palette is based on blue tones and should be used for main brand elements.

```css
/* CSS Variables */
--color-primary-50: #eff6ff;   /* Very light blue - backgrounds */
--color-primary-100: #dbeafe;  /* Light blue - subtle backgrounds */
--color-primary-200: #bfdbfe;  /* Light blue - borders */
--color-primary-300: #93c5fd;  /* Medium light blue - hover states */
--color-primary-400: #60a5fa;  /* Medium blue - secondary actions */
--color-primary-500: #3b82f6;  /* Main blue - primary actions */
--color-primary-600: #2563eb;  /* Dark blue - main brand color */
--color-primary-700: #1d4ed8;  /* Darker blue - hover states */
--color-primary-800: #1e3a8a;  /* Very dark blue - text on light */
--color-primary-900: #1e40af;  /* Darkest blue - emphasis */
--color-primary-950: #172554;  /* Near black blue - backgrounds */
```

**Usage Guidelines:**
- `primary-600`: Main brand color, primary buttons, links
- `primary-500`: Secondary actions, focus states
- `primary-700`: Hover states for primary elements
- `primary-50`: Light backgrounds, cards
- `primary-800`: Text on light backgrounds

### Secondary Colors

The secondary color palette uses cyan tones for accents and highlights.

```css
/* CSS Variables */
--color-secondary-50: #f0f9ff;   /* Very light cyan */
--color-secondary-100: #e0f2fe;  /* Light cyan */
--color-secondary-200: #bae6fd;  /* Light cyan */
--color-secondary-300: #7dd3fc;  /* Medium light cyan */
--color-secondary-400: #38bdf8;  /* Medium cyan */
--color-secondary-500: #0ea5e9;  /* Main cyan */
--color-secondary-600: #0284c7;  /* Dark cyan */
--color-secondary-700: #0369a1;  /* Darker cyan */
--color-secondary-800: #075985;  /* Very dark cyan */
--color-secondary-900: #0c4a6e;  /* Darkest cyan */
--color-secondary-950: #082f49;  /* Near black cyan */
```

**Usage Guidelines:**
- `secondary-500`: Accent elements, highlights
- `secondary-600`: Secondary buttons, links
- `secondary-50`: Subtle backgrounds
- `secondary-700`: Hover states for secondary elements

### Neutral Colors

Neutral colors are used for text, backgrounds, and borders.

```css
/* CSS Variables */
--color-neutral-50: #f9fafb;   /* Very light gray - backgrounds */
--color-neutral-100: #f3f4f6;  /* Light gray - subtle backgrounds */
--color-neutral-200: #e5e7eb;  /* Light gray - borders */
--color-neutral-300: #d1d5db;  /* Medium light gray - disabled */
--color-neutral-400: #9ca3af;  /* Medium gray - placeholder text */
--color-neutral-500: #6b7280;  /* Medium gray - secondary text */
--color-neutral-600: #4b5563;  /* Dark gray - body text */
--color-neutral-700: #374151;  /* Darker gray - headings */
--color-neutral-800: #1f2937;  /* Very dark gray - emphasis */
--color-neutral-900: #111827;  /* Darkest gray - primary text */
--color-neutral-950: #030712;  /* Near black - backgrounds */
```

**Usage Guidelines:**
- `neutral-900`: Primary text, headings
- `neutral-700`: Secondary text, body content
- `neutral-500`: Muted text, captions
- `neutral-200`: Borders, dividers
- `neutral-50`: Light backgrounds
- `neutral-100`: Subtle backgrounds

### Accent Colors

Accent colors are used for status indicators and feedback.

```css
/* CSS Variables */
--color-accent-success: #10b981;  /* Green - success states */
--color-accent-warning: #f59e0b;  /* Orange - warning states */
--color-accent-error: #ef4444;    /* Red - error states */
--color-accent-info: #3b82f6;     /* Blue - info states */
```

**Usage Guidelines:**
- `accent-success`: Success messages, completed actions
- `accent-warning`: Warning messages, caution states
- `accent-error`: Error messages, destructive actions
- `accent-info`: Information messages, neutral feedback

## Typography

### Font Families

```css
/* CSS Variables */
--font-family-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
--font-family-heading: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
--font-family-mono: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
```

**Usage Guidelines:**
- `font-family-sans`: Body text, paragraphs, general content
- `font-family-heading`: All headings (h1-h6), titles
- `font-family-mono`: Code blocks, technical content

### Font Sizes

```css
/* CSS Variables */
--font-size-xs: 0.75rem;    /* 12px - Captions, labels */
--font-size-sm: 0.875rem;   /* 14px - Small text */
--font-size-base: 1rem;     /* 16px - Body text */
--font-size-lg: 1.125rem;   /* 18px - Large body text */
--font-size-xl: 1.25rem;    /* 20px - Small headings */
--font-size-2xl: 1.5rem;    /* 24px - Section headings */
--font-size-3xl: 1.875rem;  /* 30px - Page headings */
--font-size-4xl: 2.25rem;   /* 36px - Large headings */
--font-size-5xl: 3rem;      /* 48px - Hero headings */
--font-size-6xl: 3.75rem;   /* 60px - Large hero headings */
--font-size-7xl: 4.5rem;    /* 72px - Extra large headings */
--font-size-8xl: 6rem;      /* 96px - Massive headings */
--font-size-9xl: 8rem;      /* 128px - Display headings */
```

### Font Weights

```css
/* CSS Variables */
--font-weight-thin: 100;        /* Very light */
--font-weight-extralight: 200;  /* Extra light */
--font-weight-light: 300;       /* Light */
--font-weight-normal: 400;      /* Regular */
--font-weight-medium: 500;      /* Medium */
--font-weight-semibold: 600;    /* Semi-bold */
--font-weight-bold: 700;        /* Bold */
--font-weight-extrabold: 800;   /* Extra bold */
--font-weight-black: 900;       /* Black */
```

**Usage Guidelines:**
- `font-weight-normal`: Body text, paragraphs
- `font-weight-medium`: Labels, emphasis
- `font-weight-semibold`: Subheadings
- `font-weight-bold`: Main headings
- `font-weight-extrabold`: Hero headings

### Line Heights

```css
/* CSS Variables */
--line-height-tight: 1.2;     /* Headings */
--line-height-normal: 1.6;    /* Body text */
--line-height-relaxed: 1.8;   /* Large text blocks */
```

## Spacing

### Spacing Scale

The spacing system is based on a 4px (0.25rem) base unit.

```css
/* CSS Variables */
--spacing-0: 0;              /* 0px */
--spacing-0-5: 0.125rem;     /* 2px */
--spacing-1: 0.25rem;        /* 4px */
--spacing-1-5: 0.375rem;     /* 6px */
--spacing-2: 0.5rem;         /* 8px */
--spacing-2-5: 0.625rem;     /* 10px */
--spacing-3: 0.75rem;        /* 12px */
--spacing-3-5: 0.875rem;     /* 14px */
--spacing-4: 1rem;           /* 16px */
--spacing-5: 1.25rem;        /* 20px */
--spacing-6: 1.5rem;         /* 24px */
--spacing-7: 1.75rem;        /* 28px */
--spacing-8: 2rem;           /* 32px */
--spacing-9: 2.25rem;        /* 36px */
--spacing-10: 2.5rem;        /* 40px */
--spacing-11: 2.75rem;       /* 44px */
--spacing-12: 3rem;          /* 48px */
--spacing-14: 3.5rem;        /* 56px */
--spacing-16: 4rem;          /* 64px */
--spacing-20: 5rem;          /* 80px */
--spacing-24: 6rem;          /* 96px */
--spacing-28: 7rem;          /* 112px */
--spacing-32: 8rem;          /* 128px */
```

**Usage Guidelines:**
- `spacing-1` to `spacing-4`: Small gaps, padding
- `spacing-5` to `spacing-8`: Medium gaps, section spacing
- `spacing-10` to `spacing-16`: Large gaps, page sections
- `spacing-20` to `spacing-32`: Extra large gaps, hero sections

## Layout

### Container System

```css
/* Container classes */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

/* Responsive breakpoints */
@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
@media (min-width: 1536px) { .container { max-width: 1536px; } }
```

### Grid System

```css
/* Grid classes */
.grid { display: grid; gap: var(--spacing-6); }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
```

## Components

### Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Primary Action</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Outline Button -->
<button class="btn btn-outline">Outline Action</button>

<!-- Button Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<!-- Basic Card -->
<div class="card">
  <div class="card-body">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</div>

<!-- Card with Header and Footer -->
<div class="card">
  <div class="card-header">
    <h3>Card Header</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Forms

```html
<!-- Form Group -->
<div class="form-group">
  <label class="form-label">Email Address</label>
  <input class="form-input" type="email" placeholder="Enter your email">
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="form-label">Message</label>
  <textarea class="form-textarea" placeholder="Enter your message"></textarea>
</div>

<!-- Select -->
<div class="form-group">
  <label class="form-label">Category</label>
  <select class="form-select">
    <option>Select a category</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

### Badges

```html
<!-- Badge Variants -->
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

## Animations

### Animation Classes

```css
/* Animation classes */
.animate-fade-in { animation: fadeIn 0.6s ease-out; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
.animate-slide-in { animation: slideIn 0.3s ease-out; }
.animate-bounce-in { animation: bounceIn 0.6s ease-out; }
```

### Transition Classes

```css
/* Transition classes */
.transition { transition: all var(--transition-normal) ease-in-out; }
.transition-fast { transition: all var(--transition-fast) ease-in-out; }
.transition-slow { transition: all var(--transition-slow) ease-in-out; }
```

### Hover Effects

```css
/* Hover effect classes */
.card-hover:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
.image-hover:hover { transform: scale(1.02); }
```

## Responsive Design

### Breakpoints

```css
/* Responsive breakpoints */
xs: 475px   /* Extra small devices */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Utilities

```html
<!-- Responsive display -->
<div class="hidden md:block">Hidden on mobile, visible on medium+</div>
<div class="block md:hidden">Visible on mobile, hidden on medium+</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Grid items -->
</div>

<!-- Responsive spacing -->
<div class="p-4 md:p-6 lg:p-8">
  <!-- Content with responsive padding -->
</div>
```

## Accessibility

### Focus States

```css
/* Focus styles */
.btn:focus { outline: 2px solid var(--color-primary-500); outline-offset: 2px; }
.form-input:focus { border-color: var(--color-primary-500); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
```

### Screen Reader Support

```html
<!-- Screen reader only text -->
<span class="sr-only">Screen reader only content</span>

<!-- ARIA labels -->
<button aria-label="Close modal">×</button>
<input aria-describedby="email-help" type="email">
<div id="email-help">Enter a valid email address</div>
```

### High Contrast Support

```css
/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --color-neutral-300: #000000;
    --color-neutral-600: #000000;
    --color-neutral-900: #000000;
  }
}
```

### Reduced Motion Support

```css
/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Best Practices

### Color Usage

1. **Contrast**: Ensure sufficient contrast between text and background colors
2. **Consistency**: Use the same color for similar elements across the site
3. **Semantic**: Use colors to convey meaning (success, warning, error)
4. **Accessibility**: Test colors with color-blind users

### Typography

1. **Hierarchy**: Use font sizes to create clear visual hierarchy
2. **Readability**: Choose appropriate line heights for content length
3. **Consistency**: Use consistent font families for similar content types
4. **Responsive**: Scale font sizes appropriately for different screen sizes

### Spacing

1. **Consistency**: Use the spacing scale consistently throughout the design
2. **Rhythm**: Create visual rhythm with consistent spacing patterns
3. **Responsive**: Adjust spacing for different screen sizes
4. **Whitespace**: Use whitespace to improve readability and focus

### Components

1. **Reusability**: Design components to be reusable across the site
2. **Consistency**: Use consistent styling for similar components
3. **Accessibility**: Ensure all components are accessible
4. **Responsive**: Make components work well on all screen sizes

### Performance

1. **CSS Variables**: Use CSS custom properties for consistent theming
2. **Minification**: Minify CSS for production
3. **Optimization**: Optimize images and assets
4. **Loading**: Use efficient loading strategies

## Implementation Examples

### Hero Section

```html
<section class="bg-gradient-primary text-white py-20">
  <div class="container">
    <div class="text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
        Welcome to My Portfolio
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Creative developer passionate about building amazing experiences
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="btn btn-secondary btn-lg">
          View My Work
        </button>
        <button class="btn btn-outline btn-lg text-white border-white">
          Contact Me
        </button>
      </div>
    </div>
  </div>
</section>
```

### Project Card

```html
<div class="card card-hover">
  <div class="card-body">
    <div class="flex items-center gap-2 mb-4">
      <span class="badge badge-primary">React</span>
      <span class="badge badge-secondary">TypeScript</span>
    </div>
    <h3 class="text-2xl font-bold mb-3">Project Name</h3>
    <p class="text-neutral-700 mb-4">
      Project description goes here with details about the technology and features.
    </p>
    <div class="flex gap-3">
      <button class="btn btn-primary btn-sm">Live Demo</button>
      <button class="btn btn-outline btn-sm">Source Code</button>
    </div>
  </div>
</div>
```

### Contact Form

```html
<form class="space-y-6">
  <div class="form-group">
    <label class="form-label">Name</label>
    <input class="form-input" type="text" placeholder="Your name" required>
  </div>
  
  <div class="form-group">
    <label class="form-label">Email</label>
    <input class="form-input" type="email" placeholder="your@email.com" required>
  </div>
  
  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" placeholder="Your message" rows="5" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary btn-lg w-full">
    Send Message
  </button>
</form>
```

---

This style guide should be used as a reference when developing and maintaining the Personal Brand Portfolio website. Follow these guidelines to ensure consistency and quality across all pages and components. 