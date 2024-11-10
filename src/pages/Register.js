import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    edad: null,
    password: "",
    image: null,
    descripcion: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    //console.log(user);

    e.preventDefault();
    try {

      // Crear un FormData y añadir los datos
      const formData = new FormData();
      formData.append("nombre", user.nombre);
      formData.append("apellido", user.apellido);
      formData.append("dni", user.dni);
      formData.append("edad", user.edad);
      formData.append("password", user.password);
      formData.append("descripcion", user.descripcion);

      // Añadir el archivo de imagen si existe
      if (user.image) {
        formData.append("image", user.image);
      }

      // Realizar la solicitud POST con axios
      navigate("/");
      await axios.post("http://localhost:3001/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
    } catch (err) {
      console.log(err);
    }
    /*try {
      console.log(user);
      await axios.post("http://localhost:3001/register", user);
    } catch (err) {
      console.log(err);
    }*/
  };

  const fileSelectedHandler = (event) => {
    setUser((prev) => ({ ...prev, image: event.target.files[0] }));
  };
  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#D8DBBD" }}>
        <Header text={"text-dark"} />
      </div>
      <div
        className="container bg-white py-5 my-5 d-flex flex-column justify-content-center"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="title text-center pb-2">Registrarme</h1>

        <div className="form">
          <div className="row px-3 py-3">
            <div className="form-group col-6">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control m-2"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                className="form-control m-2"
                name="apellido"
                placeholder="Apellido"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row px-3 py-3">
            <div className="form-group col-md-6">
              <label htmlFor="dni">DNI</label>
              <input
                type="number"
                className="form-control m-2"
                name="dni"
                placeholder="DNI"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="edad">Edad</label>
              <input
                className="form-control"
                name="edad"
                type="number"
                placeholder="Edad"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row px-3 py-3">
            <div className="form-group col-md-6 px-3 py-3">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control m-2"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 px-3 py-3">
              <label htmlFor="formFile" className="form-label">
                Sube tu foto de perfil
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="image"
                onChange={fileSelectedHandler}
              />
            </div>
          </div>

          <div className="form-group px-3 py-3">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              className="form-control m-3"
              name="descripcion"
              placeholder="Explica un poco de por que usarias esta aplicacion para viajar, ej: conocer personas nuevas o lugares nuevos"
              defaultValue={""}
              style={{
                minHeight: "10vh",
              }}
              onChange={handleChange}
            />
          </div>

          <p>
            <a
              className="btn mt-4 pb-1 disabled"
              style={{ color: "#B59F78" }}
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Registrar vehiculo
            </a>
          </p>
          <button
            className="btn my-3 text-white"
            style={{ backgroundColor: "#D8DBBD" }}
            onClick={handleClick}
          >
            Registrarme
          </button>
        </div>
      </div>
    </>
  );
}
