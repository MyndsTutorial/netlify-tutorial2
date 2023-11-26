import {animeActions} from "../AnimesSlice";

export const saveAnimesToData = (animesFavoritList) => {
  return async (dispatch) => {
    localStorage.setItem("animesList", animesFavoritList);
    dispatch(animeActions.setAnimesList(animesFavoritList));
  };
};
