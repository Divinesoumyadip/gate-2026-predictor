# GATE 2026 Rank Predictor - Complete Production Build

## Project Structure
```
gate-predictor/
├── app/
│   ├── layout.tsx                    # Root layout with fonts & metadata
│   ├── page.tsx                      # Landing page (redirects or shows hero)
│   ├── globals.css                   # Global styles + Tailwind
│   ├── login/
│   │   └── page.tsx                  # 3D Login/Signup page
│   ├── dashboard/
│   │   └── page.tsx                  # Protected predictor dashboard
│   ├── results/
│   │   └── page.tsx                  # Results page with animations
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts          # NextAuth config
│       ├── predict/
│       │   └── route.ts              # Rank prediction API
│       └── user/
│           └── route.ts              # User management
├── components/
│   ├── three/
│   │   ├── HeroScene.tsx             # 3D landing scene
│   │   ├── ParticleField.tsx         # Floating particles
│   │   └── GearMesh.tsx              # Mechanical gear 3D
│   ├── ui/
│   │   ├── GlassCard.tsx             # Glassmorphism card
│   │   ├── NeonButton.tsx            # Animated CTA buttons
│   │   └── CountUp.tsx               # Number counter animation
│   ├── predictor/
│   │   ├── BranchSelector.tsx        # Branch selection UI
│   │   ├── MarksSlider.tsx           # Custom marks slider
│   │   ├── CategoryToggle.tsx        # Category selector
│   │   └── ResultsReveal.tsx         # Results with animations
│   └── layout/
│       └── Navbar.tsx                # Navigation
├── lib/
│   ├── auth.ts                       # NextAuth config & options
│   ├── mongodb.ts                    # MongoDB connection
│   ├── rankData.ts                   # Historical GATE rank data
│   └── predictor.ts                  # Core prediction algorithm
├── models/
│   ├── User.ts                       # Mongoose User model
│   └── Prediction.ts                 # Mongoose Prediction model
├── middleware.ts                     # Route protection
├── .env.local.example                # Environment variables template
├── tailwind.config.ts                # Tailwind + custom theme
├── next.config.ts                    # Next.js config
└── package.json
```
