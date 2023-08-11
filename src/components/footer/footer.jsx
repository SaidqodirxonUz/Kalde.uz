import { Box } from "@mui/material";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

import footer_img from "../../assets/navbar_img.png";
import "./footer.scss";

const Footer = () => {
  const pages = [
    "Главная",
    "O нас",
    "Преимущества",
    "Каталог",
    "Новости",
    "Контакт",
  ];

  return (
    <div className="f_container">
      <div className="footer">
        <Box className="footer_inc">
          <img src={footer_img} alt="logo" />
          <p style={{ maxWidth: "300px" }}>
            KALDE, для систем отопления и водоснабжения, высококачественные
            полипропиленовые трубы и фитинги!
          </p>
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
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#">
                <TbBrandTelegram />
              </a>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#">
                <TbBrandInstagram />
              </a>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="#">
                <TbBrandFacebook />
              </a>
            </article>
          </div>
        </Box>
        <Box className="usefull_pages">
          <p>Полезные страницы</p>
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <p
                  style={{ textAlign: "center" }}
                  className="pages text-neutral-950 active:text-yellow-300"
                >
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="contact_us">
          <p>Связаться с нами</p>
          <ul>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-neutral-950 active:text-yellow-300"
              >
                <BsTelephoneFill /> +998 93 908 70 85
              </p>
            </li>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-neutral-950 active:text-yellow-300"
              >
                <BsTelephoneFill /> +998 93 908 70 85
              </p>
            </li>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-neutral-950 active:text-yellow-300"
              >
                <MdEmail /> info@kalde.uz
              </p>
            </li>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-neutral-950 active:text-yellow-300"
              >
                <MdLocationOn /> г. Ташкент, Олмазор тумани, ул. Широк, 2
                (Ориентир - строительный рынок Чукурсай)
              </p>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
