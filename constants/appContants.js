// 🌐 API Base URLs
export const AUTH_API_BASE_URL = 'https://dummyjson.com'; // For login/signup
export const PRODUCT_API_BASE_URL = 'https://fakestoreapi.in'; // For fetching fake grocery/product data

// ⏱️ Timeout settings
export const API_TIMEOUT = 30000; // in milliseconds

// 🔐 Session Keys for AsyncStorage
export const SESSION_KEYS = Object.freeze({
  AUTH: 'auth',             // For storing user auth state
  WISHLIST: 'wishlist',     // Wishlist items
  CART: 'cart',             // Cart items
  PANTRY: 'pantry',         // Pantry items
});

// 🚀 API Endpoints
export const apiEndpoints = Object.freeze({
  LOGIN_URL: '/auth/login',         // POST login
  SIGNUP_URL: '/users/add',         // POST signup (dummyjson)
  GET_PRODUCTS: '/api/products',    // GET product list (fakestoreapi.in)
  GET_USER: '/auth/me',             // GET logged in user profile
});

// 📦 Service type flags (useful for switching base URLs)
export const Service = Object.freeze({
  AUTH: 0,
  PRODUCT: 1,
});
