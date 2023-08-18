/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react'
import AboutUsHeroImg from "../../assets/about_us_hero.png";

import { Typography } from "@mui/material";

import { FiArrowUpRight } from "react-icons/fi";

import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
// import Typography from "@mui/material/Typography";

// import { useTranslation } from "react-i18next";

const Advantage_cards = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 md:py-0">
      <div
        className="advantage hero"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="texts">
          <Typography
            variant="h5"
            component="h6"
            style={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              color: "var(--text-color-secondary-text, #2E2E2E)",
            }}
          >
            {t("advantages_1_1")}
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
              lineHeight: "140%",
            }}
          >
            {t("advantages_1_2")}
          </Typography>
          {/* ))} */}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "220px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
          >
            {t("advantages_1_9")}
            <FiArrowUpRight />
          </Button>
        </div>
        <div className="img">
          <img src={AboutUsHeroImg} alt="a" />
        </div>
      </div>
      <div
        className="advantage hero"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="img">
          <img src={AboutUsHeroImg} alt="a" />
        </div>
        <div className="texts">
          <Typography
            variant="h5"
            component="h6"
            style={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              color: "var(--text-color-secondary-text, #2E2E2E)",
            }}
          >
            {" "}
            {t("advantages_1_1")}
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
              lineHeight: "140%",
            }}
          >
            {t("advantages_1_2")}
          </Typography>
          {/* ))} */}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "220px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
          >
            {t("advantages_1_9")}
            <FiArrowUpRight />
          </Button>
        </div>
      </div>
      <div
        className="advantage hero"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="texts">
          <Typography
            variant="h5"
            component="h6"
            style={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              color: "var(--text-color-secondary-text, #2E2E2E)",
            }}
          >
            {t("advantages_1_1")}
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
              lineHeight: "140%",
            }}
          >
            {t("advantages_1_2")}
          </Typography>
          {/* ))} */}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "220px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
          >
            {t("advantages_1_9")}
            <FiArrowUpRight />
          </Button>
        </div>
        <div className="img">
          <img src={AboutUsHeroImg} alt="a" />
        </div>
      </div>
      <div
        className="advantage hero"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="img">
          <img src={AboutUsHeroImg} alt="a" />
        </div>
        <div className="texts">
          <Typography
            variant="h5"
            component="h6"
            style={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              color: "var(--text-color-secondary-text, #2E2E2E)",
            }}
          >
            {" "}
            {t("advantages_1_1")}
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
              lineHeight: "140%",
            }}
          >
            {t("advantages_1_2")}
          </Typography>
          {/* ))} */}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "220px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
          >
            {t("advantages_1_9")}
            <FiArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advantage_cards;
