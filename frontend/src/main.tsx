import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './screen/About.tsx';
import { BrowserRouter,Route,Routes } from "react-router";
import Home from './screen/Home.tsx'



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
        </Routes>
  </BrowserRouter>
)
