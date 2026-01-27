# Next.js Server Components & SSR Examples

Complete Next.js project demonstrating Server Components and Server-Side Rendering.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Server/
├── app/
│   ├── layout.jsx                    # Root layout
│   ├── page.jsx                      # Homepage with navigation
│   ├── rsc-example/                  # React Server Component
│   │   ├── page.jsx                 # Server component (fetches data)
│   │   └── rsc-modal.jsx            # Client component (modal)
│   ├── ssr-example/                  # Server-Side Rendering
│   │   ├── page.jsx                 # Server component (fetches data)
│   │   ├── client-component.jsx     # Client component (hydrates)
│   │   └── modal-content.jsx        # Client component (modal)
│   ├── csr-example/                  # Client-Side Rendering
│   │   ├── page.jsx                 # Client component (fetches data)
│   │   └── csr-modal.jsx            # Client component (modal)
│   ├── components/
│   │   └── user-modal.jsx           # Modal component for homepage
│   └── api/
│       └── users/
│           └── route.js             # API route for fetching users
├── lib/
│   └── api.js                       # Utility functions
├── package.json
└── next.config.js
```

## 🔍 Examples

### 1. React Server Component - RSC (`/rsc-example`)
- **Files**: `app/rsc-example/page.jsx` (server) + `app/rsc-example/rsc-modal.jsx` (client)
- **Route**: http://localhost:3000/rsc-example
- **Features**:
  - ✅ Data fetched on SERVER (no JS for data fetching)
  - ✅ Modal interactivity via Client Component
  - ✅ Fastest initial load
  - ✅ SEO friendly
  - ✅ Minimal JavaScript bundle
- **Use Case**: Static content, data fetching, when you need minimal JS

### 2. Server-Side Rendering - SSR (`/ssr-example`)
- **Files**: `app/ssr-example/page.jsx` (server) + `app/ssr-example/client-component.jsx` (client)
- **Route**: http://localhost:3000/ssr-example
- **Features**:
  - ✅ Renders on server first (SEO friendly)
  - ✅ Hydrates on client (full interactivity)
  - ✅ Can use useState, useEffect, event handlers
  - ✅ JavaScript bundle sent to client
  - ⚠️ Slower initial load than RSC
- **Use Case**: When you need SEO + full client interactivity

### 3. Client-Side Rendering - CSR (`/csr-example`)
- **Files**: `app/csr-example/page.jsx` (client) + `app/csr-example/csr-modal.jsx` (client)
- **Route**: http://localhost:3000/csr-example
- **Features**:
  - ⚠️ Everything runs on CLIENT
  - ✅ Full client-side control
  - ✅ Fast navigation (SPA)
  - ❌ Not SEO friendly
  - ❌ Slower initial load
- **Use Case**: Admin panels, dashboards, when SEO not important

## 🔑 Key Differences

| Feature | RSC | SSR | CSR |
|---------|-----|-----|-----|
| Data fetching | Server | Server | Client |
| JavaScript to client | Minimal | Full | Full |
| Client interactivity | Via Client Components | ✅ Yes | ✅ Yes |
| SEO friendly | ✅ Yes | ✅ Yes | ❌ No |
| Can use hooks | In Client Components | ✅ Yes | ✅ Yes |
| Can use async/await | ✅ Yes (Server) | ✅ Yes (Server) | ❌ No |
| Initial load speed | ⚡ Fastest | 🐢 Medium | 🐌 Slowest |
| Use case | Static content, data fetching | SEO + interactivity | Admin panels, dashboards |

## 📝 How It Works

### RSC (React Server Component) Flow:
1. Server fetches data using `fetchUsers()` in `page.jsx`
2. Server renders HTML
3. Only Client Component (modal) JavaScript sent to client
4. Client displays content + modal interactivity

### SSR (Server-Side Rendering) Flow:
1. Server fetches data in `page.jsx` (server component)
2. Server renders HTML with data
3. HTML + Full JavaScript bundle sent to client
4. Client hydrates React components (`client-component.jsx`)
5. Client can update state and handle events

### CSR (Client-Side Rendering) Flow:
1. Initial HTML sent (minimal/empty)
2. JavaScript bundle loads
3. React renders on client
4. API call fetches data (`/api/users`)
5. Component updates with data
6. Modal interactivity available

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **App Router** - Next.js routing system

## 📚 Learn More

- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
