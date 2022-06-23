import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import UILoading from "@ui/UILoading";

import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withApiError";

import styles from "./PersonPage.module.css";

// import PersonFilms from "@components/PersonPage/PersonFilms";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personName, setPersonName] = useState(null);
  const [personInfo, setPersonInfo] = useState(false);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(false);
  const [personFavorite, setPersonFavorite] = useState(false);
  const { id } = useParams();

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        
        console.log(res);

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else setErrorApi(true);
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          {personPhoto ? (
            <PersonPhoto
              personPhoto={personPhoto}
              personName={personName}
              personID={id}
              personFavorite={personFavorite}
              setPersonFavorite={setPersonFavorite}
            />
          ) : (
            <UILoading theme='white' isShadow />
          )}

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && <PersonFilms personFilms={personFilms} />}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
