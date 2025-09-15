import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  value: number;
}

const initialState: CartState = {
  value: 10,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
