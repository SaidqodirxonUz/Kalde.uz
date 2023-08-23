import { Typography } from "@mui/material";
import AboutUsHeroImg from "../../assets/images/about_1_1.jpg";
import { FiArrowUpRight } from "react-icons/fi";

import "./about_us.scss";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import Sidebar from "../../components/sidebar/sidebar";
const AboutUsHero = () => {
  const { t } = useTranslation();
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
            {t("about_1_1")}
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
            {t("about_1_2")}
          </Typography>

          <div style={{ display: "flex", columnGap: "1rem" }}>
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
              className="more"
              to="/contact"
            >
              {t("about_1_3")} <FiArrowUpRight />
            </Link>
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
