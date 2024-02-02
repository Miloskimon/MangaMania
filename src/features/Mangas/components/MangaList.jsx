
import Manga  from "./Manga";
import { useSelector } from 'react-redux'

export default function MangaList() {

    const mangas = useSelector((state) => state.Manga.filterMangas)

    return(


        <section >
            {
                mangas.map((manga, i)=> (
                    <Manga manga={manga} key={i} />
                ))
            }
        </section>
    )
}