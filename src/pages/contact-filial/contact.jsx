import { Box, Button, List, ListItemText } from "@mui/material";
// import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
// import product from "../../assets/product_img.jpg";

import { TbCalendarEvent } from "react-icons/tb";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18n from "../../i18n/i18n";

const Contact_filial = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [filial, setFilial] = useState([]);
  let location = "";
  const navigate = useNavigate();
  useEffect(() => {
    async function getFilials() {
      try {
        let { data } = await axios.get(`/dealers/${id}`);
        console.log([data.data], "data");
        setFilial([data.data]);
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
    }
    getFilials();
  }, [id]);
  const LangVal = () => {
    return i18n.language;
  };
  console.log(filial, "state");

  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      {/* <!-- Hero Area Start --> */}
      <div className="hero-area pt-40 md:pt-20 lg:pt-10">
        <section className="Contacts w-9/12 mx-auto flex flex-col justify-between md:flex-row gap-10">
          {filial.map((f) => {
            {
              location = f.location;
            }
            return (
              <div className="f_info" key={f.id}>
                <h5 className="filial_name">
                  {LangVal() == "uz"
                    ? f.title_uz
                    : LangVal() == "en"
                    ? f.title_en
                    : f.title_ru}
                </h5>

                <List>
                  <ListItemText>
                    <p
                      // style={{ textAlign: "center" }}
                      className="pages text-black active:text-orange-500 flex flex-row "
                    >
                      <MdLocationOn className="icons text-2xl text-orange-500" />{" "}
                      {t("firyal_1_1")} {f.adress}
                    </p>
                  </ListItemText>
                  <ListItemText>
                    <p className="flex flex-row text-black ">
                      <TbCalendarEvent className="icons text-2xl text-orange-500" />
                      {t("firyal_1_3")} {f.work_at}
                    </p>
                  </ListItemText>
                  <ListItemText>
                    <a
                      href={`tel:${f.phone_number}`}
                      // style={{ textAlign: "center" }}
                      className="pages flex flex-row text-black active:text-orange-500 items"
                    >
                      <BsTelephoneFill className="icons text-xl text-orange-500" />
                      {t("firyal_1_4")} {f.phone_number}
                    </a>
                  </ListItemText>
                  <ListItemText>
                    <a
                      href={`mailto:${f.email}`}
                      // style={{ textAlign: "center" }}
                      className="pages flex flex-row text-black active:text-orange-500 items"
                    >
                      <MdEmail className="icons text-xl text-orange-500" />{" "}
                      {t("firyal_1_5")} {f.email}
                    </a>
                  </ListItemText>
                </List>
              </div>
            );
          })}
          <div
            style={{ maxWidth: "400px" }}
            className="w-full contact_card p-10 bg-white rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]"
          >
            <h5
              className="filial_name"
              style={{
                fontSize: "24px",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
            >
              {t("application_1_2")}
            </h5>
            <Box
              component="form"
              noValidate
              autoComplete="on"
              className="flex flex-col justify-center gap-5  forma"
              // onSubmit={() => {
              //   setName("");
              //   setPhone("");
              //   setName("");
              // }}
            >
              <div className="bg_input">
                <label className="custom-field two">
                  <input
                    value={name}
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
                    value={phone}
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
                  value={message}
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
                type="submit"
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
                      console.log(JSON.stringify(response.data));
                      if (response.status == 200) {
                        toast(
                          LangVal() == "uz"
                            ? response.data.message
                            : LangVal() == "en"
                            ? response.data.message
                            : response.data.message,
                          { type: "success" }
                        );
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      if (error.request.status == 400) {
                        toast(
                          LangVal() == "uz"
                            ? error.response.data[0].error_uz
                            : LangVal() == "en"
                            ? error.response.data[2].error_en
                            : error.response.data[1].error_ru,
                          { type: "error" }
                        );
                      }
                      if (error.request.status == 403) {
                        toast(
                          LangVal() == "uz"
                            ? error.response.data[0].error_uz
                            : LangVal() == "en"
                            ? error.response.data[2].error_en
                            : error.response.data[1].error_ru,
                          { type: "info" }
                        );
                      }
                    });
                  setName("");
                  setPhone("");
                  setMessage("");
                }}
              >
                {t("application_1_6")}
              </Button>
            </Box>
          </div>
        </section>
      </div>
      {/* <Contact /> */}
      <section className="location">
        {/* {filial.map((l) => { */}
        {/* return ( */}
        <div style={{ width: "" }}>
          <iframe
            width="100%"
            height="600"
            // frameborder="0"
            // scrolling="no"
            // marginheight="0"
            // marginwidth="0"
            src={`${location}`}
          >
            {console.log(location)}
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
        {/* );
        })} */}
      </section>
      <Footer />
    </>
  );
};

export default Contact_filial;
