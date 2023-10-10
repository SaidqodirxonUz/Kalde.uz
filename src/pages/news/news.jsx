/* eslint-disable no-unused-vars */
import Navbar from "../../components/navbar/navbar";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import { TbCalendarEvent } from "react-icons/tb";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n/i18n";
import { toast } from "react-toastify";
import { AiFillFilePdf, AiOutlineDownload } from "react-icons/ai";

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const LangVal = () => {
    return i18n.language;
  };

  async function getNews() {
    try {
      const { data } = await axios.get("/news");
      setNews(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  console.log(getNews());

  const TextComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "...";
    }

    return text;
  };

  const DateComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "";
    }
    text = text.replaceAll("-", "/");

    return text;
  };

  return (
    <>
      <div className="bg_img">
        <Navbar />

        <section className="news py-36 w-8/12 mx-auto pt-40 pb-24">
          {news.map((el) => {
            return (
              <>
                <div className="border border-1 border-cyan-600 p-5">
                  <div
                    className="price-div flex flex-col lg:flex-row justify-between items-center "
                    key={el.id}
                  >
                    <div className="flex items-center">
                      <AiFillFilePdf
                        style={{ fontSize: "32px", marginRight: "1rem" }}
                      />
                      <Typography
                        variant="h4"
                        component="h5"
                        style={{
                          color: "#324291",
                          fontFamily: "Okta Neue",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                        }}
                      >
                        {LangVal() == "uz"
                          ? el.title_uz
                          : LangVal() == "en"
                          ? el.title_en
                          : el.title_ru}
                      </Typography>
                    </div>
                    <div className="download-btn">
                      <Button
                        variant="contained"
                        href={el.image_url}
                        target="_blank"
                        className="download"
                      >
                        <AiOutlineDownload style={{ fontSize: "32px" }} />
                      </Button>
                      {/* <Button
                        variant="contained"
                        href={el.image_url}
                        target="_blank"
                        className="see"
                      >
                        <AiOutlineSearch style={{ fontSize: "32px" }} />
                      </Button> */}
                    </div>
                  </div>
                  <span className="">
                    <Typography
                      variant="p"
                      component="p"
                      className="pt-1 more_text"
                    >
                      {LangVal() == "uz"
                        ? el.desc_uz
                        : LangVal() == "en"
                        ? el.desc_en
                        : el.desc_ru}
                    </Typography>
                  </span>
                </div>
              </>
            );
          })}
        </section>

        <Contact className="Contact" />
        <Footer />
      </div>
    </>
  );
};

export default News;
