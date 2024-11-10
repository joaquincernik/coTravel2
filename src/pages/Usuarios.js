import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
export default function Usuarios() {
  const [usuarios, setUsuario] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/usuarios?nombre=${search}`);
        setUsuario(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessage();
  }, [search]);

  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#D8DBBD" }}>
        <Header text={"text-dark"} />
      </div>
      <div className="container">
        <h1 className="pt-5 pb-3 display-4 text-center">Usuarios</h1>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">
              Buscar usuario por nombre
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ejemplo: Tito Racing"
            name="search"
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="usuarios row">
          {usuarios.map((usuario) => (
            <div className="usuario shadow mb-3 p-4 col-md-4" key={usuario.id}>
              {usuario.image ? (
                <img src={`http://localhost:3001/${usuario.image}`}></img>
              ) : (
                <img src="http://localhost:3001/uploads/dog-driving-meme-1.jpg"></img>
              )}
              <h3>
                <b>Nombre:</b> {usuario.nombre}
              </h3>
              <div className="border"> </div>
              <h3>
                <b>Apellido:</b> {usuario.apellido}
              </h3>
              <div className="border"> </div>
              <h3>
                <b>Edad:</b> {usuario.edad}
              </h3>
              <div className="border"> </div>
              <h3>
                <b>Descripcion:</b> {usuario.descripcion}
              </h3>
              <div className="border"> </div>
              <h3>
                <b>Valoracion:</b> 5.0
              </h3>
              <div className="d-flex justify-content-center">
                <button
                  className="btn my-3"
                  style={{ backgroundColor: "#D8DBBD" }}
                >
                  Ver perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
