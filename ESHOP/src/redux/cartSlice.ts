import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/shop';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  totalItems: 0,
};

const normalizeId = (id: any): string => {
  if (typeof id === 'object' && '$oid' in id) {
    return id.$oid;
  }
  return id.toString();
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
  // Normalize id (convert MongoDB object to string)
  const productId =
    typeof action.payload._id === 'object' && '$oid' in action.payload._id
      ? action.payload._id.$oid
      : action.payload._id.toString();

  const existingItem = state.items.find(item => {
    const itemId =
      typeof item._id === 'object' && '$oid' in item._id
        ? item._id.$oid
        : item._id.toString();
    return itemId === productId;
  });

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }

  // totals
  state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
},

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    updateQuantity: (state, action: PayloadAction<{ _id: string; quantity: number }>) => {
      const item = state.items.find(item => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
   incrementQuantity: (state, action: PayloadAction<string>) => {
  const item = state.items.find(
    i => normalizeId(i._id) === action.payload
  );
  if (item) {
    item.quantity += 1;
  }

  state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
},

decrementQuantity: (state, action: PayloadAction<string>) => {
  const item = state.items.find(
    i => normalizeId(i._id) === action.payload
  );
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }

  state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
},

  },
});

export const { addToCart, removeFromCart, updateQuantity, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;