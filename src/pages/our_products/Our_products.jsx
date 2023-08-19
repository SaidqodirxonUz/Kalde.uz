import { Box, Typography } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import tavar from "../../assets/tavar.png";
// import product from "../../assets/product_img.jpg";
import Contact from "../../components/contact/contact";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n/i18n";

// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Our_products = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  //api
  React.useEffect(() => {
    async function getProducts() {
      try {
        let { data } = await axios.get("/products");
        console.log(data, "prod");
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getCategories() {
      try {
        let { data } = await axios.get("/categories");
        console.log(data);
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
    getCategories();
  }, []);
  const LangVal = () => {
    return i18n.language;
  };
  console.log(products, "this");

  return (
    <>
      <Navbar />
      <div className="our_products my-28">
        {/* <!-- Hero Area Start --> */}
        <section id="hero-area" className="py-10 px-10">
          <div className="divide flex lg:flex-row flex-col justify-between ">
            <Box
              className="categories"
              // sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <List
                sx={{
                  width: { xs: "100%", sm: "100%" },
                  // maxWidth: 460,
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" },
                  overflow: { xs: "scroll", sm: "hidden" },
                  bgcolor: "background.paper",
                }}
              >
                {categories.map((category) => {
                  return (
                    <ListItem
                      key={category.id}
                      style={{ width: "200%" }}
                      onClick={async () => {
                        let { data } = await axios.get(
                          `/products?categoryId=${category.id}`
                        );
                        console.log(data.data, "mana yangi");
                        setProducts(data.data);
                        // console.log(products, "yangi state");
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar style={{ width: "60px", height: "60px" }}>
                          <img src={category.image_url} alt="category" />{" "}
                          {/* <ImageIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        className="text-black text-xl font-semibold"
                        primary={
                          LangVal() == "uz"
                            ? category.uz_category_name
                            : LangVal() == "en"
                            ? category.en_category_name
                            : category.ru_category_name
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box className="product py-10 md:py-0">
              <div
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
                          src={info.image_url}
                          alt="p"
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
                          {LangVal() == "uz"
                            ? info.uz_product_name
                            : LangVal() == "en"
                            ? info.en_product_name
                            : info.ru_product_name}
                        </Typography>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </section>
        <section className="contact-form">
          {/* <div class="container"> */}
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Our_products;
