import {createSlice} from "@reduxjs/toolkit";
const AnimesSlice = createSlice({
  name: "cart",
  initialState: {
    animes: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addAnime(state, action) {
      const newAnime = action.payload;
      const existingItem = state.items.find(
        (item) => item.mal_id === newAnime.mal_id
      );
      if (!existingItem) {
        state.totalQuantity++;
        state.animes.push(newAnime);
      }
    },
    removeAnime(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.mal_id === id);
      state.totalQuantity--;
      if (existingItem) {
        state.animes.filter((anime) => anime.mal_id !== id);
      }
    },
    setAnimesList(state, action) {
      const animesList = action.payload;
      state.animes = animesList;
    },
  },
});

export const animeActions = AnimesSlice.actions;
export default AnimesSlice;
