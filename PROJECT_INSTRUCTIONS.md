# Sonamoo - Project Instructions

## Overview

Sonamoo adalah website landing page untuk layanan healthcare/telemedicine yang dibangun menggunakan modern web technologies. Project ini adalah template starter dari cssninjaStudio yang telah diadaptasi untuk PT Sonamoo Rubber Tech.

## Tech Stack

- **Frontend Framework**: Astro v5.12.6
- **Styling**: TailwindCSS v4.1.11
- **JavaScript**: Alpine.js v3.14.9
- **Icons**: Iconify
- **Package Manager**: pnpm
- **Node Version**: >=18

## Project Structure

```
sonamoo-rubber-tech/
├── src/
│   ├── components/          # Reusable components
│   │   ├── base/           # Basic UI components (buttons, cards, etc.)
│   │   ├── content/        # Content-specific components
│   │   ├── hero/           # Hero section components
│   │   ├── navigation/     # Navigation components
│   │   ├── section/        # Layout section components
│   │   └── mockup/         # Mockup/showcase components
│   ├── layouts/            # Page layouts
│   ├── pages/              # Astro pages
│   ├── js/                 # JavaScript modules
│   └── styles/             # CSS styles
├── public/                 # Static assets
│   └── img/               # Images and illustrations
├── nginx/                  # Nginx configuration
├── dist/                   # Build output
└── docker-compose.yml      # Docker setup
```

## Development Commands

```bash
# Install dependencies
pnpm i

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Component Architecture

### Base Components

- `ButtonMain.astro` - Primary button component
- `ButtonSub.astro` - Secondary button component
- `Card.astro` - Card wrapper component
- `Logo.astro` - Logo component

### Content Components

- `IconBlock.astro` - Icon with text blocks
- `Pricing.astro` - Pricing section
- `Testimonials.astro` - Customer testimonials
- `Cta.astro` - Call-to-action sections

### Doctor Components

- `Grid.astro` - Doctor profiles grid
- `Filters.astro` - Filter system for doctors
- `Toolbar.astro` - Search and view controls

### Layout Components

- `Container.astro` - Content container wrapper
- `Section.astro` - Basic section wrapper
- `SectionMuted.astro` - Muted background section
- `SectionTitle.astro` - Section title component

## Styling Guidelines

- **TailwindCSS**: Utility-first CSS framework
- **Color Scheme**: Primary (blue), Rose (accent), Muted (grays)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing using Tailwind scale
- **Responsive**: Mobile-first breakpoints

## JavaScript Architecture

- **Alpine.js**: For interactive components
- **Modular JS**: Organized in `/src/js/` directory
- **Component-specific**: Each interactive component has its own JS module

## Content Management

- **Static Content**: Hardcoded dalam components
- **Images**: Stored in `/public/img/` directory
- **Doctor Illustrations**: SVG illustrations in `/public/img/illustrations/doctors/`

## Deployment

- **Docker**: Ready untuk deployment dengan Docker
- **Nginx**: Pre-configured nginx setup
- **Static Build**: Generates static site untuk easy hosting

## Customization Points

1. **Branding**: Update logo, colors, dan company information
2. **Content**: Modify text content dalam components
3. **Doctor Data**: Update doctor profiles dalam Grid component
4. **Pricing**: Modify pricing plans dalam Pricing component
5. **Testimonials**: Update customer testimonials
6. **Contact Info**: Update contact information dan CTAs

## Best Practices

- **Component Reusability**: Gunakan existing components sebelum membuat yang baru
- **Responsive Design**: Test pada berbagai device sizes
- **Performance**: Optimize images dan minimize JavaScript
- **SEO**: Ensure proper meta tags dan semantic HTML
- **Accessibility**: Follow WCAG guidelines

## Common Tasks

1. **Adding New Doctors**: Update Grid.astro component
2. **Modifying Sections**: Edit corresponding components in `/src/components/content/`
3. **Styling Changes**: Use TailwindCSS utilities
4. **Adding Pages**: Create new .astro files in `/src/pages/`
5. **JavaScript Functionality**: Add modules in `/src/js/`

## Environment Setup

- Ensure Node.js >=18 is installed
- Use pnpm as package manager
- Development server runs on default Astro port (usually 3000)
- Hot reload enabled for development

## Notes

- Project menggunakan Astro's component-based architecture
- Alpine.js digunakan untuk client-side interactivity
- TailwindCSS untuk rapid styling
- Template asli dari cssninjaStudio, disesuaikan untuk healthcare domain
- Optimized untuk performance dan SEO
