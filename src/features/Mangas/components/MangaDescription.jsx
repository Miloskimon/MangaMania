

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function MangaDescription() {
    
    const parems = useParams();

    let nav = useNavigate();

    //precisa disso?
    let mangas = useSelector(state => state.Manga.mangas.find(m => m.id == parems.id));

    const genresArray = mangas.genres === 'string' ? mangas.genres.split(',') : mangas.genres;

    const genresString = genresArray.join(', ');
    
    return (
        <article className='description-article'>
            <h1 className='FsTitle'>Manga Discription</h1>

            <h1 className='title-discription'>{mangas.title}</h1>
            <h2 className='genres-discription'>{genresString}</h2>
            <h2 className='authors-discription'>{mangas.authors}</h2>
            <img className='thumb-discription' src={mangas.thumb} alt='capa' />
            <p className='summary-discription'>{mangas.summary}</p>

            <button className='back-discription' onClick={ () => nav(-1)}> Back  </button>
        </article>
    )
}
//o title não esta achando (?)
