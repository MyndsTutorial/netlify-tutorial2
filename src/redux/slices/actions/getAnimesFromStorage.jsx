import {animeActions} from "../AnimesSlice";

export const getAnimesFromStorage = () => {
  return async (dispatch) => {
    const animes = localStorage.getItem("animesList");

    if (animes) {
      let animesObject = JSON.parse(animes);

      dispatch(animeActions.setAnimesList(animesObject));
    }
  };
};
