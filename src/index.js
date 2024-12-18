import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/Fiche-logement'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <React.StrictMode>
          <Router>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/APropos" element={<APropos />} />
                    <Route path="*" element={<Error />} />
                    <Route
                         path="/FicheLogement/:id"
                         element={<FicheLogement />}
                    />
               </Routes>
               <Footer />
          </Router>
     </React.StrictMode>
)
