import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';

export default function Viajes() {
  const [viajes, setViaje] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/viajes?lugarOrigen=${search}`
        );
        setViaje(res.data);
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
        <h1 className="pt-5 pb-5 display-4 text-center">Viajes disponibles</h1>
        <div className="input-group mb-5">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">
              Buscar viaje por lugar de destino
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ejemplo: Villa Carlos Paz"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="viajes row">
        {viajes.length === 0 && (
  <>
    <iframe
      src="https://giphy.com/embed/CM1rHbKDMH2BW"
      width={480}
      height={360}
      style={{height: "50vh"}}
      frameBorder={0}
      className="giphy-embed"
      allowFullScreen=""
    />
    <h1 className="text-center p-5">No se encontraron viajes con ese origen :(</h1>
   
  </>
)}

          {viajes.map((viaje) => (
            <div className="viaje shadow mb-3 p-4  col-md-4" key={viaje.id}>
            <h2 className="text-center pb-3">Viaje</h2>
              <h3>
                <b>Origen:</b> {viaje.lugarOrigen}
              </h3>
              <h3>
                <b>Destino:</b> {viaje.lugarDestino}
              </h3>
              <h3>
                <b>Precio:</b> ${viaje.precio}
              </h3>
              <h3>
                <b>Fecha de origen:</b> {format(new Date(viaje.fechaOrigen), 'dd/MM/yyyy HH:mm')}
              </h3>
              <a href={viaje.linkRuta} className="text-decoration-none">
                <h3>
                  <b>Link de ruta</b>
                </h3>
              </a>
              <div className="border mb-3"> </div>

              <h2 className="text-center pb-3">Conductor</h2>
              <div className="row d-flex justify-content-center ">
              <div className="col-4 d-flex align-items-start justify-content-end">
                {viaje.image ? (
                  <img className="rounded-circle" src={`http://localhost:3001/${viaje.image}`}></img>
                ) : (
                  <img className="rounded-circle" src="http://localhost:3001/uploads/dog-driving-meme-1.jpg"></img>
                )}
                </div>

                <div className="col-8 px-0">
                <h3>
                  <b>Nombre:</b> {viaje.nombre}
                </h3>
                <h3>
                  <b>Apellido:</b> {viaje.apellido}
                </h3>
                <h3>
                  <b>Valoracion:</b>5.0
                </h3>
              </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn my-3"
                  style={{ backgroundColor: "#D8DBBD" }}
                >
                  Inscribirse a viaje
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
