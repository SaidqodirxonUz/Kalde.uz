// import { Typography } from "@mui/material";
import Advantage_cards from "../../components/advantage_cards/cards";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./sttle.scss";
// import { FiArrowUpRight } from "react-icons/fi";

const Advantages = () => {
  return (
    <>
      <Navbar />
      <section className="w-10/12 mx-auto pt-40">
        <div className="flex flex-col items-center justify-center">
          <Advantage_cards dir="row" name="text" />
          {/* <Advantage_cards dir="row-reverse" /> */}
          {/* <Advantage_cards dir="row" />
          <Advantage_cards dir="row-reverse" />
          <Advantage_cards dir="row" /> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Advantages;
