export const calculateTotalPrice = (array) => {
  return array.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
};
