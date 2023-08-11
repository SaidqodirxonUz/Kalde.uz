import "./main.scss";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Advantages from "../../components/advantages/advantages";
import Products from "../../components/products/products";
import Sidebar from "../../components/sidebar/sidebar";
import AboutUs from "../../components/about_us/about_us";
import Partners from "../../components/partners/partners";
import Blog from "../../components/blog/blog";

const Main = () => {
  return (
    <div className="container-fluid">
      <Sidebar className="sidebar" />
      <Navbar />
      <div className="showcase">
        <Hero className="hero" />
        <AboutUs />
        <Advantages />
        <Products />
        <Partners />
        <Blog />
      </div>
    </div>
  );
};

export default Main;
