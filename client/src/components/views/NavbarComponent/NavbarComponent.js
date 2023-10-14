import { Navbar } from 'react-bootstrap';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';

const NavbarComponent = () => {
  const cartProducts = useSelector(getAllCartProducts);
  const cartProductsAmount = cartProducts.length;
  const [isCartVisible, setCartVisible] = useState(false);
  const [cartWidth, setCartWidth] = useState(
    window.innerWidth < 420 ? '100%' : '400px',
  );

  const toggleCart = () => {
    setCartVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setCartWidth(window.innerWidth < 420 ? '100%' : '400px');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="ps-3 pe-3">
        <Navbar.Brand href="/">Basic</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="w-25">
            <div className="col w-100 justify-content-end d-flex column">
              <div className="me-2" onClick={toggleCart}>
                <span className="fa fa-shopping-basket"></span>
              </div>
              <div className="pe-2">{cartProductsAmount}</div>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div
        className={`cart ${isCartVisible ? 'open' : 'closed'}`}
        style={{
          position: 'absolute',
          top: '55px',
          right: 0,
          width: cartWidth,
          height: '450px',
          background: 'white',
          zIndex: 99,
          border: '2px solid black',
          display: isCartVisible ? 'block' : 'none',
        }}
      >
        {isCartVisible && <Cart onClose={toggleCart} />}
      </div>
    </div>
  );
};

export default NavbarComponent;
