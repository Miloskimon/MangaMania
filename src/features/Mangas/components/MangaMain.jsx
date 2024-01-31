import { useEffect } from "react"
import { useDispatch } from "react-redux"


import {getMangas} from "../MangaSlice"
import MangaList from "./MangaList"
import MangasFilter from "./MangasFilter"

export default function MangaMain() {

    let dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3000/Manga")
        .then (r => r.json())
        .then (data => dispatch(getMangas(data)))
        .catch (err => console.log(err));
    },[])

    return (
        <section>
            <h1>Mangas</h1>
            <MangasFilter />
            <MangaList />
        </section>
    )
}