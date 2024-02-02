
import  getMangasAPI, { showMangasActions }  from "../MangaSlice";
import { useDispatch } from "react-redux";

export default function MangasFilters() {

    let dispatch = useDispatch();
    return(
        //filtros para aparecer os os mangas de acordo com o genero
        <section className="filterMangas">
            <button onClick={() => dispatch(getMangasAPI())}>all</button>
            <button onClick={() => dispatch(showMangasActions())}>Action</button>
            <button onClick={() => dispatch(getMangasAPI('romance'))}>Romance</button>
        </section>
    )
}