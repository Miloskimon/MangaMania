//import { useEffect } from "react"
//import { useDispatch } from "react-redux"

//import {getMangas} from "../MangaSlice"
import MangaList from "./MangaList"
import MangasFilter from "./MangasFilter"

export default function MangaMain() {

    //let dispatch = useDispatch();

    return (
        <section>
            <h1>Mangas</h1>
            <MangasFilter />
            <MangaList />
        </section>
    )
}