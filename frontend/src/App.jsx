import "./App.css";
import {MenuPage} from './pages/MenuPage'
import { VuelosPage } from "./pages/VuelosPage";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<Navigate to= 'Menu'/>}/>
      <Route path='/Menu' element={<MenuPage/>}/>
      <Route path='/ListaVuelos' element={<VuelosPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
