# Architecture — Sri Lankan Tour Guide Platform

## Tech Stack
- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **State:** React Context (booking funnel)
- **Fonts:** Montserrat (headings), Inter (body) via Google Fonts

## Design Tokens
| Token | Hex |
|---|---|
| Deep Jungle Green | `#1A4D2E` |
| Sunrise Orange | `#E8641B` |
| Light Sand | `#FAF3E0` |
| Off-White | `#FEFCF6` |
| Dark Text | `#1B1B1B` |

## Folder Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, navbar, footer)
│   ├── page.tsx            # Home page
│   ├── tours/page.tsx      # Tour packages page
│   └── book/page.tsx       # Booking funnel page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutGuide.tsx
│   ├── DestinationsGrid.tsx
│   ├── EcoPledge.tsx
│   ├── Testimonials.tsx
│   ├── TourCard.tsx
│   ├── FilterBar.tsx
│   └── BookingFunnel/
│       ├── BookingProvider.tsx
│       ├── StepDates.tsx
│       ├── StepTravelers.tsx
│       ├── StepContact.tsx
│       └── StepSuccess.tsx
data/
└── mock.ts                 # All mock data (tours, destinations, testimonials)
docs/
├── architecture.md
└── kanban.md
```

## Component Tree
```
RootLayout
├── Navbar
├── Page Content
│   ├── HomePage
│   │   ├── HeroSection (parallax)
│   │   ├── AboutGuide (scroll reveal)
│   │   ├── DestinationsGrid (hover-lift cards)
│   │   ├── EcoPledge (split layout)
│   │   └── Testimonials (carousel)
│   ├── ToursPage
│   │   ├── FilterBar
│   │   └── TourCard[] (hover-lift)
│   └── BookPage
│       └── BookingFunnel
│           ├── StepDates
│           ├── StepTravelers
│           ├── StepContact
│           └── StepSuccess
└── Footer
```

## Mock Data Schemas

### Tour Package
```ts
{ id, title, subtitle, description, price, duration, type, highlights[], image, included[] }
```

### Destination
```ts
{ id, name, description, image, tags[] }
```

### Testimonial
```ts
{ id, name, location, text, avatar, rating }
```
