
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function MangaDescription() {
    
    const parems = useParams();

    let nav = useNavigate();

    //precisa disso?
    let mangas = useSelector(state => state.Manga.mangas.find(m => m.id == parems.id));
    
    return (
        <article className='description-article'>
            <h1>Manga Discription</h1>

            <h1 className='title-discription'>{mangas.title}</h1>
            <h2 className='genres-discription'>{mangas.genres}</h2>
            <h2 className='authors-discription'>{mangas.authors}</h2>
            <img className='thumb-discription' src={mangas.thumb} alt='capa' />
            <p className='summary-discription'>{mangas.summary}</p>

            <button className='back-discription' onClick={ () => nav(-1)}> Voltar  </button>
        </article>
    )
}
//o title não esta achando (?)
