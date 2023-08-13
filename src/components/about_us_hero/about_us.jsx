import { Typography } from "@mui/material";
import AboutUsHeroImg from "../../assets/about_us_hero.png";
import { FiArrowUpRight } from "react-icons/fi";
import playSvg from "../../assets/play.svg";
import "./about_us.scss";

// import Sidebar from "../../components/sidebar/sidebar";
const AboutUsHero = () => {
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
            О нас
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

          <div style={{ display: "flex", columnGap: "1rem" }}>
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
            <a
              style={{
                display: "flex",
                width: "2.8rem",
                height: "2.8rem",
                margin: "2rem 1rem",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: "100%",
                border: "1px solid var(--orange, #EF7F1A)",
                background:
                  "var(--orange, linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), #EF7F1A)",
              }}
              className="more"
              href="#"
            >
              <img src={playSvg} alt={playSvg} />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={AboutUsHeroImg} alt={AboutUsHeroImg} />
        </div>
      </div>
    </>
  );
};

export default AboutUsHero;
