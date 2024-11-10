import { EditablePreview } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
export default function Header({text = "text-white-50"}){
 /*    const [userLogged,setUserLogged] = useState()
    const fetchSession = async () => {
        try {
          const res = await axios.get("http://localhost:3001", { withCredentials: true });
          console.log(res.data);
          
          setUserLogged(res.data.sesion.userLogged);
        } catch (err) {
          console.log(err);
        }
      };
      fetchSession();
 */
    return(
        <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-5 pt-2">
                  <a
                    className={`nav-link active ${text}`}
                    aria-current="page"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item  px-5 pt-2">
                  <a className={`nav-link active ${text}`} href="/viajes">
                    Viajes disponibles
                  </a>
                </li>
                <li className="nav-item  px-5 pt-2">
                  <a className={`nav-link active ${text}`} href="/usuarios">Buscar usuarios</a>
                </li>
                <li className="nav-item  px-5 pt-2">
                  <a className={`nav-link active ${text}`} href="#">
                    Nuestra historia
                  </a>
                </li>
                <li className="nav-item  px-5 pt-2">
                  <a className={`nav-link active ${text}`} href="/login">
                    Log in
                  </a>
                </li>
                <li className="nav-item  px-5 pt-2">
                  <a className={`nav-link active ${text}`} href="/register">
                    Register
                  </a>
                </li> 
               
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    );
}