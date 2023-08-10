import "./main.scss";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Advantages from "../../components/advantages/advantages";
import Products from "../../components/products/products";
const Main = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="showcase">
        <Hero className="hero" />
        <Advantages />
        <Products />
      </div>
    </div>
  );
};

export default Main;
