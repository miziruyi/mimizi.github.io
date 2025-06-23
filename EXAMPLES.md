# Design System Examples

This document provides practical examples of how to use the design system in the Personal Brand Portfolio website.

## Quick Start Examples

### 1. Basic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link href="css/styles.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-neutral-50 text-neutral-900">
    <!-- Navigation -->
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-primary-600">Your Brand</h1>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="text-neutral-700 hover:text-primary-600 transition">Home</a>
                    <a href="#" class="text-neutral-700 hover:text-primary-600 transition">About</a>
                    <a href="#" class="text-neutral-700 hover:text-primary-600 transition">Projects</a>
                    <a href="#" class="text-neutral-700 hover:text-primary-600 transition">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <!-- Your content here -->
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-900 text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
```

### 2. Hero Section

```html
<section class="bg-gradient-primary text-white py-20">
    <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
                Welcome to My Portfolio
            </h1>
            <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style="animation-delay: 0.2s;">
                Creative developer passionate about building amazing experiences
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.4s;">
                <button class="btn btn-secondary btn-lg">
                    <i class="fas fa-eye mr-2"></i>
                    View My Work
                </button>
                <button class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-600">
                    <i class="fas fa-envelope mr-2"></i>
                    Contact Me
                </button>
            </div>
        </div>
    </div>
</section>
```

### 3. Feature Cards

```html
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-neutral-900 mb-4">My Skills</h2>
            <p class="text-xl text-neutral-700 max-w-2xl mx-auto">
                I specialize in modern web technologies and design principles
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="card card-hover">
                <div class="card-body text-center">
                    <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-2xl text-primary-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Web Development</h3>
                    <p class="text-neutral-700">
                        Building responsive and modern web applications using the latest technologies.
                    </p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card card-hover">
                <div class="card-body text-center">
                    <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-palette text-2xl text-secondary-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">UI/UX Design</h3>
                    <p class="text-neutral-700">
                        Creating beautiful and intuitive user interfaces with excellent user experience.
                    </p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="card card-hover">
                <div class="card-body text-center">
                    <div class="w-16 h-16 bg-accent-success rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-mobile-alt text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Mobile Development</h3>
                    <p class="text-neutral-700">
                        Developing cross-platform mobile applications for iOS and Android.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 4. Project Showcase

```html
<section class="py-16 bg-neutral-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-neutral-900 mb-4">Featured Projects</h2>
            <p class="text-xl text-neutral-700 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Project 1 -->
            <div class="card card-hover">
                <div class="relative overflow-hidden">
                    <img src="assets/project1.jpg" alt="Project 1" class="w-full h-64 object-cover image-hover">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-primary">React</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="text-2xl font-bold mb-3">E-Commerce Platform</h3>
                    <p class="text-neutral-700 mb-4">
                        A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="badge badge-secondary">TypeScript</span>
                        <span class="badge badge-secondary">Node.js</span>
                        <span class="badge badge-secondary">MongoDB</span>
                    </div>
                    <div class="flex gap-3">
                        <button class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            Live Demo
                        </button>
                        <button class="btn btn-outline btn-sm">
                            <i class="fab fa-github mr-2"></i>
                            Source Code
                        </button>
                    </div>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="card card-hover">
                <div class="relative overflow-hidden">
                    <img src="assets/project2.jpg" alt="Project 2" class="w-full h-64 object-cover image-hover">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-primary">Vue.js</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="text-2xl font-bold mb-3">Task Management App</h3>
                    <p class="text-neutral-700 mb-4">
                        A collaborative task management application with real-time updates, team collaboration, and progress tracking.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="badge badge-secondary">Vue.js</span>
                        <span class="badge badge-secondary">Firebase</span>
                        <span class="badge badge-secondary">Vuetify</span>
                    </div>
                    <div class="flex gap-3">
                        <button class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            Live Demo
                        </button>
                        <button class="btn btn-outline btn-sm">
                            <i class="fab fa-github mr-2"></i>
                            Source Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 5. Contact Form

```html
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
                <p class="text-xl text-neutral-700">
                    Ready to start a project? Let's discuss how I can help bring your ideas to life.
                </p>
            </div>

            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-group">
                        <label class="form-label">First Name</label>
                        <input class="form-input" type="text" placeholder="John" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Last Name</label>
                        <input class="form-input" type="text" placeholder="Doe" required>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input class="form-input" type="email" placeholder="john@example.com" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Subject</label>
                    <select class="form-select">
                        <option>Select a subject</option>
                        <option>Project Inquiry</option>
                        <option>Job Opportunity</option>
                        <option>Partnership</option>
                        <option>Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Message</label>
                    <textarea class="form-textarea" placeholder="Tell me about your project..." rows="5" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg w-full">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Send Message
                </button>
            </form>
        </div>
    </div>
</section>
```

### 6. Testimonials

```html
<section class="py-16 bg-neutral-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-neutral-900 mb-4">What Clients Say</h2>
            <p class="text-xl text-neutral-700 max-w-2xl mx-auto">
                Don't just take my word for it - here's what my clients have to say about working with me
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div class="card">
                <div class="card-body">
                    <div class="flex items-center mb-4">
                        <div class="flex text-accent-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-neutral-700 mb-4 italic">
                        "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations."
                    </p>
                    <div class="flex items-center">
                        <img src="assets/client1.jpg" alt="Client 1" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-neutral-900">Sarah Johnson</h4>
                            <p class="text-sm text-neutral-500">CEO, TechStart</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="card">
                <div class="card-body">
                    <div class="flex items-center mb-4">
                        <div class="flex text-accent-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-neutral-700 mb-4 italic">
                        "The attention to detail and quality of work is outstanding. Highly recommended for any web development project."
                    </p>
                    <div class="flex items-center">
                        <img src="assets/client2.jpg" alt="Client 2" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-neutral-900">Michael Chen</h4>
                            <p class="text-sm text-neutral-500">Founder, DesignLab</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="card">
                <div class="card-body">
                    <div class="flex items-center mb-4">
                        <div class="flex text-accent-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-neutral-700 mb-4 italic">
                        "Professional, responsive, and incredibly talented. They transformed our vision into a beautiful reality."
                    </p>
                    <div class="flex items-center">
                        <img src="assets/client3.jpg" alt="Client 3" class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-neutral-900">Emily Rodriguez</h4>
                            <p class="text-sm text-neutral-500">Marketing Director, InnovateCo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 7. Statistics Section

```html
<section class="py-16 bg-primary-600 text-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="animate-fade-in-up">
                <div class="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <p class="text-primary-100">Projects Completed</p>
            </div>
            
            <div class="animate-fade-in-up" style="animation-delay: 0.1s;">
                <div class="text-4xl md:text-5xl font-bold mb-2">30+</div>
                <p class="text-primary-100">Happy Clients</p>
            </div>
            
            <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
                <div class="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <p class="text-primary-100">Years Experience</p>
            </div>
            
            <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
                <div class="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <p class="text-primary-100">Support Available</p>
            </div>
        </div>
    </div>
</section>
```

### 8. Call-to-Action

```html
<section class="py-16 bg-gradient-secondary text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm here to help you create something amazing.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn btn-primary btn-lg">
                <i class="fas fa-rocket mr-2"></i>
                Start Project
            </button>
            <button class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-secondary-600">
                <i class="fas fa-download mr-2"></i>
                Download Resume
            </button>
        </div>
    </div>
</section>
```

## Color Usage Examples

### Text Colors
```html
<p class="text-primary-600">Primary colored text</p>
<p class="text-secondary-600">Secondary colored text</p>
<p class="text-neutral-700">Body text</p>
<p class="text-neutral-500">Muted text</p>
<p class="text-accent-success">Success message</p>
<p class="text-accent-warning">Warning message</p>
<p class="text-accent-error">Error message</p>
```

### Background Colors
```html
<div class="bg-primary-50">Light primary background</div>
<div class="bg-secondary-100">Light secondary background</div>
<div class="bg-neutral-50">Light neutral background</div>
<div class="bg-primary-600 text-white">Primary background with white text</div>
<div class="bg-accent-success text-white">Success background</div>
```

### Border Colors
```html
<div class="border border-primary-200">Primary border</div>
<div class="border border-neutral-300">Neutral border</div>
<div class="border-l-4 border-accent-success">Success accent border</div>
```

## Typography Examples

### Headings
```html
<h1 class="text-5xl font-extrabold text-neutral-900">Main Heading</h1>
<h2 class="text-4xl font-bold text-neutral-900">Section Heading</h2>
<h3 class="text-3xl font-semibold text-neutral-900">Subsection Heading</h3>
<h4 class="text-2xl font-semibold text-neutral-900">Card Heading</h4>
<h5 class="text-xl font-medium text-neutral-900">Small Heading</h5>
<h6 class="text-lg font-medium text-neutral-900">Tiny Heading</h6>
```

### Body Text
```html
<p class="text-base text-neutral-700">Regular body text</p>
<p class="text-lg text-neutral-700">Large body text</p>
<p class="text-sm text-neutral-500">Small text</p>
<p class="text-xs text-neutral-400">Extra small text</p>
```

### Font Weights
```html
<p class="font-thin">Thin text</p>
<p class="font-light">Light text</p>
<p class="font-normal">Normal text</p>
<p class="font-medium">Medium text</p>
<p class="font-semibold">Semi-bold text</p>
<p class="font-bold">Bold text</p>
<p class="font-extrabold">Extra bold text</p>
<p class="font-black">Black text</p>
```

## Spacing Examples

### Margins
```html
<div class="m-1">Small margin (4px)</div>
<div class="m-4">Medium margin (16px)</div>
<div class="m-8">Large margin (32px)</div>
<div class="mt-4">Top margin only</div>
<div class="mb-6">Bottom margin only</div>
<div class="mx-auto">Horizontal auto margin (centering)</div>
```

### Padding
```html
<div class="p-2">Small padding (8px)</div>
<div class="p-4">Medium padding (16px)</div>
<div class="p-8">Large padding (32px)</div>
<div class="px-4">Horizontal padding only</div>
<div class="py-6">Vertical padding only</div>
```

## Responsive Examples

### Responsive Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card">Item 1</div>
    <div class="card">Item 2</div>
    <div class="card">Item 3</div>
</div>
```

### Responsive Text
```html
<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
    Responsive Heading
</h1>
```

### Responsive Spacing
```html
<div class="p-4 md:p-6 lg:p-8">
    Content with responsive padding
</div>
```

### Responsive Display
```html
<div class="hidden md:block">Hidden on mobile</div>
<div class="block md:hidden">Visible only on mobile</div>
```

## Animation Examples

### Fade In Animations
```html
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-fade-in-up">Fade in from bottom</div>
<div class="animate-slide-in">Slide in from left</div>
<div class="animate-bounce-in">Bounce in animation</div>
```

### Hover Effects
```html
<div class="card card-hover">Card with hover effect</div>
<img src="image.jpg" class="image-hover" alt="Image with hover effect">
<button class="btn btn-custom">Button with custom hover effect</button>
```

### Transitions
```html
<div class="transition">Smooth transition on all properties</div>
<div class="transition-fast">Fast transition</div>
<div class="transition-slow">Slow transition</div>
```

## Accessibility Examples

### Focus States
```html
<button class="btn btn-primary focus-visible:focus">Button with focus style</button>
<input class="form-input" type="text" placeholder="Input with focus style">
```

### Screen Reader Support
```html
<button aria-label="Close modal" class="btn btn-outline">×</button>
<div class="sr-only">Screen reader only content</div>
```

### ARIA Labels
```html
<nav aria-label="Main navigation">
    <ul>
        <li><a href="#" aria-current="page">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
```

---

These examples demonstrate how to effectively use the design system to create consistent, accessible, and beautiful web pages. Use these patterns as a foundation and customize them to match your specific needs. 