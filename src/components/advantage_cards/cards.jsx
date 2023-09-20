/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react'
// import AboutUsHeroImg from "../../assets/about_us_hero.png";

import adventages_1_1 from "../../assets/images/adventages_1_1.jpg";
import adventages_1_2 from "../../assets/images/adventages_1_2.jpg";
import adventages_1_3 from "../../assets/images/adventages_1_3.jpg";
import adventages_1_4 from "../../assets/images/adventages_1_4.jpg";
import adventages_1_5 from "../../assets/images/adventages_1_5.jpg";
import adventages_1_6 from "../../assets/images/adventages_1_6.jpg";
import adventages_1_8 from "../../assets/images/adventages_1_8.jpg";
import adventages_1_7 from "../../assets/images/adventages_1_7.jpg";

import { Box, Typography } from "@mui/material";

import { FiArrowUpRight } from "react-icons/fi";

import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdOutlineCancel } from "react-icons/md";

import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";
import "./cards.scss";
// import { toast } from "react-toastify";

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
            className=" contact_card p-10 rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]"
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
              {t("advantages_1_9")}
            </h5>
            <Box
              component="form"
              noValidate
              autoComplete="on"
              className="flex flex-col justify-center gap-5  forma"

              // style={{ maxWidth: "80%" }}
            >
              <div className="bg_input">
                <label className="custom-field two">
                  <input
                    type="url"
                    placeholder="&nbsp;"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <span className="placeholder">{t("application_1_3")}</span>
                </label>
              </div>
              <div className="bg_input">
                <label className="custom-field two">
                  <input
                    type="url"
                    placeholder="&nbsp;"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <span className="placeholder">{t("application_1_4")}</span>
                </label>
              </div>

              <div className="bg_input">
                <textarea
                  placeholder={t("application_1_5")}
                  rows="3"
                  name="comment[text]"
                  id="comment_text"
                  cols="10"
                  className="ui-autocomplete-input p-5"
                  style={{ color: "#000", resize: "none", width: "100%" }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
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
                    url: "/send",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: data,
                  };

                  // axios.post("/send", data);
                  axios
                    .request(config)
                    .then((response) => {
                      console.log(JSON.stringify(response));
                      if (response.status == 200) {
                        // alert("Muvaffaqiyatli jonatildi");
                        toast(t("sent_message_succues"), { type: "success" });
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      // alert("Xatolik yuz berdi");
                      if (error.request.status == 400) {
                        // alert("Barcha maydonlarni toldiring");
                        toast(t("sent_message_fail"), { type: "success" });
                      }
                      if (error.request.status == 403) {
                        // alert("Raqam notogri");
                        toast(t("sent_message_error"), { type: "success" });
                      }
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
          <div className="texts" style={{ marginTop: "1rem" }}>
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

            {/* ))} */}
            <Button className="modalBtn" style={{}} onClick={handleOpen}>
              {t("advantages_1_9")}
              <FiArrowUpRight />
            </Button>
          </div>
          <div className="img">
            <img src={adventages_1_1} alt="a" />
          </div>
        </div>
        <div
          className="advantage hero-noreverse"
          style={{
            // flexDirection: "row-reverse",
            marginTop: "5rem",
          }}
        >
          <div className="img">
            <img src={adventages_1_2} alt="a" />
          </div>
          <div className="texts" style={{ marginTop: "1rem" }}>
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
            <Button onClick={handleOpen} className="modalBtn" style={{}}>
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
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_3")}
            </Typography>
            {/* ))} */}
            <Button onClick={handleOpen} className="modalBtn" style={{}}>
              {t("advantages_1_9")}
              <FiArrowUpRight />
            </Button>
          </div>
          <div className="img">
            <img src={adventages_1_7} alt="a" />
          </div>
        </div>
        <div
          className="advantage hero-noreverse"
          style={{
            // flexDirection: "row-reverse",
            marginTop: "5rem",
          }}
        >
          <div className="img">
            <img src={adventages_1_3} alt="a" />
          </div>
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_4")}
            </Typography>
            {/* ))} */}
            <Button onClick={handleOpen} className="modalBtn" style={{}}>
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
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_5")}
            </Typography>
            {/* ))} */}
            <Button className="modalBtn" style={{}} onClick={handleOpen}>
              {t("advantages_1_9")}
              <FiArrowUpRight />
            </Button>
          </div>
          <div className="img">
            <img src={adventages_1_5} alt="a" />
          </div>
        </div>
        <div
          className="advantage hero-noreverse"
          style={{
            // flexDirection: "row-reverse",
            marginTop: "5rem",
          }}
        >
          <div className="img">
            <img src={adventages_1_6} alt="a" />
          </div>
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_6")}
            </Typography>
            {/* ))} */}
            <Button onClick={handleOpen} className="modalBtn">
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
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_7")}
            </Typography>

            {/* ))} */}
            <Button onClick={handleOpen} className="modalBtn" style={{}}>
              {t("advantages_1_9")}
              <FiArrowUpRight />
            </Button>
          </div>
          <div className="img">
            <img src={adventages_1_8} alt="a" />
          </div>
        </div>
        <div
          className="advantage hero-noreverse pb-20"
          style={{
            // flexDirection: "row-reverse",

            marginTop: "5rem",
          }}
        >
          <div className="img">
            <img src={adventages_1_4} alt="a" />
          </div>
          <div className="texts" style={{ marginTop: "1rem" }}>
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
              {t("advantages_1_8")}
            </Typography>

            {/* ))} */}
            <Button onClick={handleOpen} className="modalBtn" style={{}}>
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
