import { createSlice } from "@reduxjs/toolkit";


const animeSlice = createSlice({
        name: `[Mangas] mangas`,
        initialState: {
            mangas: [],
            filterMangas: [],
        },

        reducers: {
            
            setMangas: (state, action) => {
                state.mangas = action.payload;
                state.filterMangas = action.payload;
            },

            //Ver dps essa funcionalidade

            /* showMangasActions:(state, action) => {
                state.filterMangas = state.mangas.filter(manga => manga.genre === 'action');
            }, */
            }

        

})
export const {setMangas, /* getMangas ,*/ /* showMangasActions */ } = animeSlice.actions;
export default animeSlice.reducer;