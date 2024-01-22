import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
        nome: `[library] mangas`,
        initialState: {
            mangas: [],
            filteredMangas: [],

        },

        reducers: {
            getMangas: (state, action) => {
                state.mangas = action.payload;
                state.filteredMangas = action.payload;
            },

            ShowActionMangas: (state, action) => {
                //filtrar para aparecer apenas os mangas de ação
                state.filteredMangas = state.mangas.filter(m => m.genre === "Action")
            },

            ShowRomanceMangas: (state, action) => {
                //filtrar para aparecer apenas os mangas de romance
                state.filteredMangas = state.mangas.filter(m => m.genre === "Romance")
            }
        }

})
export const {setMangas, ShowActionMangas, ShowRomanceMangas } = animeSlice.actions;
export default animeSlice.reducer;