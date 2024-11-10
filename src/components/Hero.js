import Header from "./Header";

export default function Hero() {
  return (
      <div
        className="contenedor"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
      <Header/>
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-clip"
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          >
            <source src="videos/main-background.mp4" type="video/mp4"></source>
          </video>

          <div
            className="content"
            style={{
              textAlign: "center",
            }}
          >
            {/*  <img
            src="/logo/logocoTravelBlanco.png"
            style={{
              height: "75vh",
            }}
          ></img> */}
            <h1
              style={{
                fontSize: "95px",
                color: "#fff",
                letterSpacing: "1.7px",
                fontFamily: "Poppins",
              }}
            >
              coTravel
            </h1>
          </div>
        </div>
      </div>
  );
}
