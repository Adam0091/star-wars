import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from "./FavoritesPage.module.css"


const FavoritesPage = () => {
    const [people, setPeople] = useState([]);
    const storeData = useSelector((state) => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);
        if (arr.length) {
            const res = arr.map((elem) => {
                return {
                    id: elem[0],
                    ...elem[1]
                }
            });

            setPeople(res)
        }
    }, []);

    return (
        <>
            <h2 className='header__text'>Favorite</h2>
            {people.length ? <PeopleList people={people} /> : <h2 className={styles.text}>No data</h2>}
        </>
    );
};

export default FavoritesPage;