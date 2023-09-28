/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./index.scss";
import sertifikat1 from "/1.png";
import sertifikat2 from "/2.png";
import sertifikat3 from "/3.png";
import sertifikat4 from "/4.png";

import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

// import { FiArrowUpRight } from "react-icons/fi";

// Наши преимущества

const Advantages = () => {
  const { t } = useTranslation();

  // {t("main_4_1")}

  let cardinfo = [
    { title: t("main_3_2"), image: sertifikat1 },
    { title: t("main_3_3"), image: sertifikat2 },
    { title: t("main_3_4"), image: sertifikat3 },
    { title: t("main_3_5"), image: sertifikat4 },

    // { title: t("main_3_6"), image: paper },
    // { title: t("main_3_7"), image: operator },
    // { title: t("main_3_8"), image: maintaince },
    // { title: t("main_3_9"), image: rise },
  ];

  return (
    // <div className="bg_img">
      <div className="cards_container">
        <div
          className="flex flex-col md:flex-row justify-center md:justify-between "
          style={{
            alignItems: "center",
            // maxWidth: "1280px",
            // margin: "0 auto",
            padding: "1rem 0",
          }}
        >
          <Typography
            variant="h2"
            component="h3"
            style={{
              textAlign: "center",
              margin: "0 auto",
              fontFamily: "Okta Neue",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              background:
                "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="mx-auto lg:mx-0 lg:pl-20"
          >
            {t("main_3_1")}
          </Typography>
          {/* <Link
          // className="btn"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem 0",
            // width: "180px",

            // height: "30px",
            padding: "0.7rem",
            color: "rgba(239, 127, 26, 1)",
            border: "1px solid rgba(239, 127, 26, 1)",
            borderRadius: "100px",
          }}
          className="more hidden lg:flex"
          to="/advantages"
        >
          {t("main_2_3")}
          <FiArrowUpRight />
        </Link> */}
        </div>
        <Box className="infos pb-24">
          {cardinfo.map((info) => (
            <Card
              className="cards"
              style={{
                // maxWidth: "100%",
                // minWidth: "20%",
                // width: "100%",
                padding: "",
                borderRadius: "0.5em !important",
              }}
              key={uuidv4()}
            >
              <CardHeader
                avatar={
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img
                      src={info.image}
                      alt="study"
                      style={{ width: "20%", height: "100%" }}
                    />
                  </div>
                }
              />
              {/* <CardContent>
              <Typography
                style={{ color: "#000 !important" }}
                variant="h6"
                component="p"
                color="black"
              >
                {info.title}
              </Typography>
            </CardContent> */}
            </Card>
          ))}
        </Box>
      </div>
    // </div>
  );
};

export default Advantages;
