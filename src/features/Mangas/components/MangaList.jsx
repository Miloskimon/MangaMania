import { useSelector } from "react-redux";
import { Manga } from "./Manga";

export default function MangaList() {
    const { filteredMangas } = useSelector(state => state.mangas);

    return(
        <section>
            {
                filteredMangas.map(m => <Manga key={'id-'+m.id} manga={m}/>)
            }
        </section>
    )
}