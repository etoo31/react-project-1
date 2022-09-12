import React from "react";
import Styles from "../css/Footer.module.css";
function Footer() {
  console.log("Footer Rendered");

  const images = [
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
    "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg",
  ];
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Top}>
        <p style={{ width: "58%" }}>
          Top companies choose{" "}
          <a style={{ color: "#af5ac4" }}>Udemy Business</a> to build in-demand
          career skills.
        </p>
        <span>
          <img src={images[0]} style={{ height: "80px", width: "8%" }}></img>
          <img src={images[1]} style={{ height: "50px", width: "5%" }}></img>
          <img src={images[2]} style={{ height: "50px", width: "8%" }}></img>
          <img src={images[3]} style={{ height: "80px", width: "8%" }}></img>
          <img src={images[4]} style={{ height: "80px", width: "9%" }}></img>
        </span>
      </div>
      <hr style={{ color: "white", width: "100%" }}></hr>
      <div className={`row ${Styles.table} p-5`}>
        <div className="col-12 col-lg-4">Udemy Business</div>
        <div className="col-12 col-lg-4">careers</div>
        <div className="col-12 col-lg-4">Terms</div>
        <div className="col-12 col-lg-4">Teach on Udemy</div>
        <div className="col-12 col-lg-4">Blog</div>
        <div className="col-12 col-lg-4">Privacy police</div>
        <div className="col-12 col-lg-4">Get the app</div>
        <div className="col-12 col-lg-4">Help and Support</div>
        <div className="col-12 col-lg-4">Cookies Settings</div>
        <div className="col-12 col-lg-4">About Us</div>
        <div className="col-12 col-lg-4">Affiliate</div>
        <div className="col-12 col-lg-4">Site map</div>
        <div className="col-12 col-lg-4">Contact Us</div>
        <div className="col-12 col-lg-4">Investors</div>
        <div className="col-12 col-lg-4">Accessability statement</div>
      </div>
      <div className="row" style={{ width: "100%" }}>
        <div className={`col-12 col-lg-9 mt-3 ${Styles.logo}`}>
          <img src={images[5]} />
        </div>
        <div className={`col-12 col-lg-3 mt-4 ${Styles.inc}`}>
          © 2022 Udemy, Inc.
        </div>
      </div>
      <div>
        <button>
          <i className="fa fa-light fa-globe" /> &nbsp; English
        </button>
      </div>
    </div>
  );
}

export default React.memo(Footer);
