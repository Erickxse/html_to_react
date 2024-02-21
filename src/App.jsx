// PAGINAS //
import Home from "./pages/Home";
import Informacion from "./pages/Informacion";
import Historiaclinica from "./pages/Historiaclinica";
import Calendario from "./pages/Calendario";

// COMPONENTES //
import Header from "./components/Header";
import Headertemp from "./components/Headertemp";
import Nav from "./components/Nav";
import Bodytemp from "./components/Bodytemp";
import Footer from "./components/Footer";
import Footertemp from "./components/Footertemp";


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
      <Headertemp />
      <Nav isActive={activePage}/>
      <Bodytemp />
      <Outlet />
      <Footertemp />
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
          <Route path="HistoriaClinica" element={<Historiaclinica />} />
          <Route path="Calendario" element={<Calendario/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
