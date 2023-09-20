import Navbar from "../../components/navbar/navbar";
// import { FiArrowUpRight } from "react-icons/fi";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import "./style.scss";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
// import { TbCalendarEvent } from "react-icons/tb";

// import product from "../../assets/product_img.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
const Product_info = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  // console.log(id);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  //api

  async function currentProduct() {
    try {
      let { data } = await axios.get(`/products/${id}`);
      // console.log();(data);
      setProduct([data.data]);
      // localStorage.setItem("selectedProfile", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
      navigate("/error");
      // toast(error.msg, { type: "error" });
    }
  }
  async function getProducts() {
    try {
      let { data } = await axios.get(
        `/products?filter{category_id:${product.category_id}}`
      );
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    currentProduct();
    getProducts();
  }, [id]);
  const LangVal = () => {
    return i18n.language;
  };

  console.log(LangVal);
  return (
    <>
      <div className="bg_img">
        <section className="flex flex-col">
          <Navbar />
          {product.map((el) => {
            return (
              <div key={el.id}>
                <div className="product_info" style={{ marginTop: "2rem" }}>
                  <div className="img shadow-lg ">
                    <img src={el.img_url} alt="tavar" />
                  </div>
                  <div className="img shadow-lg ">
                    <img src={el.img1_url} alt="tavar" />
                  </div>
                </div>
                <div className="describe flex mx-auto h-auto lg:h-12 gap-7 shadow-lg flex-col justify-start">
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
                    {LangVal() == "uz"
                      ? el.uz_product_name
                      : LangVal() == "en"
                      ? el.en_product_name
                      : el.ru_product_name}
                  </Typography>

                  <Typography className="" variant="p" component="p">
                    {LangVal() == "uz"
                      ? el.uz_desc
                      : LangVal() == "en"
                      ? el.en_desc
                      : el.ru_desc}
                  </Typography>
                </div>
              </div>
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
              {t("product_2_1")}
            </Typography>
            <div className="blog">
              <div
                className="blog_container"
                style={{
                  overflowX: "hidden",
                }}
              >
                {/* <div className="h-auto p-0 py-8"> */}
                <div
                  className="flex-container my-10"
                  id="flex-container"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "flex-end",
                    justifyContent: "flex-start",
                    // flexWrap: "wrap",
                    overflowX: "scroll",
                    // overflow: "hidden",
                    gap: "2rem",

                    scrollBehavior: "smooth",

                    // flexFlow: "wrap",
                  }}
                  // style={{ height: "50%" }}
                >
                  {products.map((p) => {
                    return (
                      <div
                        onClick={() => {
                          navigate(`/product/${p.id}`);
                        }}
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
                                width: "100%",
                              }}
                              src={p.img_url}
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
                                {LangVal() == "uz"
                                  ? p.uz_product_name
                                  : LangVal() == "en"
                                  ? p.en_product_name
                                  : p.ru_product_name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Product_info;
