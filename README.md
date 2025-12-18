# GreenGrowth Ltd. - Business Website Demo

A modern, responsive business website demo built with React, TypeScript, and Material-UI. This project was created as a portfolio piece for freelancer.com, showcasing professional web development skills including authentication systems, routing, and clean code architecture.

## 🚀 Easy Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Running

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── api/
│   └── auth/
│       ├── auth.api.ts      # Real API implementation
│       ├── auth.mock.ts      # Mock API for development
│       ├── auth.service.ts   # Service layer with mock/real API switch
│       └── auth.types.ts     # TypeScript type definitions
├── app/
│   ├── App.tsx              # Main app component
│   ├── route.tsx            # React Router configuration
│   └── theme.ts             # Material-UI theme
├── components/
│   ├── authForm.tsx         # Authentication form component
│   ├── authButtonForm.tsx   # Reusable button components
│   ├── background.tsx       # Background component
│   └── button.tsx           # Custom button component
└── pages/
    ├── home.tsx             # Home page
    ├── auth.tsx             # Authentication page
    ├── cPanel.tsx           # Control panel (protected)
    └── donate.tsx           # Donation page
```

## 🔐 Authentication System

The project includes a complete authentication system with a flexible architecture:

### Auth API Architecture

- **`auth.types.ts`**: TypeScript interfaces for authentication (SignUpRequest, SignInRequest, User, AuthResponse)
- **`auth.api.ts`**: Real API implementation for production use
- **`auth.mock.ts`**: Mock API implementation for development and testing
  - Includes a default test user: `ukukovec@example.com` / `password123`
  - Simulates network delays (200ms)
  - Validates passwords and user data
- **`auth.service.ts`**: Service layer that switches between mock and real API
  - Set `USE_MOCK = true` to use mock API (default)
  - Set `USE_MOCK = false` to use real API

### Features

- ✅ User registration (sign up)
- ✅ User login (sign in)
- ✅ Password validation
- ✅ Forgot password functionality
- ✅ Token-based authentication
- ✅ Smooth transitions and loading states

### Default Test Credentials

- **Email**: `ukukovec@example.com`
- **Password**: `password123`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation
- **Vite** - Build tool and dev server
- **Emotion** - CSS-in-JS styling

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features

- Modern, responsive design
- Authentication system with mock/real API switching
- Protected routes (cPanel)
- Smooth page transitions
- Clean, maintainable code structure
- TypeScript for type safety
- Material-UI components

## 📄 About This Project

This project was created as a portfolio demonstration for freelancer.com, showcasing:

- Professional React/TypeScript development
- Clean code architecture and separation of concerns
- Authentication system implementation
- Responsive UI/UX design
- Modern development practices

## 🔧 Configuration

### Switching Between Mock and Real API

Edit `src/api/auth/auth.service.ts`:

```typescript
const USE_MOCK = true // Use mock API (default)
const USE_MOCK = false // Use real API
```

### Environment Variables

Create a `.env` file for API configuration:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📞 Contact

For integration inquiries or custom requirements, please contact us.

---

**Note**: This is a demonstration project. Some features are placeholders and can be customized based on requirements.
