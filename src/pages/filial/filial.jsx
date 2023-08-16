import { List, ListItemText, Typography } from "@mui/material";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import product from "../../assets/product_img.jpg";
import { TbCalendarEvent } from "react-icons/tb";

const Filial = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Hero Area Start --> */}
      <div className="hero-area pt-40 pb-20">
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            fontFamily: "Okta Neue",
            lineHeight: "70px",
            paddingBottom: "3rem",
            background:
              "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Наши филиалы
        </Typography>
        <section className="filials flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row w-72 sm:w-max justify-start lg:w-10/12 p-8 mx-auto gap-6 rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]">
            <img
              src={product}
              alt="filial img"
              style={{
                borderRadius: "18px",
                height: "265px",
              }}
              className="w-96"
            />
            <div className="f_info">
              <h5
                style={{
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontFamily: "Okta Neue",
                  lineHeight: "normal",
                  background:
                    "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  //   textAlign: "center",
                  paddingBottom: "2rem",
                }}
              >
                Ташкентский филиал
              </h5>
              <List>
                <ListItemText>
                  <p
                    // style={{ textAlign: "center" }}
                    className="pages text-black active:text-orange-500 flex flex-row "
                  >
                    <MdLocationOn className="icons text-2xl text-orange-500" />{" "}
                    г. Ташкент, Олмазор тумани, ул. Широк, 2
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
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Filial;
