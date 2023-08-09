import Sidebar from "../../components/sidebar/sidebar";
import "./main.scss";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Advantages from "../../components/advantages/advantages";

const Main = () => {
  return (
    <div className="container">
      <Sidebar className="sidebar" />
      <div className="showcase">
        <Navbar />
        <Hero />
        <Advantages />
      </div>
    </div>
  );
};

export default Main;
