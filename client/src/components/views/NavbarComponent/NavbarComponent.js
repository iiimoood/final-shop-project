import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
  //const cartProducts = useSelector(getAllCartProducts);
  //const cartProductsAmount = cartProducts.length;
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="ps-3 pe-3">
      <Navbar.Brand href="/">Basic</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div className="col text-right">
            <Link to="/cart">
              <div>
                <span className="fa fa-shopping-basket"></span>
              </div>
              {/*<div>{cartProductsAmount}</div>*/}
            </Link>
          </div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
