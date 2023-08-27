import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./index.scss";
import school from "../../assets/school_FILL0_wght400_GRAD0_opsz48 1.svg";
import verify from "../../assets/verified_FILL0_wght400_GRAD0_opsz48 1.svg";
import doc from "../../assets/stethoscope_FILL0_wght400_GRAD0_opsz24 1.svg";
import document from "../../assets/tune_FILL0_wght400_GRAD0_opsz24 1.svg";
import paper from "../../assets/library_books_FILL0_wght400_GRAD0_opsz24 1.svg";
import operator from "../../assets/support_agent_FILL0_wght400_GRAD0_opsz48 1.svg";
import maintaince from "../../assets/chart_data_FILL0_wght400_GRAD0_opsz24 1.svg";
import rise from "../../assets/description_FILL0_wght400_GRAD0_opsz24 1.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import { FiArrowUpRight } from "react-icons/fi";

// Наши преимущества

const Advantages = () => {
  const { t } = useTranslation();

  // {t("main_4_1")}

  let cardinfo = [
    { title: t("main_3_2"), image: school },
    { title: t("main_3_3"), image: verify },
    { title: t("main_3_4"), image: doc },
    { title: t("main_3_5"), image: document },
    { title: t("main_3_6"), image: paper },
    { title: t("main_3_7"), image: operator },
    { title: t("main_3_8"), image: maintaince },
    { title: t("main_3_9"), image: rise },
  ];

  return (
    <div className="cards_container mx-auto w-11/12">
      <div
        className="flex flex-col md:flex-row justify-center md:justify-between "
        style={{
          alignItems: "center",
          maxWidth: "1280px",
          // margin: "0 auto",
          padding: "1rem 0",
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          style={{
            textAlign: "center",
            // margin: "0 auto",
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
        <Link
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
        </Link>
      </div>
      <Box className="infos pb-24">
        {cardinfo.map((info) => (
          <Card
            className="cards"
            style={{
              maxWidth: "100%",
              minWidth: "20%",
              // width: "100%",
              padding: "",
              borderRadius: "0.5em !important",
            }}
            key={crypto.randomUUID()}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <img src={info.image} alt="study" />
                </Avatar>
              }
            />
            <CardContent>
              <Typography
                style={{ color: "#000 !important" }}
                variant="h6"
                component="p"
                color="black"
              >
                {info.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Advantages;
