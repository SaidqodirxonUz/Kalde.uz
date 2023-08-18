import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { MdOutlineWatchLater } from "react-icons/md";
// import product from "../../assets/product_img.jpg";
import { TbCalendarEvent } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

  async function getNews() {
    try {
      let { data } = await axios.get(`/news/${id}`);
      console.log(data, "news");
      setNews([data.data]);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  }
  async function getMore() {
    try {
      let { data } = await axios.get(`/news`);
      console.log(data, "morelll");
      setMore(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNews();
    getMore();
  }, [id]);
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
  console.log(news, "state");
  console.log(more, "more");
  return (
    <>
      <Navbar />
      <section className="news py-36 w-8/12 mx-auto">
        {news.map((el) => {
          return (
            <div className="flex flex-col justify-evenly" key={el.id}>
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
                {el.title_uz}
              </Typography>
              <div className="flex flex-row justify-start items-center py-6">
                <MdOutlineWatchLater />
                <Typography variant="p" component="p">
                  {DateComponent({ text: el.created_at, maxLength: 10 })}
                </Typography>
              </div>
              <img
                src={el.image_url}
                alt="news img"
                className="rounded-md h-80 object-contain"
              />
              {/* <Typography variant="p" component="p" className="py-8">
                Фитинг (от англ. fitting «подгонка, установка, сборка») —
                соединительная часть трубопровода, разветвление, поворот,
                переход на другой диаметр, а также частый монтаж и демонтаж
                труб, при необходимости установочный. Также фитинги служат для
                герметизации трубопровода и других вспомогательных целей.
              </Typography> */}
              <Typography variant="p" component="p" className="pt-20">
                {el.desc_uz}
              </Typography>
            </div>
          );
        })}
      </section>
      <section className="same_news">
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
          Другие новости
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
                              {el.title_uz}
                            </Typography>
                            <Typography
                              height="70px"
                              variant="body2"
                              color="text.secondary"
                            >
                              {TextComponent({
                                text: el.desc_uz,
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
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default News_info;
