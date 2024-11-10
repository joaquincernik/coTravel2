import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import { Button } from "@chakra-ui/react";

export default function Main() {
  /*  const [mensaje, setMensaje] = useState([])

    useEffect(()=>{
        const fetchMessage = async ()=>{
            try{
                const res = await axios.get("http://localhost:3001")
                console.log(res);
                
            }
            catch(err){
                console.log(err);
                
            }
        }
        fetchMessage()
    }, []) */

  return (
    <div>
      <Hero />
      <div
        className="container"
        style={
          {
            //backgroundColor: "#FAF6E3",
          }
        }
      >
        <div className="d-flex flex-column align-items-center my-5 p-4">
          <h1 className="py-5 display-4">¿Qué es coTravel?</h1>
          <h3
            className=""
            style={{
              fontFamily: "Poppins, serif",
              fontWeight: "300",
              fontStyle: "normal",
              lineHeight: "2",
              fontSize: "1.5rem"
            }}
          >
            Es una plataforma móvil especializada en la organización eficiente
            de <b>viajes compartidos</b> en vehículos particulares, priorizando
            la economía de costos y la seguridad de los usuarios.<br></br> Su
            enfoque está en facilitar la comunicación entre conductores y
            pasajeros, así como en ofrecer herramientas para garantizar una
            experiencia de viaje transparente y satisfactoria para ambas partes.
          </h3>
        </div>
      </div>

      <div className="row">
        <div
          className="col-6 py-5 my-5"
          style={{
            backgroundColor: "#D8DBBD",
          }}
        >
          <div className="px-5 d-flex flex-column align-items-center " style={{maxWidth: "45vw", minHeight: "40vh"}}>
          <h1 className="text-center p-5">
              ¿Buscas acompañante para tu viaje?
            </h1>
            <p
              className="py-5 px-3 text-center"
              style={{
                fontSize: "1.4rem",
              }}
            >
              Con <b>coTravel</b>, si viajas a algun lado y buscas acompañante,
              ya sea para amortiguar los gastos de tu viaje, o bien para conocer
              gente nueva, podes <b>publicar</b> tu viaje para que todos los
              usuarios se puedan sumar
            </p>
            <button
              className="btn my-3 bg-white"
            >
              Crear viaje
            </button>
          </div>
        </div>

        <div
          className="col-6 my-5 py-5 "
          style={{
            backgroundColor: "#2A3663",
          }}
        >
          <div className="px-5 d-flex flex-column align-items-center " style={{maxWidth: "45vw", minHeight: "40vh"}}>
          <h1 className="text-center p-5 text-white">
              ¿Necesitas viajar a algun lado y conocer gente nueva?
            </h1>
            <p
              className="py-5 px-3 text-white text-center"
              style={{
                fontSize: "1.4rem",
              }}
            >
              Con <b>coTravel</b>, podes buscar los viajes disponibles cercanos
              a vos, ver el perfil del conductor, conocer sus preferencias y
              sumarte a una experiencia nueva!
            </p>
            <button
              className="btn my-3 bg-white"
            >
            <a href="/usuarios" className="text-decoration-none text-dark">
              Ver todos los usuarios
              </a>
            </button>
          </div>
        </div>
      </div>

    
      {/* <div className="d-flex flex-column align-items-center my-5 p-4">
          <h1 className="py-5 display-3 text-center">Conoce algunos de los viajes disponibles</h1>
          <h3
            className=""
            style={{
              fontFamily: "Poppins, serif",
              fontWeight: "300",
              fontStyle: "normal",
              lineHeight : "2"
            }}
          >
            Es una plataforma móvil especializada en la organización eficiente
            de <b>viajes compartidos</b> en vehículos particulares, priorizando la
            economía de costos y la seguridad de los usuarios.<br></br> Su enfoque está
            en facilitar la comunicación entre conductores y pasajeros, así como
            en ofrecer herramientas para garantizar una experiencia de viaje
            transparente y satisfactoria para ambas partes.
          </h3>
        </div>
 */}
    </div>
  );
}
