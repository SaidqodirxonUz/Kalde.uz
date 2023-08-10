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

let cardinfo = [
  { title: "qwer 34rt5yhfe egfdvev revef fffadsad", image: school },
  { title: "Магазину qwerty qwerty qwerty", image: verify },
  { title: "qwerty qwerty qwerty qwerty", image: doc },
  { title: "qwerty qwerty qwerty qwerty", image: document },
  { title: "qwerty qwerty qwerty qwerty", image: paper },
  { title: "qwerty qwerty qwerty qwerty", image: operator },
  { title: "qwerty qwerty qwerty qwerty", image: maintaince },
  { title: "qwerty qwerty qwerty qwerty", image: rise },
];

const Advantages = () => {
  return (
    <div className="cards_container">
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
        }}
      >
        Наши преимущества
      </Typography>
      <Box className="infos">
        {cardinfo.map((info) => (
          <Card
            className="cards"
            style={{
              maxWidth: "300px",
              height: "180px",
              padding: "25px",
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