// PAGINAS //
import Home from "./pages/Home";
import Informacion from "./pages/Informacion";
import HistoriaClinica from "./pages/HistoriaClinica";
import Calendario from "./pages/Calendario";

// COMPONENTES //
import Header from "./components/Header";
import HeaderTemp from "./components/HeaderTemp";
import Nav from "./components/Nav";
import BodyTemp from "./components/BodyTemp";
import Footer from "./components/Footer";
import FooterTemp from "./components/FooterTemp";


// ESTILOS //
import './styles/estructura.css'
import './styles/index.css';
import './styles/informacion.css';
import './styles/informacionResp.css';
import './styles/historiaclinica.css';
import './styles/calendario.css';


import {BrowserRouter as Router, Route, Routes, Outlet, useLocation} from "react-router-dom";


function Layout(){
  const location = useLocation();
  const activePage = location.pathname.split("/")[1];

  return(
    <div>
      <HeaderTemp />
      <Nav isActive={activePage}/>
      <BodyTemp />
      <Outlet />
      <FooterTemp />
    </div>
  );
}
function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/" element={<Layout />}>
          <Route path="Informacion" element={<Informacion />} />
          <Route path="HistoriaClinica" element={<HistoriaClinica />} />
          <Route path="Calendario" element={<Calendario/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
