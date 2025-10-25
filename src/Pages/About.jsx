import Menu from "./Menu";
import AboutCard from "./../Components/AboutCard";
import bike from "./../assets/about/delivery-bike.png";
import pizza from "./../assets/about/pizza.png";
import salad from "./../assets/about/salad.png";
import bg from "./../assets/about/Aboutbg.jpg";

import "./Pages.css";
export default function About() {
  const services = [
    {
      sname: "Free Delivery",
      sdescryp:
        " fgdfgdfgfdgsdgdvccvxvcdgfdlgv,fgdfgdfgfdgsdgdvccvxvcdgfdlgvfgdfgdfgfdgsdgdvccvxvcdgfdlgv,",
      imgsrc: bike,
    },
    {
      sname: "Pizza",
      sdescryp: "fgdfgdfgfdgsdgdvccvxvcdgfdlgvfgdfgdfgfdgsdgdvccvxvcdgfdlgv",
      imgsrc: pizza,
    },
    {
      sname: "Salad",
      sdescryp: "fgdfgdfgfdgsdgdvccvxvcdgfdlgvfgdfgdfgfdgsdgdvccvxvcdgfdlgv",
      imgsrc: salad,
    },
  ];

  return (
    <div id="About" className="Page">
      {/* <div className="aboutbg">
        <img src={bg} alt="" />
      </div> */}
      <div className="aboutdata">
        <p className="aboutline">
          THE BURGER TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY
        </p>
        <p className="descryption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          officia aliquid accusamus, nostrum neque cumque error quis qui natus
          doloremque.
        </p>
        <button className="explore">
          <a href="#Menu">EXPLORE FULL MENU</a>
        </button>
      </div>

      <div className="cards">
        {services.map((service, ind) => (
          <AboutCard key={ind} service={service} />
        ))}
      </div>
      {/* <AboutCard />
        <AboutCard />
        <AboutCard /> */}
    </div>
  );
}
