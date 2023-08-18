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
    { name: "Главная", url: "/" },
    { name: "O нас", url: "/about-us" },
    { name: "Преимущества", url: "/advantages" },
    { name: "Каталог", url: "/catalog" },
    { name: "Новости", url: "/news" },
    { name: "Контакт", url: "/contact" },
  ];

  return (
    <div className="f_container ">
      <div className="footer">
        <Box className="footer_inc">
          <img src={footer_img} alt="logo" />
          <p className="text-white py-4 max-w-sm w-72">
            KALDE, для систем отопления и водоснабжения, высококачественные
            полипропиленовые трубы и фитинги!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              gap: "2rem",
              alignItems: "center",
              padding: "2rem 0",
              color: "white",
            }}
            className="s_links"
          >
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="https://t.me/kalde_official">
                <TbBrandTelegram />
              </a>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="https://instagram.com/kalde_official?igshid=MzRlODBiNWFlZA==">
                <TbBrandInstagram />
              </a>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <a href="https://www.facebook.com/profile.php?id=100095458455938&mibextid=ZbWKwL">
                <TbBrandFacebook />
              </a>
            </article>
          </div>
        </Box>
        <Box className="usefull_pages">
          <p className="footer-sections">Полезные страницы</p>
          <ul>
            {pages.map((page, index) => (
              <li style={{ color: "#fff !important" }} key={index}>
                <a
                  href={page.url}
                  style={{ textAlign: "center" }}
                  className="pages text-white active:text-yellow-300"
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="contact_us text-white ">
          <p className="footer-sections pb-12">Связаться с нами</p>
          <ul>
            <li>
              <a
                href="tel:+998900152533"
                style={{ textAlign: "center" }}
                className=" text-white active:text-orange-500 items"
              >
                <BsTelephoneFill className="icons text-xl text-orange-500" />
                +99890 0152533
              </a>
            </li>
            <li>
              <a
                href="tel:+99890 0352533"
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 items"
              >
                <BsTelephoneFill className="icons text-xl text-orange-500" />
                +99890 0352533
              </a>
            </li>
            <li>
              <a
                href="mailto:kaldeuz@mail.ru"
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 items"
              >
                <MdEmail className="icons text-xl text-orange-500" />{" "}
                kaldeuz@mail.ru
              </a>
            </li>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 flex flex-row items-center justify-center"
              >
                <MdLocationOn className="icons text-5xl text-orange-500" /> г.
                Ташкент, Олмазор тумани, ул. Широк, 2 (Ориентир - строительный
                рынок Чукурсай)
              </p>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
