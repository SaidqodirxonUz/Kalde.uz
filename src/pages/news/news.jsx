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
import blogImg from "../../assets/blog.png";

const News = () => {
  return (
    <main className="">
      <Navbar />

      <div className="news_area pt-40">
        <div className="news_cards flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 pb-24">
          <div className="news_card ">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    // className="card_title"
                    gutterBottom
                    className="card_title"
                    variant="h6"
                    component="p"
                  >
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="news_card">
            <Card sx={{ maxWidth: 345, padding: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogImg}
                  alt="green iguana"
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
                    Название новости находится в этом разделе
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Появится краткий текст о новостях. Текст будет состоять
                    примерно из 4 строк. И этот текст может состоять почти из
                    100 букв. опять не знаю
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
};

export default News;
