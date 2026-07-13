# React Food Ordering Application

## Overview

A responsive React-based food ordering application with shopping cart, checkout, and order management functionality.

## Features

- **Home Page**: Hero section with welcome message and call-to-action
- **Menu Page**: Display food items from a local data file with add-to-cart functionality
- **Cart Page**: View selected items, modify quantities, and remove items
- **Checkout Page**: Form validation, customer details collection, and payment method selection
- **About Page**: Information about the restaurant
- **Navigation**: Responsive navigation bar with React Router

## Project Structure

```
src/
├── assets/           # Images and other assets
├── components/       # Reusable React components
│   ├── FoodCard.jsx
│   ├── FoodCard.css
│   ├── Navigation.jsx
│   └── Navigation.css
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── About.jsx
│   └── *.css files
├── data/             # Local data files
│   └── foodData.json
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Performance Optimization

- **Lazy Loading**: Used for application pages
- **Suspense**: Loading component for lazy-loaded pages
- **useMemo**: Memoized food data in Menu component
- **useCallback**: Memoized event handlers in Cart component
- **React.memo**: Memoized FoodCard component (optional enhancement)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Technologies Used

- React 18
- React Router DOM v6
- Vite
- CSS3

## Features Implemented

✓ Responsive design
✓ Component-based architecture
✓ State management with hooks
✓ React Router navigation
✓ Form validation
✓ Performance optimization
✓ Clean and maintainable code
