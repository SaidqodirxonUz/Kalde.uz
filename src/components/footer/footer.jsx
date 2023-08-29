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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const pages = [
    { name: t("navbar_main_link"), url: "/" },
    { name: t("navbar_about_link"), url: "/about-us" },
    { name: t("navbar_adventages_link"), url: "/advantages" },
    { name: t("navbar_catalog_link"), url: "/catalog" },
    { name: t("navbar_news_link"), url: "/news" },
    { name: t("navbar_contact_link"), url: "/contact" },
  ];

  return (
    <div className="f_container ">
      <div className="footer">
        <Box className="footer_inc">
          <img src={footer_img} alt="logo" />
          <p className="text-white py-4 max-w-sm w-72">{t("footer_1_1")}</p>
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
              <Link
                to="https://t.me/kalde_official"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandTelegram />
              </Link>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <Link
                to="https://instagram.com/kalde_official?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandInstagram />
              </Link>
            </article>
            <article
              className="social_btn btn bg-orange-500 p-3 "
              style={{
                borderRadius: "8px",
              }}
            >
              <Link
                to="https://www.facebook.com/profile.php?id=100095458455938&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandFacebook />
              </Link>
            </article>
          </div>
        </Box>
        <Box className="usefull_pages">
          <p className="footer-sections pb-12">{t("footer_1_2")}</p>
          <ul>
            {pages.map((page, index) => (
              <li style={{ color: "#fff !important" }} key={index}>
                <Link
                  to={page.url}
                  style={{ textAlign: "center" }}
                  className="pages text-white active:text-yellow-300"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="contact_us text-white ">
          <p className="footer-sections pb-12">{t("footer_1_3")}</p>
          <ul>
            <li>
              <Link
                to="tel:+998900152533"
                style={{ textAlign: "center" }}
                className=" text-white active:text-orange-500 items"
              >
                <BsTelephoneFill className="icons text-xl text-orange-500" />
                +998(90) 015 25 33
              </Link>
            </li>
            <li>
              <Link
                to="tel:+998900352533"
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 items"
              >
                <BsTelephoneFill className="icons text-xl text-orange-500" />
                +998(90) 035 25 33
              </Link>
            </li>
            <li>
              <Link
                to="mailto:kaldeuz@mail.ru"
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 items"
              >
                <MdEmail className="icons text-xl text-orange-500" />{" "}
                kaldeuz@mail.ru
              </Link>
            </li>
            <li>
              <p
                style={{ textAlign: "center" }}
                className="pages text-white active:text-orange-500 flex flex-row items-center justify-center "
              >
                <MdLocationOn className="icons text-5xl text-orange-500" />
                {t("manzil_name")}
              </p>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
