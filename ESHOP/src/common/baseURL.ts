import { Platform } from "react-native";

let baseURL = "http://localhost:3000/api/v1";

if (Platform.OS === "android") {
  baseURL = "http://10.0.2.2:3000/api/v1"; // Android emulator
} else if (Platform.OS === "ios") { 
  baseURL = "http://localhost:3000/api/v1"; // iOS simulator
}

export default baseURL;

// API Endpoints
export const endpoints = {
  // Products
  products: `${baseURL}/products`,
  productById: (id: string) => `${baseURL}/products/${id}`,
  productsByCategory: (categoryId: string) => `${baseURL}/products?category=${categoryId}`,
  searchProducts: (query: string) => `${baseURL}/products/search?q=${encodeURIComponent(query)}`,
  
  // Categories
  categories: `${baseURL}/categories`,
  
  // Users
  users: `${baseURL}/users`,
  login: `${baseURL}/auth/login`,
  register: `${baseURL}/auth/register`,
  
  // Orders
  orders: `${baseURL}/orders`,
  createOrder: `${baseURL}/orders`,
  
  // Cart
  cart: `${baseURL}/cart`,
};