import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  selectedLabel: null,
  // cart: [
  //   {
  //     id: 24,
  //     assetPath: 'assam_black_tea.webp',
  //     name: 'Assam Black Tea',
  //     description: '',
  //     currency: 'HKD',
  //     price: 22,
  //     labels: ['original_tea'],
  //   },
  // ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   //payload = newItem
    //   const newItem = action.payload;
    //   const existingItem = state.cart.find((item) => item.id === newItem.id);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //     existingItem.totalPrice = existingItem.quantity * existingItem.price;
    //   } else {
    //     newItem.quantity = 1;
    //     newItem.totalPrice = newItem.price;
    //     state.cart.push(newItem);
    //   }
    // },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id,
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cart[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: (existingItem.quantity + 1) * existingItem.price,
        };
        state.cart[existingItemIndex] = updatedItem;
      } else {
        const newItemWithQuantity = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        state.cart.push(newItemWithQuantity);
      }
    },
    deleteItem(state, action) {
      //how to find which item is selected by the user
      // and how to delet this items
      // by using ID of the cartItem filter method
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },

    decreaseItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;

        if (item.quantity === 0) {
          const itemIndex = state.cart.findIndex((item) => item.id === itemId);
          state.cart.splice(itemIndex, 1);
        }
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//divide the bubbtle tea base on label type
export const getFilteredBubbleTeas = (state) => {
  const selectedLabel = state.cart.selectedLabel;
  const cartItems = state.cart.cart;

  if (selectedLabel) {
    return cartItems.filter((item) => item.labels.includes(selectedLabel));
  }

  return cartItems;
};

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentyQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
