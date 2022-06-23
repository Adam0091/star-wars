import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@context/ThemeProvider"

import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStatio from "./img/space-station.svg";

import Favorite from "@components/Favorite";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStatio);
  const isTheme = useTheme();

  //Божественный костыль
  let location = useLocation();
  const classNameActive =
    location.pathname.includes("people")
      ? styles.active
      : "";

  const [link, setLink] = useState("/people");

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(imgLightsaber); break;
      case THEME_DARK: setIcon(imgSpaceStatio); break;
      case THEME_NEITRAL: setIcon(imgDroid); break;

      default: setIcon(imgSpaceStatio); break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="icon" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to='/' exact='true'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classNameActive}
            to='/people/?page=1'
            exact='false'
          >People</NavLink>
        </li>
        <li>
          <NavLink
            to='search'
          >Search</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
