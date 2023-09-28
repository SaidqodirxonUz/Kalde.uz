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
  <>
     <Navbar />
    <div className="bg_img">
    <div className="container-fluid">
      {/* <Sidebar className="sidebar" /> */}
     
        <Hero className="hero" />

        
        <AboutUs />
          <Advantages />
          <Products />
          <Partners />
          <Footer />

      </div>
      </div>
  </>
   
  );
};

export default Main;
