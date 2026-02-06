# XYZ & Associates - CA Firm Website

A modern, professional, trust-focused website for a Chartered Accountant firm based in Ahmedabad, Gujarat.

## Features

- **Modern Design**: Clean, premium look suitable for finance and professional services
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized performance with lazy loading and modern build tools
- **SEO Friendly**: Semantic HTML, meta tags, and proper heading hierarchy

## Pages

1. **Home** - Hero section, services overview, why choose us, stats, testimonials, CTA
2. **About Us** - Company story, mission & vision, team, timeline, certifications
3. **Services** - Detailed service descriptions with features and benefits
4. **Why Choose Us** - Differentiators, comparison table, guarantees
5. **Contact Us** - Contact form, office info, FAQs, map placeholder

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # Sticky navigation header
│   │   └── Footer.jsx      # Professional footer
│   ├── ui/
│   │   ├── ContactCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── StatCard.jsx
│   │   └── TestimonialCard.jsx
│   └── utils/
│       └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyChooseUs.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design System

### Colors

- **Primary**: Navy blue shades (#0f2744 to #3b82f6)
- **Accent**: Green shades for success/growth (#22c55e)
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headings**: Poppins (bold, semibold)
- **Body**: Inter (regular, medium)

### Components

- Rounded cards with soft shadows
- Smooth hover transitions
- Consistent spacing and padding
- Icon-based visual hierarchy

## Customization

### Updating Content

Edit the data arrays in each page component to update:
- Services information
- Team members
- Testimonials
- Statistics
- FAQs

### Styling

Modify `tailwind.config.js` to change:
- Color palette
- Typography
- Shadows
- Animations

### Adding Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `Header.jsx` and `Footer.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created as a demo website template.

---

Built with React + Tailwind CSS
