import { Typography } from "@mui/material";
import AboutUsImg from "../../assets/about_us.jpg";
import AboutUsImg2 from "../../assets/about_us1.png";

import { FiArrowUpRight } from "react-icons/fi";
import "./about_us.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import Sidebar from "../../components/sidebar/sidebar";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <div className="bg_img"> */}

      <div className="about_us">
        <div className="img" style={{ alignSelf: "center" }}>
          <img src={AboutUsImg2} alt="aboutUs2" />
          <img src={AboutUsImg} alt="aboutus" />
        </div>
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
            {t("main_2_1")}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            style={{
              color: "#324291",
              fontFamily: "Okta Neue",
              // fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140% /* 25.2px */",
            }}
          >
            {t("main_2_2")}
          </Typography>

          <div
            className="flex flex-col md:flex-row md:gap-10 about_links"
            // style={{ display: "flex" }}
          >
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "2rem 0",
                // width: "180px",
                height: "30px",
                padding: "20px 24px",
                color: "rgba(239, 127, 26, 1)",
                border: "2px solid rgba(239, 127, 26, 1)",
                // background: "#000",
                borderRadius: "100px",
              }}
              className="aboutBtn"
              to="/about-us"
            >
              {t("main_2_3")} <FiArrowUpRight />
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "2rem 0",
                // width: "180px",
                height: "30px",
                padding: "20px 24px",
                color: "rgba(239, 127, 26, 1)",
                border: "2px solid rgba(239, 127, 26, 1)",
                borderRadius: "100px",
              }}
              className="aboutBtn"
              to="/contact"
            >
              {t("main_2_4")} <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AboutUs;
