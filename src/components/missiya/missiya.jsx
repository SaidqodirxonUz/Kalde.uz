import { Typography } from "@mui/material";
import MissiyaImg from "../../assets/images/about_2_3.jpg";
import "./missiya.scss";
import { useTranslation } from "react-i18next";

// import Sidebar from "../../components/sidebar/sidebar";
const Missiya = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about_us hero hero-noreverse">
        <div className="texts">
          <Typography
            variant="h2"
            component="h3"
            style={{
              fontSize: "36px",
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
            {t("about_3_1")}
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
            {t("about_3_2")}
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
