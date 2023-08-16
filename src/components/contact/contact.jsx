import { Box, Button, Typography } from "@mui/material";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";
import "./style.scss";

const Contact = () => {
  const SendForm = document.querySelector("form");
  SendForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return (
    <>
      <div className="contact flex flex-row justify-end items-center w-full bg-neutral-100">
        <div
          className="info w-full"
          style={{
            // display: "flex",
            justifyContent: " center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: " center",
              alignItems: "flex-start",
              gap: "2rem",
              padding: "60px 48px",
              height: "300px",
              minWidth: "500px",
              borderTop: "5px solid var(--orange, #EF7F1A)",
              background: "#FFF",
              width: "30%",
              fontSize: "20px",
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
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              gap: "3rem",
              alignItems: "center",
              padding: "2rem 0",
            }}
            className="s_links"
          >
            <article
              className="social_btn btn bg-white p-2 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#" style={{ color: "#324291", fontSize: "24px" }}>
                <TbBrandTelegram />
              </a>
            </article>
            <article
              className="social_btn btn bg-white p-2 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#" style={{ color: "#324291", fontSize: "24px" }}>
                <TbBrandInstagram />
              </a>
            </article>
            <article
              className="social_btn btn bg-white p-2 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#" style={{ color: "#324291", fontSize: "24px" }}>
                <TbBrandFacebook />
              </a>
            </article>
          </div>
        </div>
        <div className="form_data flex flex-col text-white justify-center align-middle items-center m-auto py-24">
          <Typography
            variant="h4"
            component="h2"
            className="font-semibold text-sm "
          >
            Связаться с нами
          </Typography>

          {/*  */}

          <form action="" id="form">
            <Box
              component="form"
              noValidate
              autoComplete="on"
              className="flex flex-col justify-end items-end forma"
            >
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ваше имя"
                />
                <label htmlFor="text-1542372332072">Ваше имя</label>
                {/* <div className="req-mark">!</div> */}
              </div>
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ваш номер телефона"
                />
                <label htmlFor="text-1542372332072">Ваш номер телефона</label>
                {/* <div className="req-mark">!</div> */}
              </div>
              {/* <TextField id="outlined-basic" label="Familya" variant="outlined" /> */}
              <div className="textarea-group">
                <textarea
                  placeholder="Введите сообщение"
                  rows="3"
                  name="comment[text]"
                  id="comment_text"
                  cols="10"
                  className="ui-autocomplete-input"
                  // autocomplete="off"
                  // role="textbox"
                  // aria-autocomplete="list"
                  // aria-haspopup="true"
                ></textarea>
              </div>
              <Button
                variant="contained"
                className="send_btn"
                style={{ backgroundColor: "#EF7F1A" }}
              >
                ОТПРАВИТЬ
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
