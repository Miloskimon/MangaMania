import { React } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Manga({ manga }) {

    let dispatch = useDispatch();

        let {name, genre, autor, imageUrl, id} = manga
        //fazer uma paginação do manga em si
        return(
            <article>
                <Link to={`/descrisao/${id}`}>
                    <h1>{name}</h1>
                </Link>
                <h2>{genre}</h2>
                <h2>{autor}</h2>
                <img src={`./img_capas/${imageUrl}`} alt={name} />

            </article>
        )
}