import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCartProducts,
  removeFromCart,
  updateInCart,
} from '../../../redux/cartRedux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
  const cartProducts = useSelector(getAllCartProducts);
  const dispatch = useDispatch();
  const [comments, setComments] = useState({});
  const [quantityInputs] = useState({});
  const deliveryFee = 17;
  const totalProductsPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const totalPrice = totalProductsPrice + deliveryFee;

  const updateInputValues = () => {
    cartProducts.forEach((product) => {
      const input = quantityInputs[product.id];
      if (input) {
        input.value = product.quantity;
      }
    });
  };

  const updateLocalStorage = (cartProducts) => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  };

  const removeProductFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    updateInputValues();
    updateLocalStorage(cartProducts);
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch(updateInCart({ id: productId, quantity: newQuantity }));
    updateLocalStorage(cartProducts);
  };

  const addComment = (productId, comment) => {
    setComments({ ...comments, [productId]: comment });
  };

  useEffect(() => {
    updateLocalStorage(cartProducts);
  }, [cartProducts]);

  return (
    <div className="cart h-100" style={{ overflowY: 'auto' }}>
      <h2 className="text-center mb-3 text-uppercase text-decoration-underline">
        Twój koszyk
      </h2>
      {cartProducts.length === 0 ? (
        <p className="ps-2">Twój koszyk jest pusty.</p>
      ) : (
        <section className="ps-1 pe-1">
          {cartProducts.map((product) => (
            <article
              key={product.id}
              style={{
                border: '1px dashed black',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <div className="d-flex column justify-content-between mb-2">
                <h3>{product.title}</h3>
                <Button
                  variant="outline-danger"
                  className="rounded-circle"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  <span className="fa fa-trash"></span>
                </Button>
              </div>
              <div className="d-flex column justify-content-around">
                <p>
                  <span className="fw-bold">Cena: </span>
                  {product.price} zł
                </p>
                <div>
                  <span className="fw-bold">Ilość: </span>
                  <input
                    type="number"
                    min={1}
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, e.target.value)}
                    style={{ width: '45px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Dodaj komentarz"
                value={comments[product.id] || ''}
                onChange={(e) => addComment(product.id, e.target.value)}
                className="mb-3 w-100"
              />
              <p>
                <span className="fw-bold">Razem:</span>{' '}
                {product.price * product.quantity} zł
              </p>
            </article>
          ))}
        </section>
      )}
      {cartProducts.length > 0 && (
        <div className="cart-summary ps-1 pb-2 text-center">
          <p>
            <span className="fw-bold">Dostawa: </span>
            {deliveryFee} zł
          </p>
          <p>
            <span className="fw-bold">Suma: </span>
            {totalPrice} zł
          </p>
          <Link to="/cart/summary">
            <Button variant="dark">Podsumowanie </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
