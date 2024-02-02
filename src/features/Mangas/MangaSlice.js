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

            //Filto para aparecer todos os mangas
            showMangasAll: (state) => {
                state.filterMangas = state.mangas
            },

            
            //filtros para aparecer os os mangas de acordo com o genero

            showMangasActions:(state,) => {               
                state.filterMangas = state.mangas.filter(m => {
                    return m.genres.includes('Action');
                });
            },
            
            showMangasAdventure:(state) =>{
                state.filterMangas = state.mangas.filter(m => {
                    return m.genres.includes('Adventure');
                });
            },

            showMangasReincarnation:(state) =>{
                state.filterMangas = state.mangas.filter(m => {
                    return m.genres.includes('Reincarnation');
                });
            }



            
            

        }
})
export const {setMangas, showMangasAll, showMangasAdventure,  showMangasActions, showMangasReincarnation } = animeSlice.actions;
export default animeSlice.reducer;