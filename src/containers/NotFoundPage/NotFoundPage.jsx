import { useLocation } from "react-router";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <h2>Not Found</h2>
      <p>No match for {location.pathname}</p>
    </>
  );
};

export default NotFoundPage;
