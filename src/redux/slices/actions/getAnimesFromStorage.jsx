import {animeActions} from "../AnimesSlice";

export const getAnimesFromStorage = () => {
  return async (dispatch) => {
    const animes = localStorage.getItem("animesList");
    dispatch(animeActions.setAnimesList(animes));
  };
};
