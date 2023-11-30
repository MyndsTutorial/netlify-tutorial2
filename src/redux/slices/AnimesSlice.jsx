import {createSlice} from "@reduxjs/toolkit";
const AnimesSlice = createSlice({
  name: "cart",
  initialState: {
    animesList: [],
    totalQuantity: 0,
  },
  reducers: {
    addAnime(state, action) {
      const newAnime = action.payload;
      const existingItem = state.animesList.find(
        (item) => item.mal_id === newAnime.mal_id
      );
      if (!existingItem) {
        state.totalQuantity++;
        state.animesList.push(newAnime);
      }
    },
    removeAnime(state, action) {
      const id = action.payload;
      const existingItemIndex = state.animesList.findIndex(
        (item) => item.mal_id === id
      );
      state.totalQuantity--;

      if (existingItemIndex !== -1) {
        state.animesList.splice(existingItemIndex, 1);
      }
    },
    setAnimesList(state, action) {
      const animesListReceive = action.payload;
      state.animesList = animesListReceive;
    },
  },
});

export const animeActions = AnimesSlice.actions;
export default AnimesSlice;
