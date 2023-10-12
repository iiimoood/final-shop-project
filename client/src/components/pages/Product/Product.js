import { useParams } from 'react-router';
import { /*useEffect,*/ useState } from 'react';
//import { Navigate } from 'react-router-dom';
import { IMGS_URL /*API_URL*/ } from '../../../config';
import { /*Container, Spinner,*/ Button, Form } from 'react-bootstrap';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';

const Product = () => {
  const { id } = useParams();
  //const [product, setProduct] = useState(null);
  //const [loading, setLoading] = useState(true);
  const product = useSelector((state) => getProductById(state, id));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changeQuantity = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const addProductToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      mainPhoto: product.mainPhoto,
      description: product.description,
      photos: product.photos,
      quantity: quantity,
    };

    dispatch(addToCart(productToAdd));

    const currentCart = localStorage.getItem('cart');
    let cartData = currentCart ? JSON.parse(currentCart) : [];

    const existingProduct = cartData.find(
      (item) => item.id === productToAdd.id,
    );

    if (existingProduct) {
      existingProduct.quantity += productToAdd.quantity;
    } else {
      cartData.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  /*useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`${API_URL}/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center">
        <div
          className="d-flex align-items-center"
          style={{ marginTop: '250px' }}
        >
          <Spinner animation="border" />
        </div>
      </Container>
    );
  }
  */

  //if (!product) return <Navigate to="/" />;
  return (
    <div>
      <div className="card d-flex flex-row w-75 border-0 m-auto">
        <div className="card-body">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={IMGS_URL + product.mainPhoto}
              alt=""
              style={{
                width: '250px',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </div>
          <h3 className="card-title">{product.title}</h3>
          <div className="d-flex column">
            <div className="w-50">
              <p>
                <span className="fw-bold">Cena:</span> {product.price} zł
              </p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="d-flex column mb-4">
            <Form.Control
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              onChange={changeQuantity}
              style={{
                width: '60px',
                marginRight: '10px',
                height: '50px',
              }}
            />
            <Button variant="dark" onClick={addProductToCart}>
              Dodaj do koszyka
            </Button>
          </div>
          <div className="d-flex row w-100">
            {product.photos.map((photo, index) => (
              <div className="d-flex justify-content-center" key={index}>
                <img src={IMGS_URL + photo} alt={`Additional ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
