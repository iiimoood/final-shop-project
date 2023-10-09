import { API_URL } from '../config';

const initialState = {
  data: [],
  loading: false,
};

//selectors
export const getAllProducts = ({ products }) => products.data;
export const getProductById = ({ products }, productId) =>
  products.data.find((product) => product.id === productId);
export const getProductsLoading = ({ products }) => products.loading;

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
const FETCH_PRODUCTS_REQUEST = createActionName('FETCH_PRODUCTS_REQUEST');

// action creators

export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((products) => dispatch(updateProducts(products)));
  };
};

const productsReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...statePart,
        loading: true,
      };
    case UPDATE_PRODUCTS:
      return {
        ...statePart,
        data: [...action.payload],
        loading: false,
      };
    default:
      return statePart;
  }
};

export default productsReducer;
