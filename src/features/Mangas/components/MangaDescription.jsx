
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function MangaDescription() {
    
    const parems = useParams();

    let nav = useNavigate();

    //precisa disso?
    let mangas = useSelector(state => state.Manga.mangas.find(m => m.id == parems.id));
    
    return (
        <article>
            <h1>Manga Discription</h1>

            <h1>{mangas.title}</h1>
            <h2>{mangas.genres}</h2>
            <h2>{mangas.authors}</h2>
            <img src={mangas.thumb} alt='capa' />
            <p>{mangas.summary}</p>

            <button onClick={ () => nav(-1)}> Voltar  </button>
        </article>
    )
}
//o title não esta achando (?)
