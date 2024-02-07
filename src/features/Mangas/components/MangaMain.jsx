
import MangaList from "./MangaList"
import MangasFilter from "./MangasFilter"
import 'animate.css';

export default function MangaMain() {


    return (
        <section className="Animetion_MangaMain">
            <MangasFilter />
            <MangaList />
        </section>
    )
}