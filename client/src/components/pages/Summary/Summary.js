import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

const Summary = ({ onSubmitOrder }) => {
  const cartProducts = useSelector(getAllCartProducts);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
  };

  return (
    <Container className="pt-3 pb-3">
      <h2 className="text-center text-uppercase text-decoration-underline mb-3">
        Podsumowanie zamówienia
      </h2>

      <div className="mb-3 text-center">
        <h3>Twoje produkty:</h3>
        <section>
          {cartProducts &&
            cartProducts.map((product) => (
              <article key={product.id}>
                {product.title} - Cena: {product.price} zł, Ilość:{' '}
                {product.quantity}
              </article>
            ))}
        </section>
      </div>

      <div className="ms-auto me-auto">
        <h3>Dane do zamówienia:</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName" className="mb-2">
            <Form.Label>Imię:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-25"
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="mb-2">
            <Form.Label>Nazwisko:</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-25"
            />
          </Form.Group>

          <Form.Group controlId="address" className="mb-2">
            <Form.Label>Adres:</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-25"
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber" className="mb-4">
            <Form.Label>Numer telefonu:</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-25"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Zamów
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Summary;
