import { React } from "react";
import { Link } from "react-router-dom";

export default function Manga({ manga }) {
    let {title, genres, authors, thumb, id} = manga
    return(
        <article>
            <Link to={`/description/${id}`}>
                <h1>{title}</h1>
            </Link>
            <h2>{genres}</h2>
            <h2>{authors}</h2>
            <img className='manga-thumb' src={thumb} alt={title} />
        </article>
    )
}