import { Typography } from "@mui/material";
import hero from "../../assets/hero.png";
import { FiArrowUpRight } from "react-icons/fi";
import "./hero.scss";
import Sidebar from "../../components/sidebar/sidebar";
const Hero = () => {
  return (
    <>
      <Sidebar className="sidebar" />
      <div className="hero">
        <div className="texts">
          <Typography
            variant="h2"
            component="h3"
            style={{
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              lineHeight: "normal",
              background:
                "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Что такое КАЛДЕ?
          </Typography>
          <Typography
            variant="h5"
            component="p"
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Okta Neue",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140% /* 25.2px */",
            }}
          >
            KALDE, для систем отопления и водоснабжения, высококачественные
            полипропиленовые трубы и фитинги!
          </Typography>
          <Typography
            variant="h5"
            component="p"
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Okta Neue",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140% /* 25.2px */",
            }}
          >
            KALDE – это высококачественная продукция, соответствующая всем
            мировым стандартам и имеющая сертификаты систем международных
            стандартов!
          </Typography>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "2rem 0",
              width: "180px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
            className="more"
            href="#"
          >
            Узнать больше <FiArrowUpRight />
          </a>
        </div>
        <div className="img">
          <img src={hero} alt="shop" />
        </div>
      </div>
    </>
  );
};

export default Hero;
