import "./sidebar.scss";
// import Button from "@mui/material/Button";
import logo from "../../assets/sidebar_img.png";
import tg from "../../assets/tg.svg";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import { HiMail } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="bg-orange-400 img_side">
        <img src={logo} alt="kalde logo" />
      </div>
      <div className="social_link">
        <a href="#">
          <img className="" src={tg}></img>
        </a>
        <a href="#">
          <img className="" src={insta}></img>
        </a>
        <a href="#">
          <img className="" src={facebook}></img>
        </a>
        <a href="#">
          <img className="" src={youtube}></img>
        </a>
        <br />
      </div>
      <a
        className="email flex-col justify-center items-center"
        href="mailto:info@kalde.uz"
      >
        <p>info@kalde.uz</p>
        <HiMail className="text-3xl text-yellow-300 flex-row justify-center items-center" />
      </a>
    </div>
  );
}

export default Sidebar;
