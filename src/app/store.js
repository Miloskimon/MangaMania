import {configureStore} from '@reduxjs/toolkit';
import MangaSlice from '../features/Mangas/MangaSlice';

export const store = configureStore({
    reducer:{
        Manga: MangaSlice
    }
})

