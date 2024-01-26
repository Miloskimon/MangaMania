import { createSlice } from "@reduxjs/toolkit";


const animeSlice = createSlice({
        name: `[Mangas] mangas`,
        initialState: {
            mangas: [],
        },

        reducers: {
            
            setMangas: (state, action) => {
                state.mangas = action.payload;
            },

        }

})
export const {setMangas, getMangas } = animeSlice.actions;
export default animeSlice.reducer;