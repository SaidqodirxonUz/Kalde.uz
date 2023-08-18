import Navbar from "../../components/navbar/navbar";
// import { FiArrowUpRight } from "react-icons/fi";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import "./style.scss";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
// import { TbCalendarEvent } from "react-icons/tb";

// import product from "../../assets/product_img.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Product_info = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  //api

  useEffect(() => {
    async function currentUser() {
      try {
        let { data } = await axios.get(`/products/${id}`);
        // console.log();(data);
        setProduct([data.data]);
        // localStorage.setItem("selectedProfile", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.log(error);
        // toast(error.msg, { type: "error" });
      }
    }
    currentUser();
    async function getProducts() {
      try {
        let { data } = await axios.get(
          `/products?filter{category_id:${product.category_id}}`
        );
        console.log(data, "prod");
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [id]);
  console.log(product, "prod");
  console.log(products, "paxojie");
  return (
    <main className="flex flex-col gap-8">
      <Navbar />
      {product.map((el) => {
        return (
          <>
            <div className="product_info ">
              <div className="img shadow-lg">
                <img src={el.image_url} alt="tavar" />
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
                  {el.uz_product_name}
                </Typography>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Narx
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.price}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Diametr
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.diametr}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Ichki diametr
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.ichki_diametr}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Ichki uzunlik
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.ichki_uzunlik}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Tashqi uzunlik
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.tashqi_uzunlik}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Razmer
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.razmer}
                  </Typography>
                </div>
                <div className="flex flex-row justify-between w-5/6 items-start">
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "rgba(0, 0, 0, 0.80)",
                      fontFamily: "Okta Neue",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "140% ",
                    }}
                  >
                    Soni
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
                      lineHeight: "140% ",
                    }}
                  >
                    {el.soni}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="describe flex w-10/12 mx-auto h-auto lg:h-12 px-8 shadow-lg flex-row justify-start">
              <Typography className="p-2" variant="p" component="p">
                {el.uz_desc}
              </Typography>
            </div>
          </>
        );
      })}
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
                {products.map((p) => {
                  return (
                    <div
                      key={p.id}
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
                            src={p.image_url}
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
                              {p.uz_product_name}
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
    </main>
  );
};

export default Product_info;
