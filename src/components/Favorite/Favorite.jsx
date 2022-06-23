import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import bookmark from "./img/bookmark.svg";
import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount] = useState(null);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    String(length).length > 2 ? setCount("...") : setCount(length);

  }, [storeData])

  return (
    <>
      <Link className={styles.favorite__link} to='/favorites' exact='false'>
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={bookmark} alt='bookmark' />
      </Link>
    </>
  );
};

export default Favorite;
