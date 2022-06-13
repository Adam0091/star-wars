import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import UIButton from "../../UIKit/UIButton/index";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigtion = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
        <UIButton
          text='Previous'
          onClick={handleChangePrev}
          disabled={!Boolean(prevPage)}
        />
      </Link>
      <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
        <UIButton
          text='Next'
          onClick={handleChangeNext}
          disabled={!Boolean(nextPage)}
        />
      </Link>
    </div>
  );
};

PeopleNavigtion.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigtion;
