import fb from "./..//assets/footer/fb.png";
import x from "./..//assets/footer/x.png";
import youtube from "./..//assets/footer/youtube.png";
import insta from "./..//assets/footer/insta.png";

export default function Footer() {
  return (
    <div className="mainfooter">
      <div className="footer">
        <div className="location">
          <p className="bold">LOCATION</p>
          <p>Bhutta Muhalla, Near Inspection Bunglow, Kandhkot</p>
        </div>
        <div className="workinghours">
          <p className="bold">Working Hours</p>
          <p>Mon-Fri 9:00AM-10:00PM</p>
          <p>Saturday 10:00AM-8:30PM</p>
          <p>Sunday 12:00PM-5:00PM</p>
        </div>
        <div className="ordernow">
          <p className="bold">ORDER NOW</p>
          <p>Contact Number 0311-2177456</p>
        </div>
        <div className="socialmedia">
          <p className="bold">FOLLOW US</p>
          <div className="icons">
            <img src={fb} alt="" />
            <img src={x} alt="" />
            <img src={youtube} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
      <div className="rights">
        <p>
          @2023 KASHIFZULIFQAR ALL RIGHTS RESERVED <a href="">ABOUT US ||</a>
          {"    "}
          <a href=""> TERMS OF USE || </a>
          <a href=""> PRIVACY POLICY</a>
        </p>
      </div>
    </div>
  );
}
