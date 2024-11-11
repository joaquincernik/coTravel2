import React from "react";
import Header from "./components/Header"
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import Main from "./pages/Main"
import Register from "./pages/Register"
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";
import Viajes from "./pages/Viajes";
import NuestraHistoria from "./pages/NuestraHistoria";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/usuarios" element = {<Usuarios/>}/>
          <Route path="/viajes" element = {<Viajes/>}/>
          <Route path="/nuestra-historia" element = {<NuestraHistoria/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
