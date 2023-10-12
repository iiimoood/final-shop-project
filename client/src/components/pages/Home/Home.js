import Products from '../../features/Products/Products';


const Home = () => {
  return (
    <div>
      <section
        className="d-flex row text-center"
        style={{
          height: '300px',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-home.jpg)`,
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <div className="d-flex h-75 w-100 justify-content-center align-items-end">
          <span className="display-2 fw-bold">NOWA KOLEKCJA</span>
        </div>
        <i
          className="fa fa-angle-down fw-bold"
          style={{ fontSize: '60px' }}
          aria-hidden="true"
        />
      </section>
      <Products />
    </div>
  );
};

export default Home;
