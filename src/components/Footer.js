export default function Footer() {
  return (
    <div
      className="mt-5 d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100vw", height: "30vh", backgroundColor: "#2A3663" }}
    >
      <img src="/logo/logocoTravelBlanco2.png" style={{ width: "700px" }}></img>
      <div className="d-flex pb-3">
      <a href="https://www.facebook.com/rossogustavo.com.ar/?fref=ts">
        <i
          style={{ fontSize: 20 }}
          className="fa fa-brands fa-facebook text-light  px-3"
        />
      </a>
      <a href="https://api.whatsapp.com/send?phone=543537513657">
        <i
          style={{ fontSize: 20 }}
          className="fa fa-brands fa-whatsapp text-light px-3"
        />
      </a>
      <a href="https://www.youtube.com/@gustavorosso7650">
        <i
          style={{ fontSize: 20 }}
          className="fa fa-brands fa-twitter text-light px-3"
        />
      </a>
      </div>
    </div>
  );
}
