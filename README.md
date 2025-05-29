# 🌟 **ECLYPSE** - Modern E-commerce Platform

<div align="center">



### ⚡ **Quick Start**
```bash
git clone https://github.com/yourusername/eclypse-ecommerce.git
cd eclypse-ecommerce
pnpm run dev
```

</div>

## 🎯 **Project Overview**

Eclypse is a full-stack e-commerce platform that delivers a seamless shopping experience with modern design principles and robust functionality. Built from Figma designs with pixel-perfect accuracy and enhanced with creative features.

### ✨ **Key Highlights**
- 🎨 **Pixel-perfect** Figma design implementation
- 📱 **Fully responsive** across all devices
- ⚡ **Lightning-fast** performance with optimized code
- 🛡️ **Type-safe** development with TypeScript
- 🔄 **Real-time** cart management
- 🎭 **Smooth animations** and micro-interactions

---
## 🚀 **Getting Started**

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager

### 🔧 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eclypse-ecommerce.git
   cd eclypse-ecommerce
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (frontend + backend)
   npm install
   
   # Or install separately
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Configure your environment variables
   VITE_API_URL=http://localhost:5000
   PORT=5000
   ```

4. **Run the application**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or run separately
   npm run dev:frontend    # Frontend on http://localhost:3000
   npm run dev:backend     # Backend on http://localhost:5000
   ```

---

## 📁 **Project Structure**

```
eclypse-ecommerce/
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/     # Reusable UI components
│   │   ├── 📂 pages/          # Page components
│   │   ├── 📂 hooks/          # Custom React hooks
│   │   ├── 📂 types/          # TypeScript definitions
│   │   ├── 📂 utils/          # Helper functions
│   │   └── 📂 assets/         # Images, icons, etc.
│   ├── 📄 index.html
│   ├── 📄 tailwind.config.js
│   └── 📄 vite.config.ts
├── 📂 backend/
│   ├── 📂 src/
│   │   ├── 📂 routes/         # API routes
│   │   ├── 📂 controllers/    # Route controllers
│   │   ├── 📂 models/         # Data models
│   │   ├── 📂 middleware/     # Custom middleware
│   │   └── 📂 utils/          # Helper functions
│   ├── 📄 server.js
│   └── 📄 package.json
├── 📄 README.md
├── 📄 package.json
└── 📄 .env.example
```

---

## 🎯 **Features**

### 🔥 **Core Features**
- [x] **Product Catalog** - Browse and search products
- [x] **Shopping Cart** - Add, remove, and manage items
- [x] **Product Details** - Detailed product information
- [x] **Responsive Design** - Mobile-first approach
- [x] **Category Filtering** - Filter products by categories
- [x] **Search Functionality** - Find products quickly

### ⭐ **Bonus Features**
- [x] **Wishlist** - Save products for later
- [x] **User Authentication** - Secure login/register
- [x] **Order History** - Track previous purchases
- [x] **Product Reviews** - Customer feedback system
- [x] **Dark Mode** - Toggle between themes
- [x] **Animations** - Smooth transitions and effects

---

## 🔌 **API Endpoints**

### Products
```http
GET    /api/products           # Get all products
GET    /api/products/:id       # Get single product
GET    /api/products/category/:category  # Get products by category
```


## 🌐 **Deployment**

### **Frontend** (Vercel)
```bash
npm run build
vercel --prod
```

### **Backend** (Render)
```bash
# Push to your repository
git push origin main

# Deploy using platform of choice
```

**Live URLs:**
- 🎨 **Frontend**: [your-frontend-url.vercel.app]((https://eclypse-eosin.vercel.app/))
- ⚙️ **Backend**: [your-backend-url.railway.app]((https://eclypse-3.onrender.com/))

---


---

## 🎨 **Design System**

### Colors
- **Primary**: `#8B5CF6` (Purple)
- **Secondary**: `#10B981` (Emerald)
- **Accent**: `#F59E0B` (Amber)
- **Dark**: `#1F2937` (Gray-800)

### Typography
- **Headings**: Inter, sans-serif
- **Body**: Inter, sans-serif
- **Code**: JetBrains Mono

---

## 📝 **Development Notes**

### **Code Quality**
- ✅ ESLint configuration for consistent code style
- ✅ Prettier for code formatting
- ✅ TypeScript for type safety
- ✅ Comprehensive error handling

### **Performance**
- ⚡ Lazy loading for images and components
- ⚡ Code splitting for optimal bundle size
- ⚡ Debounced search functionality
- ⚡ Optimized re-renders with React.memo

---

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 **Developer**

<div align="center">

**Built with ❤️ by [Sourav]**




<div align="center">

**⭐ Star this repository if you found it helpful!**

