import { Typography } from "@mui/material";
import AboutUsHeroImg from "../../assets/aboutHero.jpg";

import { FiArrowUpRight } from "react-icons/fi";

import "./about_us.scss";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import Sidebar from "../../components/sidebar/sidebar";
const AboutUsHero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg_img">
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
              <Link className="aboutBtn" to="/contact">
                {t("about_1_3")} <FiArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="img" style={{ marginTop: "2.5rem" }}>
            <img src={AboutUsHeroImg} alt={AboutUsHeroImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
