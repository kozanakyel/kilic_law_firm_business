import { Routes ,Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from "./pages/Home";
import { Faaliyet } from "./pages/Faaliyet";
import Ekibimiz from "./pages/Ekibimiz";
import Iletisim from "./pages/Iletisim";
import { Makaleler } from "./pages/Makaleler";
import Etahsilat from './pages/Etahsilat';

import { useTranslation } from 'react-i18next'
import './i18n.js';

const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'uk', text: "Ukranien" },
    { value: 'ru', text: "Russian" },
    { value: 'de', text: "Germany" }
]

function App() {
    const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('en');

    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }

    return (<>
        
        
            <Routes>
                
                <Route path="/" exact element={<Home />} />
                
                <Route path="/faaliyet" element={<Faaliyet />} />
               
                    
                <Route path="/ekibimiz" element={<Ekibimiz />} />

                <Route path="/makaleler" element={<Makaleler />}>
                    
                    <Route path=":makalelerId" element={<Makaleler />} />
                </Route >

                <Route path="/iletisim" element={<Iletisim />} />

                <Route path="/etahsilat" element={<Etahsilat />} />

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                         <p>There's nothing here!</p>
                        </main>
                    }
                />
 
            </Routes>
            </>  
    );
}

export default App;
