//import { useEffect } from "react"
//import { useDispatch } from "react-redux"

//import {getMangas} from "../MangaSlice"
import MangaList from "./MangaList"
import MangasFilter from "./MangasFilter"
import 'animate.css';

export default function MangaMain() {

    //let dispatch = useDispatch();

    return (
        <section className="Animetion_MangaMain">
            <h1 className="title_MangaList">Mangas</h1>
            <MangasFilter />
            <MangaList />
        </section>
    )
}