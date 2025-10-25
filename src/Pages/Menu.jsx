import Product from "../Components/Product";
import "./Pages.css";
import burger1 from "./../assets/menu/burger2.jpg";
import burger2 from "./../assets/menu/burger3.jpg";
import burger3 from "./../assets/menu/burger4.jpg";
import burger4 from "./../assets/menu/burger5.jpg";
import burger5 from "./../assets/menu/burger6.jpg";
import burger6 from "./../assets/menu/burger7.jpg";
import burger7 from "./../assets/menu/burger8.jpg";
import burger8 from "./../assets/menu/burger9.jpg";

export default function Menu() {
  var prodetails = [
    {
      proimg: burger1,
      name: "ABC",
      price: 12,
      detail: "aaaANY THING THAT TASTE BETTER",
    },
    {
      proimg: burger2,
      name: "s",
      price: 12,
      detail: "AWESOME BURGER WITH SALAD",
    },
    { proimg: burger3, name: "s", price: 12, prodescyp: "aaa" },
    { proimg: burger4, name: "s", price: 12, prodescyp: "aaa" },
    { proimg: burger5, name: "s", price: 12, prodescyp: "aaa" },
    { proimg: burger6, name: "s", price: 12, prodescyp: "aaa" },
    { proimg: burger7, name: "s", price: 12, prodescyp: "aaa" },
    { proimg: burger8, name: "s", price: 12, prodescyp: "aaa" },
  ];
  return (
    <div id="Menu" className="Page">
      <div className="menutext">
        <p className="menutitle">OUR MENU</p>
        <p className="menudescryption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          expedita sit nostrum quia minus. Minima ad natus nesciunt repudiandae
          saepe. Non atque praesentium expedita ut culpa, placeat optio alias
          vel!
        </p>
      </div>
      <div className="items">
        {prodetails.map((product, ind) => {
          return <Product key={ind} prodetails={product} />;
        })}
      </div>

      {/* <Product></Product> */}
    </div>
  );
}
