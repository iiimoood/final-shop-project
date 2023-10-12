import { useState } from 'react';
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

  const removeProductFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch(updateInCart({ id: productId, quantity: newQuantity }));
  };

  const addComment = (productId, comment) => {
    setComments({ ...comments, [productId]: comment });
  };

  return (
    <div className="cart h-100">
      <h2 className="text-center mb-2">Twój koszyk</h2>
      {cartProducts.length === 0 ? (
        <p className="ps-2">Twój koszyk jest pusty.</p>
      ) : (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Cena: {product.price} zł</p>
              <input
                type="number"
                min={1}
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, e.target.value)}
              />
              <Button
                variant="outline-danger"
                className="rounded-circle"
                onClick={() => removeProductFromCart(product.id)}
              >
                <span className="fa fa-trash"></span>
              </Button>
              <input
                type="text"
                placeholder="Dodaj komentarz"
                value={comments[product.id] || ''}
                onChange={(e) => addComment(product.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary ps-1">
        <p>Razem: {} zł</p>
        <Link to="/cart/summary">
          <Button variant="dark">Podsumowanie </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
