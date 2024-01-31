import { useDispatch } from "react-redux";
import { getMangasAPI } from "../MangaSlice";

export default function MangasFilters() {

    return(
        //filtros para aparecer os os mangas de acordo com o genero
        <section className="filterMangas">
            <button onClick={() => {getMangasAPI}}>all</button>
            <button onClick={() => {getMangasAPI('action')}}>Action</button>
            <button onClick={() => {getMangasAPI('romance')}}>Romance</button>
        </section>
    )
}