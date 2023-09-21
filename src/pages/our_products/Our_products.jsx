import { Box, Typography } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Contact from "../../components/contact/contact";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n/i18n";
// eslint-disable-next-line no-unused-vars
import { toast } from "react-toastify";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Our_products = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [lang, setLang] = React.useState(i18n.language);

  const LangVal = () => {
    return i18n.language;
  };

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    try {
      await getCategories();
      await getProducts();
      setLoading(false);
    } catch (error) {
      setError("Ma'lumotlar olinmadi.");
      setLoading(false);
      console.error(error);
    }
  };

  const currentLang = LangVal(); // Joriy tilni olish
  if (currentLang !== lang) {
    setLang(currentLang); // Til almashtirilganda tilni yangilang
  }
  // React.useEffect(() => {
  // }, [lang]);

  // console.log(lang, "s");
  // console.log(currentLang, "o");

  React.useEffect(() => {
    fetchData();
  }, [lang]);

  async function getProducts() {
    try {
      let { data } = await axios.get("/products");
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      setError("Mahsulotlar olinmadi.");
      console.error(error);
    }
  }

  async function getCategories() {
    try {
      let { data } = await axios.get("/categories");
      setCategories(data.data);
    } catch (error) {
      setError("Kategoriyalar olinmadi.");
      console.error(error);
    }
  }
  async function checkLang() {
    const currentLang = LangVal(); // Joriy tilni olish
    if (currentLang !== lang) {
      setLang(currentLang); // Til almashtirilganda tilni yangilang
    }
  }

  return (
    <>
      <div
        onClick={() => {
          checkLang();
        }}
      >
        <div className="bg_img">
          <Navbar />
          <div className="our_products pt-32">
            <section id="hero-area" className="py-10 px-10">
              <div className="divide flex lg:flex-row flex-col justify-between ">
                <Box className="categories">
                  {error && (
                    <p>
                      {t("error")} ,{error}
                    </p>
                  )}
                  {loading && <p>{t("loading")}</p>}
                  {!loading && categories.length === 0 && (
                    <p>{t("no_category")}</p>
                  )}
                  {!loading && categories.length > 0 && (
                    <List
                      sx={{
                        width: { xs: "100%", sm: "100%" },
                        display: "flex",
                        flexDirection: { xs: "row", sm: "column" },
                        overflow: { xs: "scroll", sm: "hidden" },
                        bgcolor: "background.paper",
                      }}
                    >
                      {categories.map((category, index) => (
                        <ListItem
                          key={index}
                          style={{ width: "200%" }}
                          onClick={async () => {
                            let { data } = await axios.get(
                              `/products?categoryId=${category.id}`
                            );

                            console.log(data.data, "Mana yangisi");
                            setProducts(data.data);
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              style={{
                                width: "60px",
                                height: "60px",
                                marginRight: "1rem",
                              }}
                            >
                              <img src={category.image_url} alt="Kategoriya" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            className="text-black text-xl font-semibold category_text_effect"
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                            }}
                          >
                            {lang === "uz"
                              ? category.uz_category_name
                              : lang === "en"
                              ? category.en_category_name
                              : category.ru_category_name}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
                <Box className="product py-10 md:py-0">
                  {error && (
                    <p>
                      {t("error")} , {error}
                    </p>
                  )}
                  {loading && <p>{t("loading")}</p>}
                  {!loading && products.length === 0 && (
                    <p>{t("no_product")} </p>
                  )}
                  {!loading && products.length > 0 && (
                    <div
                    id="scrollbar"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        maxWidth: "1280px",
                        flexWrap: "wrap",
                        margin: "0 auto",
                        gap: "1.5rem",
                      }}
                    >
                      {products.map((info, index) => (
                        <div
                          style={{
                            maxWidth: "350px",
                            height: "auto",
                            overflow: "hidden",
                            background: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "30px",
                          }}
                          onClick={() => {
                            navigate(`/product/${info.id}`);
                          }}
                          key={index}
                        >
                          <div>
                            <article>
                              <img
                                className="w-full md:w-80"
                                style={{
                                  height: "230px",
                                  objectFit: "contain",
                                  objectPosition: "center",
                                }}
                                src={info.img_url}
                                alt="Mahsulot"
                              />
                              <p className="line"></p>
                              <Typography
                                style={{
                                  textAlign: "center",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginBottom: "1rem",
                                }}
                                variant="h6"
                                component="p"
                              >
                                {lang === "uz"
                                  ? info.uz_product_name
                                  : lang === "en"
                                  ? info.en_product_name
                                  : info.ru_product_name}
                              </Typography>
                            </article>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Box>
              </div>
            </section>
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Our_products;
