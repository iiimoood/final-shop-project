import { getLocalCartData } from './cartRedux';

const initialState = {
  products: {
    data: [
      {
        id: '337r-rr65-rr75-gg85',
        title: 'Koszulka numer 1',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '337r-rr65-rr75-gg86',
        title: 'Koszulka numer 2',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '337r-rr65-rr75-gg75',
        title: 'Koszulka numer 3',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '337r-rr65-rr75-gg89',
        title: 'Koszulka numer 4',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '337r-rr65-rj75-gg85',
        title: 'Koszulka numer 1',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '337r-jr65-rr75-gg85',
        title: 'Koszulka numer 1',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '330r-rr65-rr75-gg85',
        title: 'Koszulka numer 1',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
      {
        id: '344r-rr65-rr75-gg85',
        title: 'Koszulka numer 1',
        price: 12,
        mainPhoto: `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        description: 'testtesttesttest',
        photos: [
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
          `${process.env.PUBLIC_URL}/images/background-home.jpg`,
        ],
      },
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
