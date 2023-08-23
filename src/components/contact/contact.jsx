import { Box, Button, Typography } from "@mui/material";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";
import "./style.scss";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18n from "../../i18n/i18n";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  // const LangVal = () => {
  //   return i18n.language;
  // };
  // const Contact = () => {
  const { t } = useTranslation();
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
            <Typography>{t("application_1_1")}</Typography>
            <Typography>{t("application_1_2")}</Typography>
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
              <Link
                to="https://t.me/kalde_official"
                style={{ color: "#324291", fontSize: "24px" }}
              >
                <TbBrandTelegram />
              </Link>
            </article>
            <article
              className="social_btn btn bg-white p-2 "
              style={{
                borderRadius: "8px",
              }}
            >
              <Link
                to="https://instagram.com/kalde_official?igshid=MzRlODBiNWFlZA=="
                style={{ color: "#324291", fontSize: "24px" }}
              >
                <TbBrandInstagram />
              </Link>
            </article>
            <article
              className="social_btn btn bg-white p-2 "
              style={{
                borderRadius: "8px",
              }}
            >
              <Link
                to="https://www.facebook.com/profile.php?id=100095458455938&mibextid=ZbWKwL"
                style={{ color: "#324291", fontSize: "24px" }}
              >
                <TbBrandFacebook />
              </Link>
            </article>
          </div>
        </div>
        <div className="form_data flex flex-col text-white justify-center align-middle items-center m-auto py-24">
          <Typography
            variant="h4"
            component="h2"
            className="font-semibold text-sm "
          >
            {t("footer_1_3")}
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="on"
            className="flex flex-col w-full lg:w-96 justify-center items-end forma"
          >
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Ваше имя"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="text-1542372332072">{t("application_1_3")}</label>
              {/* <div className="req-mark">!</div> */}
            </div>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Ваш номер телефона"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label htmlFor="text-1542372332072">{t("application_1_4")}</label>
              {/* <div className="req-mark">!</div> */}
            </div>
            {/* <TextField id="outlined-basic" label="Familya" variant="outlined" /> */}
            <div className="textarea-group">
              <textarea
                placeholder={t("application_1_5")}
                rows="3"
                name="comment[text]"
                id="comment_text"
                cols="10"
                className="ui-autocomplete-input"
                style={{ color: "#fff" }}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
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
              onClick={(e) => {
                e.preventDefault();

                let data = JSON.stringify({
                  name: name,
                  phone: phone,
                  message: message,
                });

                let config = {
                  method: "post",
                  maxBodyLength: Infinity,
                  url: "/send",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: data,
                };

                axios
                  .request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response));

                    if (response.status == 200) {
                      toast(t("sent_message_succues"), { type: "success" });
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    // alert("Xatolik yuz berdi");
                    if (error.request.status == 400) {
                      toast(t("sent_message_fail"), { type: "error" });
                    }
                    if (error.request.status == 403) {
                      toast(t("sent_message_error"), { type: "info" });
                    }
                  });
              }}
            >
              {t("application_1_6")}
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Contact;
