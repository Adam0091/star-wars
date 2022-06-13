import PropTypes from "prop-types";
import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <h1 className='header__text'>HomePage</h1>
    </>
  );
};

Home.propTypes = {
  text: PropTypes.string,
};

export default Home;
