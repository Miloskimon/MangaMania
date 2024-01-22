import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ShowActionMangas, ShowRomanceMangas } from "../MangaSlice";

export default function MangasFiltros() {

    let dispatch = useDispatch();

    return(

        <section className="filtrosMangas">
            <button onClick={() => dispatch(ShowActionMangas())}>Ação</button>
            <button onClick={() => dispatch(ShowRomanceMangas())}>Romance</button>
        </section>

    )
    Outlet
}