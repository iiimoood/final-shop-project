import { getLocalCartData } from './cartRedux';

const initialState = {
  products: {
    data: [
    ],
    loading: false,
  },

  orders: [],
  cart: {
    products: getLocalCartData(),
    deliveryFee: 17,
  },
};

export default initialState;
