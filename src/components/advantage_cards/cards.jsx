/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react'
import AboutUsHeroImg from "../../assets/about_us_hero.png";

import { Box, Typography } from "@mui/material";

import { FiArrowUpRight } from "react-icons/fi";

import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  width: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Advantage_cards = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // import { useTranslation } from "react-i18next";

  // const Advantage_cards = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 md:py-0">
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={style}
            className=" contact_card p-10 bg-white rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]"
          >
            <button
              onClick={handleClose}
              className="w-full flex flex-row justify-end"
            >
              <MdOutlineCancel className="text-xl" />
            </button>
            <h5
              className="filial_name"
              style={{
                fontSize: "24px",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              Связаться с нами
            </h5>
            <Box
              component="form"
              noValidate
              autoComplete="on"
              className="flex flex-col justify-center gap-5  forma"
              onSubmit={(e) => {
                e.preventDefault();
                let data = JSON.stringify({
                  name: name,
                  phone: phone,
                  message: message,
                });

                let config = {
                  method: "post",
                  maxBodyLength: Infinity,
                  url: "https://kalde.victoriaslove.uz/send",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: data,
                };

                axios
                  .request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              // style={{ maxWidth: "80%" }}
            >
              <div className="bg_input" style={{ width: "100%" }}>
                <label className="custom-field two" style={{ width: "100%" }}>
                  <input
                    type="url"
                    placeholder="&nbsp;"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <span className="placeholder">Ваше имя</span>
                </label>
              </div>
              <div className="bg_input" style={{ width: "100%" }}>
                <label className="custom-field two" style={{ width: "100%" }}>
                  <input
                    type="url"
                    placeholder="&nbsp;"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <span className="placeholder">Ваш номер телефона</span>
                </label>
              </div>

              <div className="bg_input" style={{ width: "100%" }}>
                <textarea
                  placeholder="Введите сообщение"
                  rows="3"
                  name="comment[text]"
                  id="comment_text"
                  cols="10"
                  className="ui-autocomplete-input p-5"
                  style={{ color: "#000", resize: "none", width: "100%" }}
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
                style={{ backgroundColor: "#EF7F1A", width: "100%" }}
                onClick={async (e) => {
                  e.preventDefault();
                  let data = JSON.stringify({
                    name: name,
                    phone: phone,
                    message: message,
                  });

                  let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: "https://kalde.victoriaslove.uz/send",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: data,
                  };

                  // axios.post("/send", data);
                  axios
                    .request(config)
                    .then((response) => {
                      console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                ОТПРАВИТЬ
              </Button>
            </Box>
          </div>
        </Modal>
      </div>

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
              onClick={handleOpen}
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
              onClick={handleOpen}
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
              onClick={handleOpen}
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
              onClick={handleOpen}
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
    </div>
  );
};

export default Advantage_cards;
