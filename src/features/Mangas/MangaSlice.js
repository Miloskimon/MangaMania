import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
        nome: `[library] anime`,
        initialState: {
            animes: [],

        },

        reducers: {
            setAnimes: (state, action) => {
                state.animes = action.payload;
            }
        }
})

export default animeSlice.reducer;