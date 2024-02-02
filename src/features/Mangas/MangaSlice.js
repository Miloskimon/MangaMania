import { createSlice } from "@reduxjs/toolkit";
import Manga from "./components/Manga";


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

            showMangasActions:(state,) => {
                state.filterMangas = state.mangas.filter(m => m.genre === 'action');
            },

            
            }

        

})
export const {setMangas, /* getMangas ,*/ showMangasActions } = animeSlice.actions;
export default animeSlice.reducer;