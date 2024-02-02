
import Manga  from "./Manga";
import { useSelector } from 'react-redux'
import 'animate.css';

export default function MangaList() {

    const mangas = useSelector((state) => state.Manga.filterMangas)

    return(


        <section className="gridMangalist">
            {
                mangas.map((manga, i)=> (
                    <Manga manga={manga} key={i} />
                ))
            }
        </section>
    )
}