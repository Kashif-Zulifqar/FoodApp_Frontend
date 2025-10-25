import bg from "./../assets/hero/bg.jpg";
import burger from "./../assets/hero/burger.png";
import dicount from "./../assets/hero/dicount.png";
import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import next from "./../assets/hero/next.png";
import burger2 from "./../assets/menu/burger2.jpg";
import burger3 from "./../assets/menu/burger3.jpg";
import burger4 from "./../assets/menu/burger4.jpg";
import burger5 from "./../assets/menu/burger5.jpg";
import burger6 from "./../assets/menu/burger6.jpg";
import { useState, useEffect } from "react";
import "./Pages.css";
import About from "./About";
export default function Home() {
  // ✅ Store images and texts as an array of objects
  const productList = [
    { src: burger, text: "Classic Burger" },
    { src: burger2, text: "New Burger with Onion" },
    { src: burger3, text: "New Burger with Salad" },
    { src: burger4, text: "New Burger with Kabab" },
    { src: burger5, text: "New Burger with Onion" },
    { src: burger6, text: "New Burger with Kababjee" },
  ];

  // ✅ Correct way to use useState (Array Destructuring)
  const [imgSrc, setImageSrc] = useState(productList[0].src);
  const [title, setTitle] = useState(productList[0].text);

  // ✅ Change image dynamically (e.g., selecting next image)
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * productList.length);
    setImageSrc(productList[randomIndex].src);
    setTitle(productList[randomIndex].text);
  };

  // ✅ Debugging: Track state changes
  useEffect(() => {
    console.log("Updated Image:", imgSrc);
  }, [imgSrc]);

  return (
    <div id="Home" className="Page">
      <Header />
      <div className="mainbody">
        <div className="HomeImages">
          <div className="burgerdiscount">
            <img src={dicount} alt="discount" />
            <div className="discount">
              <img src={imgSrc ? imgSrc : burger} alt="burger" />
              <span>60% off</span>
            </div>
          </div>
          {/* <div className="previous">
            <img src="" alt="" />
          </div> */}
          <div className="next">
            <button onClick={changeImage}>
              <img src={next} alt="" />
            </button>
          </div>
        </div>
        <div className="texts">
          <p className="bigtext">{title ? title : "New Burger with Onion"}</p>
          <p className="smalltext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            cupiditate itaque nulla inventore ad voluptate dolore incidunt
            maxime. Deleniti odio, explicabo fugit voluptas minus aliquam? A
            maiores molestias quo.
          </p>
          <button className="order">Order Now</button>
        </div>
      </div>
    </div>
  );
}
