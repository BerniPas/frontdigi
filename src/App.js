
import './css/App.css';
import Home from './Pages/Home';
import Footer from './Componentes/Footer';
import About from './Pages/About';
import Navegacion from './Componentes/Navegacion';
import Testimonios from './Pages/Testimonios';
import Error from './Pages/Error';  
import Formulario from './Pages/Formulario';
import Login from './Pages/Login';
import Personajes from './Pages/Personajes';
import Productos from './Pages/Productos';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonios' element={<Testimonios />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/*' element={<Error />} />
      </Routes>
  

      <Footer />
    </>
  );
}
export default App;
