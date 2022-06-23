import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withApiError";
import PeopleList from "@components/PeoplePage/PeopleList/";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/";
import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import UILoading from "@ui/UILoading";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log(res);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return { id, name, img };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <h2 className='header__text'>People</h2>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
        setPeople={setPeople}
      />
      {people ? (
        <PeopleList people={people} />
      ) : (
        <div className={styles.container__loading}>
          <UILoading theme='white' isShadow />
        </div>
      )}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
