import React from "react";

export default function NotFound() {
    return (
        <section>
            <h1>Página não encontrada</h1>
            <hr />
            <p>por favot clicar no butão de voltar</p>

            <button onClick={() => window.history.back()} className="voltar_Not_Found"> Voltar</button>
        </section>
        )
}