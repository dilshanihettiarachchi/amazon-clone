export const initialState = {
  cart: [{
    id: "123",
    title: "50 Pcs Golden Paper Placemats - 11 x 16.5 Inch Gold Disposable Paper Place Mats with Coasters Vintage Golden Leaves Table Mats for Wedding Anniversary Holiday Party Kitchen Dining Table Decor",
    price: 15.99,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81sk-ru9giL._AC_SX569_.jpg"
  }],
};

export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state, 
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export default reducer;