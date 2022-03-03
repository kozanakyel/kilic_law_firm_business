
import Layout from "./components/layout/Layout";
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import { Faaliyet } from "./pages/Faaliyet";
import Ekibimiz from "./pages/Ekibimiz";
import Iletisim from "./pages/Iletisim";
import Makaleler from "./pages/Makaleler";

function App() {
    return (
        
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/faaliyet" element={<Faaliyet />} />
                    
                <Route path="/ekibimiz" element={<Ekibimiz />} />

                <Route path="/makaleler" element={<Makaleler />} />

                <Route path="/iletisim" element={<Iletisim />} />
 
            </Routes>
        
    );
}

export default App;
