export type RootStackParamList = {
  ProductHome: undefined;
  SingleProduct: undefined;
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
  ShippingAddress: undefined;
  Payment: { shippingAddress: any };
  Confirmation: { shippingAddress: any; paymentInfo: any };
  Admin: undefined;
  user: undefined;
};