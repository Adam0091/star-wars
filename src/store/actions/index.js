import {
  ADD_PERSON_TO_FRAVORITE,
  REMOVE_PERSON_FROM_FRAVORITE
} from "@store/constants/actionTypes";

export const setPersonToFavorite = (person) => ({
  type: ADD_PERSON_TO_FRAVORITE,
  payload: person,
});

export const removePersonFromFavorite = (personID) => ({
  type: REMOVE_PERSON_FROM_FRAVORITE,
  payload: personID,
});