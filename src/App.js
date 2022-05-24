import { Routes ,Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import { Faaliyet } from "./pages/Faaliyet";
import Ekibimiz from "./pages/Ekibimiz";
import Iletisim from "./pages/Iletisim";
import { Makaleler } from "./pages/Makaleler";
import Etahsilat from './pages/Etahsilat';



function App() {


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
