import { Typography } from "@mui/material";
import hero from "../../assets/hero.png";
import "./hero.scss";

const Hero = () => {
  return (
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
          KALDE – это высококачественная продукция, соответствующая всем мировым
          стандартам и имеющая сертификаты систем международных стандартов!
        </Typography>
      </div>
      <div className="img">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
