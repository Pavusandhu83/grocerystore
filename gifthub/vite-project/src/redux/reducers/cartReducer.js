// src/redux/reducers/cartReducer.js

const initialState = {
  items: [],
  totalPrice: 0, // We keep totalPrice here for easier access
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      
      if (itemIndex === -1) {
        // Item doesn't exist in cart, add it
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        const updatedItems = [...state.items, newItem];
        const updatedTotalPrice = updatedItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
        
        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
        };
      } else {
        // Item already exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity += 1;
        const updatedTotalPrice = updatedItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);

        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
        };
      }

    case 'REMOVE_FROM_CART':
      // Handle removing an item from the cart
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      const newTotalPrice = filteredItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
      
      return {
        ...state,
        items: filteredItems,
        totalPrice: newTotalPrice,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
