import { useState, useEffect } from "react";

export default function Product({
  prodetail,
  prodetails: { proimg, price, name, detail },
}) {
  var [menu, setMenu] = useState([]);
  // console.log(" " + name + " " + detail);
  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //     .then((data) => data.json())
  //     .then((food) => setMenu(food.categories))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div className="prodisplay">
      <img src={proimg} alt="menuimg" />
      <p className="proname">{name}</p>
      <p className="prodescryp">{detail}</p>
      <button className="proprice">{price}</button>
      {/* {menu.map((product) => (
        <>
          <img src={product.strCategoryThumb} alt="menuimg" />
          <p className="proname">{product.strCategory}</p>
        </>
      ))} */}
    </div>
  );
}
