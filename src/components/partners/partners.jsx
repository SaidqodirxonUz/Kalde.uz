import { Typography } from "@mui/material";

import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";

import "./partners.scss";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg_img">
        <Typography
          variant="h2"
          component="h3"
          style={{
            textAlign: "center",
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
            // paddingTop: "5rem",
          }}
        >
          {t("main_5_1")}
        </Typography>

        <div className="slider-parent">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={partner1} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner2} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner3} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner4} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner5} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner1} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner2} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner3} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner4} height="100" width="100" alt="" />
              </div>
              <div className="slide">
                <img src={partner5} height="100" width="100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
