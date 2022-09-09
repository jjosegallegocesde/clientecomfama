import { Routes, Route, Link } from "react-router-dom";

//En el archivo de rutas se importan TODOS LOS COMPONENTES
import {Home} from '../Home/Home.js'
import {Habitaciones} from '../Habitaciones/Habitaciones.js'
import {Menu} from '../Menu/Menu.js'

export function Routers(){

    return (
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="habitaciones" element={<Habitaciones />} />
          </Routes>
        </div>
      );



}