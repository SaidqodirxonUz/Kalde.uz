import "./sidebar.scss";
// import Button from "@mui/material/Button";
import logo from "../../assets/sidebar_img.png";
import tg from "../../assets/tg.svg";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
// import youtube from "../../assets/youtube.svg";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="bg-orange-400 img_side">
        <Link to={"/"}>
          <img src={logo} alt="kalde logo" />
        </Link>
      </div>
      <div className="social_link">
        <Link
          to={"https://t.me/kalde_official"}
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={tg}></img>
        </Link>
        <Link
          to={"https://instagram.com/kalde_official?igshid=MzRlODBiNWFlZA=="}
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={insta}></img>
        </Link>
        <Link
          to={
            "https://www.facebook.com/profile.php?id=100095458455938&mibextid=ZbWKwL"
          }
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src={facebook}></img>
        </Link>
        {/* <Link to="#">
          <img className="" src={youtube}></img>
        </Link> */}
        <br />
      </div>
      <Link
        className="email flex-col justify-center items-center"
        to={"mailto:kaldeuz@mail.ru"}
      >
        <p>kaldeuz@mail.ru</p>
        <HiMail className="text-3xl text-yellow-300 flex-row justify-center items-center" />
      </Link>
    </div>
  );
}

export default Sidebar;
