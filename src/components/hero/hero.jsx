import { Typography } from "@mui/material";
import hero from "../../assets/hero.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import "./hero.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import Sidebar from "../../components/sidebar/sidebar";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg_img">
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
              {t("main_1_1")}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              style={{
                color: "#324291",
                fontFamily: "Okta Neue",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140% /* 25.2px */",
              }}
            >
              {t("main_1_2")}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              style={{
                color: "#324291",
                fontFamily: "Okta Neue",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140% /* 25.2px */",
              }}
            >
              {t("main_1_3")}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              style={{
                color: "#324291",
                fontFamily: "Okta Neue",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140% /* 25.2px */",
              }}
            >
              {t("main_1_5")}
            </Typography>
            <Link
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
              className="heroMore"
              to="about-us"
            >
              {t("main_1_4")} <FiArrowUpRight />
            </Link>
          </div>
          <div className="heroImg">
            <img src={hero} alt="shop" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
