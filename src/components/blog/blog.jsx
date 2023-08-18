/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardHeader, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
// import { FiArrowUpRight } from "react-icons/fi";
// import blogImg from "../../assets/blog.png";

import "./index.scss";
import * as React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";

let data = new FormData();

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://kalde.victoriaslove.uz/news",
  headers: {
    "Content-Type": "application/json",

    ...data,
  },
  data: data,
};

const Blog = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  async function getData() {
    try {
      const { data } = await axios.get("/news", config);
      setData(data);
      console.log(data, "mana bu");
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);
  const TextComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "..."; // Truncate text and add ellipsis
    }

    return text;
  };
  const DateComponent = ({ text, maxLength }) => {
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + ""; // Truncate text and add ellipsis
    }
    text = text.replaceAll("-", "/");

    return text;
  };
  console.log(data);
  return (
    <div className="products_container" style={{ padding: "2rem 0 2rem 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          style={{
            fontFamily: "Okta Neue",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            background:
              "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Blog yangiliklar
        </Typography>
        <a
          style={{
            // display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "2rem 0",
            width: "200px",
            height: "30px",
            padding: "20px 24px",
            color: "rgba(239, 127, 26, 1)",
            border: "1px solid rgba(239, 127, 26, 1)",
            borderRadius: "100px",
          }}
          className="more hidden lg:flex"
          href="/news"
        >
          Barcha yangiliklar <FiArrowUpRight />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      ></div>
      <div className="blog">
        <div className="blog_container">
          <div className="outer">
            <main className="flex-container" id="flex-container">
              {data.map((item) => {
                return (
                  <div
                    className="card"
                    key={item.id}
                    onClick={() => {
                      navigate(`/news/${item.id}`);
                    }}
                  >
                    <Card sx={{ maxWidth: 345, height: 400 }}>
                      <CardActionArea className="flex flex-col ">
                        <CardMedia
                          style={{ height: "200px", objectFit: "cover" }}
                          component="img"
                          image={item.image_url}
                          alt="news img"
                        />
                        <div className="flex flex-row justify-start items-center px-6">
                          <TbCalendarEvent />
                          <CardHeader
                            className=""
                            // subheader={new Date().toLocaleDateString()}
                            subheader={DateComponent({
                              text: item.created_at,
                              maxLength: 10,
                            })}
                          ></CardHeader>
                        </div>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className="card_title"
                            variant="h6"
                            component="p"
                          >
                            {item.title_uz}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className=""
                          >
                            {TextComponent({
                              text: item.desc_uz,
                              maxLength: 100,
                            })}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      </div>
      <a
        style={{
          // display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // margin: "2rem 0",
          width: "200px",
          height: "30px",
          padding: "20px 24px",
          color: "rgba(239, 127, 26, 1)",
          border: "1px solid rgba(239, 127, 26, 1)",
          borderRadius: "100px",
        }}
        className="more flex lg:hidden my-2rem mx-auto"
        href="#"
      >
        Barcha yangiliklar <FiArrowUpRight />
      </a>
    </div>
  );
};

export default Blog;
