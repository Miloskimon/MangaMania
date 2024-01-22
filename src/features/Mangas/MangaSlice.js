import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
        nome: `[library] mangas`,
        initialState: {
            mangas: [],
            filteredMangas: [],

        },

        reducers: {
            setMangas: (state, action) => {
                state.mangas = action.payload;
            },

            ShowActionMangas: (state, action) => {
                state.filteredMangas = state.mangas.filter(m => m.genre === "Action")
            },

            ShowRomanceMangas: (state, action) => {
                state.filteredMangas = state.mangas.filter(m => m.genre === "Romance")
            }
        }

})
export const {setMangas, ShowActionMangas, ShowRomanceMangas } = animeSlice.actions;
export default animeSlice.reducer;