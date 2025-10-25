import { useState, useEffect } from "react";
import brand1 from "./../assets/brands/brand-11.png";
import brand2 from "./../assets/brands/brand-12.png";
import brand3 from "./../assets/brands/brand-13.png";
import brand4 from "./../assets/brands/brand-14.png";
import brand5 from "./../assets/brands/brand-15.png";
import brand6 from "./../assets/brands/brand-16.png";
import brand7 from "./../assets/brands/brand-17.png";
import brand8 from "./../assets/brands/brand-18.png";
import review1 from "./../assets/blog/review-author-1.jpg";
import review2 from "./../assets/blog/review-author-2.jpg";
import review3 from "./../assets/blog/review-author-3.jpg";
import review4 from "./../assets/blog/reviews.jpg";
import review5 from "./../assets/blog/review-author-5.jpg";

export default function Blogs() {
  var [brand, setBrand] = useState(brand1);
  var [person, setPerson] = useState(review1);
  var [count, setCount] = useState(0);
  var [iszero, setISzero] = useState(true);
  var [islast, setISlast] = useState(false);
  var brandsarray = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  ];
  useEffect(() => {}, []);
  return (
    <div id="Blogs" className="Page">
      <p className="brandtitle">OUR RESTUARENTS</p>
      <div className="brands">
        <p
          className="previous"
          onClick={() => {
            count != 0 ? setCount((count -= 1)) : setISzero(true);
            console.log(count);
          }}
        >
          {/* {iszero != true ? "<" : ""} */}
          {"<"}
        </p>
        <img src={brandsarray[count]} alt="brand" />
        <img src={brandsarray[count + 1]} alt="brand" />
        <img src={brandsarray[count + 2]} alt="brand" />
        <img src={brandsarray[count + 3]} alt="brand" />
        <p
          className="next"
          onClick={() => {
            count < 4 ? setCount(count + 1) : "";
            console.log(count);
            // console.log(count);
          }}
        >
          {">"}
        </p>
      </div>

      {/* REVIEWS */}
      <div className="opinion">
        <p className="back">{"<"}</p>
        <div className="reviews">
          <img src={review1} alt="person" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad iure
            quis accusantium quae, voluptate eum. Autem iusto eveniet
            repudiandae accusantium.
          </p>
        </div>
        <p className="back">{">"}</p>
      </div>
    </div>
  );
}
