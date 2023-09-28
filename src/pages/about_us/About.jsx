import "./about.scss";
import Navbar from "../../components/navbar/navbar";
import AboutUsHero from "../../components/about_us_hero/about_us";
import Advantages from "../../components/advantages/advantages";
import Partners from "../../components/partners/partners";
import Footer from "../../components/footer/footer";
import Dostijeniya from "../../components/dostijeniya/dostijeniya";
import Missiya from "../../components/missiya/missiya";

const About = () => {
  return (
    <>
     <Navbar />  
      <div className="bg_img">
     
    <div className="container-fluid">
      {/* <Sidebar className="sidebar" /> */}
      {/* <div className="showcase"> */}
        <AboutUsHero className="hero" />
        <Dostijeniya />
        <Missiya />
        <Advantages className="adventages" />
        <Partners />
        <Footer />
      </div>
    </div>
    {/* </div> */}
    </>

  );
};

export default About;
