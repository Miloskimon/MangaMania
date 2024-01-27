import { useDispatch } from "react-redux";
import { getMangaApi } from "../MangaSlice";

export default function MangasFiltros() {

    return(
        //filtros para aparecer os os mangas de acordo com o genero
        <section className="filtrosMangas">
            <button onClick={() => {getMangaApi}}>all</button>
            <button onClick={() => {getMangaApi.genres.action}}>Ação</button>
            <button onClick={() => {getMangaApi.genres.raomance}}>Romance</button>
        </section>
    )
}