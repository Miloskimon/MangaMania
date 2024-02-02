
import  getMangasAPI, { showMangasActions, showMangasAdventure, showMangasAll, showMangasReincarnation }  from "../MangaSlice";
import { useDispatch } from "react-redux";

export default function MangasFilters() {

    let dispatch = useDispatch();
    return(
        //filtros para aparecer os os mangas de acordo com o genero
        <section className="filterMangas">
            <button onClick={() => dispatch(showMangasAll())}>all</button>
            <button onClick={() => dispatch(showMangasActions())}>Action</button>
            <button onClick={() => dispatch(showMangasAdventure())}>Adventure</button>
            <button onClick={() => dispatch(showMangasReincarnation())}>Reincarnation</button>
        </section>
    )
}