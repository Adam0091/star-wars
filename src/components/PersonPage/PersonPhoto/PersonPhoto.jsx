import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import favorite from "./img/favorite.svg";
import favoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personID,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personID));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personID]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? favoriteFill : favorite}
          alt='favorite'
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personID: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
