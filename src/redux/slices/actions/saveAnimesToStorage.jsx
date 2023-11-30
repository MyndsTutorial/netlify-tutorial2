import {animeActions} from "../AnimesSlice";

export const saveAnimesToData = (animesFavoritList) => {
  return async (dispatch) => {
    localStorage.setItem("animesList", JSON.stringify(animesFavoritList));
    dispatch(animeActions.setAnimesList(animesFavoritList));
  };
};
