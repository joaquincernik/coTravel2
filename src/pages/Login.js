import Header from "../components/Header"
export default function Login(){
    return(
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
          <h1 className="title text-center pb-2">Inniciar sesion</h1>
  
          <div className="form">
            <div className="row px-3 py-3">
              <div className="form-group col-6">
                <label htmlFor="nombre">Nombre y apellido</label>
                <input
                  type="text"
                  className="form-control m-2"
                  name="nombre"
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="apellido">Password</label>
                <input
                  type="text"
                  className="form-control m-2"
                  name="apellido"
                  placeholder="Apellido"
                />
              </div>
            </div>
           
            <button
              className="btn my-3 text-white"
              style={{ backgroundColor: "#D8DBBD" }}
            >
              Iniciar sesion
            </button>
          </div>
        </div>
      </>
    )
}