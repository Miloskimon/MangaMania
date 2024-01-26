
import Manga  from "./Manga";

export default function MangaList({mangas}) {
    return(
        <section >
            {
                mangas.map((manga)=> (
                    <Manga manga={manga} />
                ))
            }
        </section>
    )
}