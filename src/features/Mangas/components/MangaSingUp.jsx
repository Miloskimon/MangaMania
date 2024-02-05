import React from "react";
export default function MangaSingUp(){

    addEventListener('load', function(){
        
    let form = document.getElementById('registerform');

    form.addEventListener('submit',function(event) {

        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;


        //para salvar os dados
        addStorage( nome, email, password);

        //Limpar os campos
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        //Confirmação cadastro
        alert('sucessfully registered');
    })

    function addStorage( nome, email, password) {
        //pegar os dados
        let registerform = JSON.parse(localStorage.getItem('registerform')) || [];

        //receber os codigos
        registerform.push({ nome, email, password });

        //salvar os dados
        localStorage.setItem('registerform', JSON.stringify(registerform));        
        
    }


})

    return(
            <section className="MangaSingUp">
                  <h1>Sing up</h1>
            
                <form id='registerform'  >
                    <label htmlFor="nome">Name: </label>
                    <input type="text" name="nome" id="nome"  required/>
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required/>
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required/>
                    <br />
                    <button className='buttonRegister' type="submit">Register</button>
            
                </form>
            
            </section>
         
        

    )
}