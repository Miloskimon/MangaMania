import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import { store } from './app/store.js'

import App from './App.jsx'
//import MangaDescription from './features/Mangas/components/MangaDescription.jsx'
import MangaMain from './features/Mangas/components/MangaMain.jsx'


import './index.css'

/* import NotFound from './page/NotFound.jsx' */

/* import About from "./page/About.jsx"
import Home from "./page/Home.jsx" */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

    <BrowserRouter>


      <Routes>

        <Route path='/' element={<App/>}>
          <Route path='/MangaMain' element={<MangaMain/>} />
          
        </Route>


        {/* comentado para dps */}

        

        
        {/* <Route path='/home' element={< Home/>} />
        <Route path='/about' element={< About/>} /> */}
         <Route path="/MangaMain" element={<MangaMain/>} />
        {/* <Route path="/description/:id" element={<MangaDescription/>} />  */}
        {/* <Route path="*" element={<NotFound/>} /> */}

        


      </Routes>

      </BrowserRouter>


    </Provider>
    
  </React.StrictMode>,
)
