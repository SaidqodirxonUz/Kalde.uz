import { Box, Button, List, ListItemText } from "@mui/material";
// import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
// import product from "../../assets/product_img.jpg";

import { TbCalendarEvent } from "react-icons/tb";
import "./index.scss";
import { useTranslation } from "react-i18next";

const Contact_filial = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      {/* <!-- Hero Area Start --> */}
      <div className="hero-area pt-10">
        <section className="Contacts w-9/12 mx-auto flex flex-col justify-between md:flex-row gap-10">
          <div className="f_info">
            <h5 className="filial_name">Ташкентский филиал</h5>

            <List>
              <ListItemText>
                <p
                  // style={{ textAlign: "center" }}
                  className="pages text-black active:text-orange-500 flex flex-row "
                >
                  <MdLocationOn className="icons text-2xl text-orange-500" /> г.
                  Ташкент, Олмазор тумани, ул. Широк, 2
                </p>
              </ListItemText>
              <ListItemText>
                <p className="flex flex-row text-black ">
                  <TbCalendarEvent className="icons text-2xl text-orange-500" />
                  09:00 - 18:00, Du-Sha
                </p>
              </ListItemText>
              <ListItemText>
                <a
                  href="tel:998 93 908 70 85"
                  // style={{ textAlign: "center" }}
                  className="pages flex flex-row text-black active:text-orange-500 items"
                >
                  <BsTelephoneFill className="icons text-xl text-orange-500" />
                  +998 93 908 70 85
                </a>
              </ListItemText>
              <ListItemText>
                <a
                  href="mailto:info@kalde.uz"
                  // style={{ textAlign: "center" }}
                  className="pages flex flex-row text-black active:text-orange-500 items"
                >
                  <MdEmail className="icons text-xl text-orange-500" />{" "}
                  info@kalde.uz
                </a>
              </ListItemText>
            </List>
          </div>
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
              className="flex flex-col justify-center  forma"
            >
              <div className="pizdescha ">
                <input
                  className="form-control"
                  type="text"
                  placeholder={t("application_1_3")}
                />
                <label htmlFor="text-1542372332072">
                  {" "}
                  {t("application_1_3")}
                </label>
                {/* <div className="req-mark">!</div> */}
              </div>
              <div className="pizdescha">
                <input
                  className="form-control"
                  type="text"
                  placeholder={t("application_1_4")}
                />
                <label htmlFor="text-1542372332072">
                  {t("application_1_3")}
                </label>
                {/* <div className="req-mark">!</div> */}
              </div>
              {/* <TextField id="outlined-basic" label="Familya" variant="outlined" /> */}
              <div className="pizdes">
                <textarea
                  placeholder={t("application_1_5")}
                  rows="3"
                  name="comment[text]"
                  id="comment_text"
                  cols="10"
                  className="ui-autocomplete-input"
                  style={{ color: "#000" }} // autocomplete="off"
                  // role="textbox"
                  // aria-autocomplete="list"
                  // aria-haspopup="true"
                ></textarea>
              </div>
              <Button
                variant="contained"
                className="send_btn"
                style={{ backgroundColor: "#EF7F1A", width: "100%" }}
              >
                {t("application_1_6")}
              </Button>
            </Box>

            {/* <Button
                variant="contained"
                className="btn"
                style={{ backgroundColor: "#EF7F1A", width: "100%" }}
              >
                ОТПРАВИТЬ
              </Button>
            </Box> 
            */}
          </div>
        </section>
      </div>
      {/* <Contact /> */}
      <section className="location">
        <div style={{ width: "s" }}>
          <iframe
            width="100%"
            height="600"
            // frameborder="0"
            // scrolling="no"
            // marginheight="0"
            // marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=
            г.Ташкент, Юнусабадский район, Ц-5, проспект А. Темура, дом 43-2 alay bazar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact_filial;
