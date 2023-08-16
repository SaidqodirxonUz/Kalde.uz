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
import newsimg from "../../assets/product_img.jpg";
import product from "../../assets/product_img.jpg";
import { TbCalendarEvent } from "react-icons/tb";

const News_info = () => {
  return (
    <>
      <Navbar />
      <section className="news py-36 w-8/12 mx-auto">
        <div className="flex flex-col justify-evenly">
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
            Что такое фитинг? Все, что вам нужно знать о подгонке
          </Typography>
          <div className="flex flex-row justify-start items-center py-6">
            <MdOutlineWatchLater />
            <Typography variant="p" component="p">
              E’lon joylandi: 27-mart, 2023
            </Typography>
          </div>
          <img src={newsimg} alt="news img" className="rounded-md" />
          <Typography variant="p" component="p" className="py-8">
            Фитинг (от англ. fitting «подгонка, установка, сборка») —
            соединительная часть трубопровода, разветвление, поворот, переход на
            другой диаметр, а также частый монтаж и демонтаж труб, при
            необходимости установочный. Также фитинги служат для герметизации
            трубопровода и других вспомогательных целей.
          </Typography>
          <Typography variant="p" component="p">
            Фитинги для металлопластиковых труб имеют такое же назначение, как и
            фитинги для металлических труб. Для соединения их с трубами
            используется цанговое соединение. Также они могут переходить от
            цангового к резьбовому соединению для соединения металлопластиковых
            труб и металлических труб. Одним из самых надежных соединений
            металлопластиковых труб является пресс-соединение (пресс-фитинговое
            соединение). Это достигается за счет обжатия металлопластиковой
            трубы вокруг фитинга втулкой из нержавеющей стали. Каждый
            производитель пресс-инструментов имеет свой профиль обжима. Обжимной
            инструмент – это либо сторонний пресс-инструмент с обжимными
            зажимами определенного внутреннего профиля, рекомендованного
            производителем пресс-фитинга (что правильно), либо подходящий к
            фитингу. Наиболее популярными после пресс-фитингами являются фитинги
            с разрезным кольцом или компрессионные фитинги, предназначенные для
            соединения металлопластиковых труб систем отопления и водоснабжения
            с открытыми проводами. В работе используются соединительные элементы
            диаметром 16, 20, 26, 32 мм. Эта система является исправной и не
            может использоваться со скрытой проводкой. Для систем с прессовой
            посадкой требуется специальный инструмент, а для компрессионных
            фитингов требуются разводные ключи.
          </Typography>
        </div>
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
                <div
                  className="card basis-96 rounded-xl"
                  style={{
                    flexGrow: "1",
                    // width: "1000px",

                    height: "450px",
                    padding: "0 1rem",
                  }}
                >
                  <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product}
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
                          Появится краткий текст о новостях. Текст будет
                          состоять примерно из 4 строк. И этот текст может
                          состоять почти из 100 букв. опять не знаю
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div
                  className="card basis-96 rounded-xl"
                  style={{
                    flexGrow: "1",

                    height: "450px",
                    padding: "0 0.7rem",
                  }}
                >
                  <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product}
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
                          Появится краткий текст о новостях. Текст будет
                          состоять примерно из 4 строк. И этот текст может
                          состоять почти из 100 букв. опять не знаю
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div
                  className="card basis-96 rounded-xl"
                  style={{
                    flexGrow: "1",

                    height: "450px",
                    padding: "0 0.7rem",
                  }}
                >
                  <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product}
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
                          Появится краткий текст о новостях. Текст будет
                          состоять примерно из 4 строк. И этот текст может
                          состоять почти из 100 букв. опять не знаю
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
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
