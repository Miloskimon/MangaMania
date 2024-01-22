import { useDispatch } from "react-redux";
import { ShowActionMangas, ShowRomanceMangas } from "../MangaSlice";

export default function MangasFiltros() {

    let dispatch = useDispatch();

    return(
        //filtros para aparecer os os mangas de acordo com o genero
        <section className="filtrosMangas">
            <button onClick={() => dispatch(ShowActionMangas())}>Ação</button>
            <button onClick={() => dispatch(ShowRomanceMangas())}>Romance</button>
        </section>

    )
}