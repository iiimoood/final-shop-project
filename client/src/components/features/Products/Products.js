import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import styles from './Products.module.scss';

const Products = () => {
  const products = useSelector(getAllProducts);
  return (
    <Container>
      <section
        className={`d-flex flex-wrap justify-content-between mr-1 mt-3 ${styles.card}`}
      >
        {products.map((product) => (
          <article
            key={product.id}
            className="card col-12 col-sm-6 col-md-4 col-xl-3 row mb-2"
            style={{ height: '400px' }}
          >
            <div className="card-body">
              <img
                src={IMGS_URL + product.photo}
                alt=""
                style={{
                  width: '95%',
                  height: '250px',
                  objectFit: 'cover',
                  marginBottom: '15px',
                }}
              />
              <h3 className="card-title mb-3 fs-4">{product.title}</h3>
              <div className="d-flex column justify-content-between">
                <span className="fw-bold d-flex align-items-center fs-5">
                  {product.price}zł
                </span>
                <button type="button" className="btn btn-dark ">
                  <NavLink
                    to={'/products/' + product.id}
                    className="text-decoration-none text-light"
                  >
                    Szczegóły
                  </NavLink>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
};

export default Products;
