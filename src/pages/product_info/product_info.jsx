import Navbar from "../../components/navbar/navbar";
// import { FiArrowUpRight } from "react-icons/fi";
import tavar from "../../assets/tavar.png";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import "./style.scss";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
// import { TbCalendarEvent } from "react-icons/tb";

import product from "../../assets/product_img.jpg";

const Product_info = () => {
  return (
    <main className="flex flex-col gap-8">
      <Navbar />
      <div className="product_info ">
        <div className="img shadow-lg">
          <img src={tavar} alt="tavar" />
        </div>
        <div className="texts shadow-lg p-8 h">
          <Typography
            variant="h6"
            component="h5"
            style={{
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              lineHeight: "normal",
              background:
                "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Насадка для чистки Kalde-Mute с угловой крышкой
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Okta Neue",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140% /* 25.2px */",
            }}
          >
            KALDE - основана в 1977 году, расположена в Стамбуле, Турция,
            производит продукцию для современных систем отопления и
            водоснабжения. Сегодня продукция KALDE известна в 50 странах мира.
            Продукция KALDE, отвечающая мировым стандартам, известна в 40
            крупнейших странах мира. Вся продукция имеет международные
            сертификаты. На рынке Узбекистана продукция Kalde стала известна в
            2009 году. На сегодняшний день в Узбекистане продукцию Kalde можно
            купить более чем в 20 специализированных магазинах!
          </Typography>
        </div>
      </div>
      <div className="describe flex w-10/12 mx-auto h-auto lg:h-12 px-8 shadow-lg flex-row justify-start">
        <Typography className="p-2" variant="p" component="p">
          Если есть информация о продукте, она будет написана в этом разделе...
        </Typography>
      </div>
      <section className="same flex flex-col justify-center w-5/6 mx-auto">
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
          }}
          //   style={{ fontSize: "24px", fontWeight: "400" }}
        >
          Похожие продукты
        </Typography>
        <div className="blog">
          <div className="blog_container">
            <div className="h-96 p-0 py-8">
              <div
                className="flex-container"
                id="flex-container"
                // style={{ height: "50%" }}
              >
                <div
                  className="card"
                  style={{ flexGrow: "1", flexBasis: "400px" }}
                >
                  <Card
                    sx={{
                      width: 260,
                      //   height: 310,
                      //   padding: "1rem",
                      borderRadius: "18px",
                    }}
                  >
                    <CardActionArea>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "240px",
                        }}
                        src={product}
                        alt="card"
                      />

                      <CardContent>
                        <p className="line"></p>
                        <Typography
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginBottom: "1rem",
                          }}
                          variant="h6"
                          component="p"
                        >
                          Наименование товара
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>

                <div
                  className="card"
                  style={{ flexGrow: "1", flexBasis: "400px" }}
                >
                  <Card
                    sx={{
                      width: 260,
                      //   height: 310,
                      //   padding: "1rem",
                      borderRadius: "18px",
                    }}
                  >
                    <CardActionArea>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "240px",
                        }}
                        src={product}
                        alt="card"
                      />

                      <CardContent>
                        <p className="line"></p>
                        <Typography
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginBottom: "1rem",
                          }}
                          variant="h6"
                          component="p"
                        >
                          Наименование товара
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>

                <div
                  className="card"
                  style={{ flexGrow: "1", flexBasis: "400px" }}
                >
                  <Card
                    sx={{
                      width: 260,
                      //   height: 310,
                      //   padding: "1rem",
                      borderRadius: "18px",
                    }}
                  >
                    <CardActionArea>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "240px",
                        }}
                        src={product}
                        alt="card"
                      />

                      <CardContent>
                        <p className="line"></p>
                        <Typography
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginBottom: "1rem",
                          }}
                          variant="h6"
                          component="p"
                        >
                          Наименование товара
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div
                  className="card"
                  style={{ flexGrow: "1", flexBasis: "400px" }}
                >
                  <Card
                    sx={{
                      width: 260,
                      //   height: 310,
                      //   padding: "1rem",
                      borderRadius: "18px",
                    }}
                  >
                    <CardActionArea>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "240px",
                        }}
                        src={product}
                        alt="card"
                      />

                      <CardContent>
                        <p className="line"></p>
                        <Typography
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginBottom: "1rem",
                          }}
                          variant="h6"
                          component="p"
                        >
                          Наименование товара
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div
                  className="card"
                  style={{ flexGrow: "1", flexBasis: "300px" }}
                >
                  <Card
                    sx={{
                      width: 260,
                      //   height: 310,
                      //   padding: "1rem",
                      borderRadius: "18px",
                    }}
                  >
                    <CardActionArea>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "240px",
                        }}
                        src={product}
                        alt="card"
                      />

                      <CardContent>
                        <p className="line"></p>
                        <Typography
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginBottom: "1rem",
                          }}
                          variant="h6"
                          component="p"
                        >
                          Наименование товара
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
    </main>
  );
};

export default Product_info;
