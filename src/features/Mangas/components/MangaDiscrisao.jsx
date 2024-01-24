import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function MangaDiscrisao() {
    
    const parems = useParams();

    let nav = useNavigate();

    let mangas = useSelector(state => state.mangas.mangas.find(m => m.id == parems.id));
    
    return (
        <article>
            {/* <button onClick={ () => nav(-1)}> Voltar</button> */}
            <h1>Descrição do Manga</h1>
            <h1>{mangas.name}</h1>
            <h2>{mangas.genre}</h2>
            <h2>{mangas.autor}</h2>
            <img src={`./img_capas/${mangas.imageUrlGrand}`} alt='' />
            <p>{mangas.description}</p>
        </article>
    )
}