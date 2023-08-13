import { Typography } from "@mui/material";
import MissiyaImg from "../../assets/about_us_hero.png";
import "./missiya.scss";

// import Sidebar from "../../components/sidebar/sidebar";
const Missiya = () => {
  return (
    <>
      <div className="about_us hero">
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
            Миссия в Узбекистане
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
            KALDE - основана в 1977 году, расположена в Стамбуле, Турция,
            производит продукцию для современных систем отопления и
            водоснабжения. Сегодня продукция KALDE известна в 50 странах мира.
            Продукция KALDE, отвечающая мировым стандартам, известна в 40
            крупнейших странах мира. Вся продукция имеет международные
            сертификаты. На рынке Узбекистана продукция Kalde стала известна в
            2009 году. На сегодняшний день в Узбекистане продукцию Kalde можно
            купить более чем в 20 специализированных магазинах!
          </Typography>
        </div>
        <div className="img">
          <img src={MissiyaImg} alt={MissiyaImg} />
        </div>
      </div>
    </>
  );
};

export default Missiya;
