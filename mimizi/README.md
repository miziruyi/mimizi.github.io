# Personal Brand Portfolio Website

A modern, responsive personal brand portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: Form validation, smooth scrolling, and dynamic content
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Fast Loading**: Optimized images and efficient code structure
- **Cross-browser Compatible**: Works on all modern browsers
- **Design System**: Comprehensive color, typography, and spacing system

## Project Structure

```
mimizi/
├── index.html          # Homepage
├── about.html          # About page
├── projects.html       # Projects showcase
├── blog.html           # Blog articles
├── contact.html        # Contact form
├── css/
│   └── styles.css      # Custom styles and animations
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images, fonts, and other static resources
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Design System

### Color System

The website uses a comprehensive color system with CSS custom properties:

#### Primary Colors
- `primary-50` to `primary-950`: Blue color palette
- Main brand color: `primary-600` (#2563eb)
- Dark variant: `primary-800` (#1e3a8a)

#### Secondary Colors
- `secondary-50` to `secondary-950`: Cyan color palette
- Used for accents and highlights

#### Neutral Colors
- `neutral-50` to `neutral-950`: Gray color palette
- Text colors: `neutral-900` (dark), `neutral-700` (medium), `neutral-500` (light)
- Background colors: `neutral-50` (light), `neutral-100` (very light)

#### Accent Colors
- `accent-success`: Green (#10b981)
- `accent-warning`: Orange (#f59e0b)
- `accent-error`: Red (#ef4444)
- `accent-info`: Blue (#3b82f6)

### Typography System

#### Font Families
- **Sans-serif**: Inter (primary text)
- **Heading**: Montserrat (titles and headings)
- **Monospace**: Fira Code (code blocks)

#### Font Sizes
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px)
- `6xl`: 3.75rem (60px)

#### Font Weights
- `thin`: 100
- `extralight`: 200
- `light`: 300
- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800
- `black`: 900

### Spacing System

Based on 4px (0.25rem) base unit:

- `0`: 0
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `5`: 1.25rem (20px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `10`: 2.5rem (40px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)

### Border Radius System

- `none`: 0
- `sm`: 0.125rem (2px)
- `DEFAULT`: 0.25rem (4px)
- `md`: 0.375rem (6px)
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px)
- `3xl`: 1.5rem (24px)
- `full`: 9999px

### Shadow System

- `none`: No shadow
- `sm`: Small shadow
- `DEFAULT`: Default shadow
- `md`: Medium shadow
- `lg`: Large shadow
- `xl`: Extra large shadow
- `2xl`: 2x large shadow
- `inner`: Inner shadow

### Responsive Breakpoints

- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Pages

### 1. Homepage (index.html)
- Hero section with introduction
- Featured skills showcase
- Highlighted projects
- Call-to-action section

### 2. About Page (about.html)
- Personal story and background
- Experience statistics
- Detailed skills breakdown
- Professional journey

### 3. Projects Page (projects.html)
- Project portfolio with filters
- Detailed project descriptions
- Technology tags
- Live demo and source code links

### 4. Blog Page (blog.html)
- Featured articles
- Blog post listings
- Search functionality
- Newsletter subscription
- Categories and recent posts

### 5. Contact Page (contact.html)
- Contact form with validation
- Contact information
- Social media links
- FAQ section

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **JavaScript**: Interactive functionality
- **FontAwesome**: Icon library
- **Google Fonts**: Typography (Inter, Montserrat, Fira Code)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Serve locally**:
   ```bash
   npm run serve
   ```

### Quick Start (without build tools)

1. **Open `index.html`** directly in your web browser
2. **Customize** the content to match your personal brand
3. **Deploy** to your preferred hosting service

## Customization

### Colors
Update the color system in `tailwind.config.js` and `css/styles.css`:

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e40af',
  }
}
```

### Typography
Modify font families and sizes in the configuration files:

```javascript
// tailwind.config.js
fontFamily: {
  'sans': ['Inter', 'ui-sans-serif', ...],
  'heading': ['Montserrat', 'ui-sans-serif', ...],
}
```

### Content
Update the following in each HTML file:
- Personal information (name, title, description)
- Contact details
- Project information
- Blog content
- Social media links

### Images
Replace placeholder images in the `assets/` folder:
- Profile photos
- Project screenshots
- Blog post images

## Component System

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Cards
```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text">
</div>
```

### Badges
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
```

## Features

### Responsive Navigation
- Fixed navigation bar
- Mobile hamburger menu
- Smooth scrolling to sections

### Form Validation
- Client-side form validation
- Success/error notifications
- Loading states

### Animations
- Scroll-triggered animations
- Hover effects
- Smooth transitions

### Project Filtering
- Category-based filtering
- Dynamic content updates
- Smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images
- Minified CSS and JavaScript
- Efficient loading strategies
- Responsive images

## SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data markup
- Clean URLs

## Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- High contrast ratios
- Focus indicators

## Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable cloud hosting
- **Traditional hosting**: Upload files to any web server

## Development

### Build Process
1. **Development**: `npm run dev` - Watches for changes and compiles CSS
2. **Production**: `npm run build` - Minifies CSS for production
3. **Local Server**: `npm run serve` - Starts local development server

### File Structure
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `css/styles.css`: Custom styles and CSS variables
- `js/main.js`: JavaScript functionality

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact:
- Email: hello@yourname.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using modern web technologies** 