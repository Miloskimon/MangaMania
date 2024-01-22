import {configureStore} from '@reduxjs/toolkit';
import MangaSlice from '../features/Mangas/MangaSlice';

export default configureStore({
    reducer:{
        Manga: MangaSlice,
        
    }
})