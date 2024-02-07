import { React } from "react";
import { Link } from "react-router-dom";

export default function Manga({ manga }) {
    let {title, genres, authors, thumb, id} = manga
    return(
        <article className='manga-article'>            
            <Link to={`/MangaDescription/${id}`}>
                <h1 className='manga-title'>{title}</h1>
            </Link>
            <img className='manga-thumb' src={thumb} alt={title} />
        </article>
    )
}
