import React from "react";
import MangaMain from "../features/Mangas/components/MangaMain";
import { useNavigate } from "react-router-dom";

//Ver Com Professor Na segunda
export default function NotFound() {

    let nav = useNavigate();

    return (
        <section className="Not-Found">
            <h1>NotFound error</h1>
            <hr />
            <p>Please try again Later</p>

            <button onClick={ () => nav(MangaMain) }> Back </button>
        </section>
        )
}