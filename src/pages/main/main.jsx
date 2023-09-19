// import "./main.scss";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Advantages from "../../components/advantages/advantages";
import Products from "../../components/products/products";
// import Sidebar from "../../components/sidebar/sidebar";
import AboutUs from "../../components/about_us/about_us";
import Partners from "../../components/partners/partners";
// import Blog from "../../components/blog/blog";
import Footer from "../../components/footer/footer";

const Main = () => {
  return (
    <div className="container-fluid">
      {/* <Sidebar className="sidebar" /> */}
      <Navbar />
      <div className="showcase">
        <Hero className="hero" />
        <div className="bg_img">
          <AboutUs />
          <Advantages />
          <Products />
          <Partners />
        </div>
        {/* <Blog /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
