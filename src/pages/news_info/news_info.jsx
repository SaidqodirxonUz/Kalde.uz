/* eslint-disable no-unused-vars */
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { MdOutlineWatchLater } from "react-icons/md";
// import product from "../../assets/product_img.jpg";
import { AiFillFilePdf, AiOutlineDownload } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import i18n from "../../i18n/i18n";
import { t } from "i18next";
import "./style.scss";

const News_info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [more, setMore] = useState([]);

  // const navigate = useNavigate();
  // const hendleBack = function (id) {
  //   navigate(`/news/${id}`);
  // };
  //api
  const LangVal = () => {
    return i18n.language;
  };

  async function getNews() {
    try {
      let { data } = await axios.get(`/news/${id}`);
      setNews([data.data]);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  }
  async function getMore() {
    try {
      let { data } = await axios.get(`/news`);
      setMore(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([getNews(), getMore()]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  console.log(getNews());

  const DateComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + ""; // Truncate text and add ellipsis
    }
    text = text.replaceAll("-", "/");

    return text;
  };
  const TextComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "..."; // Truncate text and add ellipsis
    }

    return text;
  };

  return (
    <>
      <div className="bg_img">
        <Navbar />
        <section className="news py-36 w-8/12 mx-auto ">
          {news.map((el) => {
            return (
              <div
                className="price-div flex flex-col justify-evenly border border-1 border-cyan-600 p-5"
                key={el.id}
              >
                <div className="flex">
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
                  <div className="download-btn">
                    <Button variant="contained" color="primary">
                      <AiOutlineDownload
                        className="download"
                        style={{ fontSize: "32px" }}
                      />
                    </Button>
                  </div>
                </div>
                {/* <div className="flex flex-row justify-start items-center py-6"></div> */}
                <Typography variant="p" component="p" className="pt-1">
                  {LangVal() == "uz"
                    ? el.desc_uz
                    : LangVal() == "en"
                    ? el.desc_en
                    : el.desc_ru}
                </Typography>
              </div>
            );
          })}
        </section>
        {/* <section className="same_news">
          <Typography
            style={{
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              lineHeight: "normal",
              background:
                "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              paddingBottom: "2rem",
            }}
            //   style={{ fontSize: "24px", fontWeight: "400" }}
          >
            {t("news_1_1")}
          </Typography>
          <div className="blog">
            <div className="blog_container">
              <div className="">
                <div
                  className="flex-container w-10/12 mx-auto"
                  id="flex-container"
                  // style={{ height: "50%" }}
                >
                  {more.map((el) => {
                    return (
                      <div
                        key={el.id}
                        onClick={() => {
                          navigate(`/news/${el.id}`);
                        }}
                        className="card basis-96 rounded-xl"
                        style={{
                          flexGrow: "1",
                          // width: "1000px",

                          height: "450px",
                          padding: "0 1rem",
                        }}
                      >
                        <Card sx={{ maxWidth: 320 }}>
                          <CardActionArea className="flex flex-col justify-between">
                            <CardMedia
                              component="img"
                              height="140"
                              image={el.image_url}
                              alt="news"
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="flex flex-row justify-start items-center px-6">
                              <TbCalendarEvent />
                              <CardHeader
                                className=""
                                subheader={new Date().toLocaleDateString()}
                              ></CardHeader>
                            </div>
                            <CardContent>
                              <Typography
                                gutterBottom
                                className="card_title"
                                variant="h6"
                                component="p"
                              >
                                {LangVal() == "uz"
                                  ? el.title_uz
                                  : LangVal() == "en"
                                  ? el.title_en
                                  : el.title_ru}
                              </Typography>
                              <Typography
                                height="70px"
                                variant="body2"
                                color="text.secondary"
                              >
                                {TextComponent({
                                  text:
                                    LangVal() == "uz"
                                      ? el.desc_uz
                                      : LangVal() == "en"
                                      ? el.desc_en
                                      : el.desc_ru,
                                  maxLength: 100,
                                })}
                                {}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default News_info;
