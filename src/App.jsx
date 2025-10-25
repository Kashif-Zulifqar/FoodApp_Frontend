import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Menu from "./Pages/Menu";
import { useState } from "react";
import Header from "./Components/Header";
function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* <Header setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />} */}
      <Home />
      <About></About>
      <Menu></Menu>
      <Blogs></Blogs>
      <Contact></Contact>
    </>
  );
}

export default App;
