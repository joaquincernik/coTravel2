import React from "react";
import Header from "./components/Header"
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/hola")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);



  return (
    <Header />
  );
}

export default App;
