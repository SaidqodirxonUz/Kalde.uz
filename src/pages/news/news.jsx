import Navbar from "../../components/navbar/navbar";
// import { FiArrowUpRight } from "react-icons/fi";
// import tavar from "../../assets/tavar.png";
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
import { TbCalendarEvent } from "react-icons/tb";

import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  // const hendleBack = function (id) {
  //   navigate(`/news/${id}`);
  // };
  //api

  async function getNews() {
    try {
      let { data } = await axios.get("/news");
      console.log(data, "news");
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNews();
  }, []);
  const TextComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "..."; // Truncate text and add ellipsis
    }

    return text;
  };
  console.log(news, "data");
  return (
    <main className="">
      <Navbar />

      <div className="news_area pt-40">
        <div className="news_cards flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 pb-24">
          {news.map((news) => {
            return (
              <div
                className="news_card "
                onClick={() => {
                  navigate(`/news/${news.id}`);
                }}
                key={news.id}
              >
                <Card sx={{ maxWidth: 345, width: "100%", height: "400px" }}>
                  <CardActionArea>
                    <CardMedia
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        objectPosition: "center",
                        minWidth: "300px",
                        maxWidth: "100%",
                      }}
                      component="img"
                      height="140"
                      image={news.image_url}
                      alt="green iguana"
                    />
                    <div className="flex flex-row justify-start items-center px-6">
                      <TbCalendarEvent />
                      <CardHeader
                        className=""
                        subheader={new Date().toLocaleDateString()}
                      ></CardHeader>
                    </div>
                    <CardContent sx={{ padding: "1rem" }}>
                      <Typography
                        // className="card_title"
                        gutterBottom
                        className="card_title"
                        variant="h6"
                        component="p"
                      >
                        {news.title_uz}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {TextComponent({ text: news.desc_uz, maxLength: 100 })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
};

export default News;
