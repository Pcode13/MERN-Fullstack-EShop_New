import baseURL, { endpoints } from "../common/baseURL";

export const endPoints = {
  baseURL,
  productURL: endpoints.products,
  categoriesURL: endpoints.categories,
  usersURL: endpoints.users,
  ordersURL: endpoints.orders,
  cartURL: endpoints.cart,
  loginURL: endpoints.login,
  registerURL: endpoints.register,
};
