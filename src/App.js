import React from "react";
import Header from "./components/Header"
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import Main from "./pages/Main"
import Register from "./pages/Register"
import Usuarios from "./pages/Usuarios";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/usuarios" element = {<Usuarios/>}/>


        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
