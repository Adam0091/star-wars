import { useNavigate } from "react-router-dom";
import iconBack from "./img/arrow.svg";

import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <a href='#' onClick={handleGoBack} className={styles.link}>
        <img src={iconBack} alt="Go Back" className={styles.link__img} />
        <span>Go Back</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
