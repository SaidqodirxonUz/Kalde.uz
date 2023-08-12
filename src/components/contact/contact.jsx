import { Box, TextField, Typography } from "@mui/material";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";
import "./style.scss";
const Contact = () => {
  return (
    <>
      <div className="contact flex flex-row justify-center items-center">
        <div
          className="info"
          style={{
            display: "flex",
            width: "30%",
            height: "330px",
            padding: "60px 48px",
            justifyContent: " center",
            alignItems: "flex-start",
            flexDirection: "column",
            borderTop: "5px solid var(--orange, #EF7F1A)",
            background: "#FFF",

            /* small shadow */
            boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.05)",
            // flexShrink: 0,
          }}
        >
          <Typography>
            Есть ли у вас дополнительные вопросы? Хотите узнать больше о
            компании? Хотите стать официальным дилером?
          </Typography>
          <Typography>
            Вы заинтересованы в наших продуктах? Тогда свяжитесь с нами. И мы
            всегда готовы работать с вами!
          </Typography>
          <div className="flex flex-row justify-center items-start">
            <a href="#">
              <TbBrandTelegram />
            </a>
            <a href="#">
              <TbBrandInstagram />
            </a>
            <a href="#">
              <TbBrandFacebook />
            </a>
          </div>
        </div>
        <div className="form_data">
          <Typography variant="h4" component="h2">
            Связаться с нами
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="on"
            className="flex flex-col justify-evenly items-center max-w-4xl"
          >
            <TextField id="outlined-basic" label="Ism" variant="outlined" />
            <TextField id="outlined-basic" label="Familya" variant="outlined" />
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </div>
            <></>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Contact;
