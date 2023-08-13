import { Box, Typography } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
// import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import tavar from "../../assets/tavar.png";
import product from "../../assets/product_img.jpg";
import Contact from "../../components/contact/contact";

// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Our_products = () => {
  let cardinfo = [
    {
      title: "gfdvevrevef",
      image: product,
    },
    { title: "Магазину", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
    { title: "qwerty", image: product },
  ];
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
                  width: { xs: "110%", sm: "100%" },
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ width: "60px", height: "60px" }}>
                      <img src={tavar} alt="" /> {/* <ImageIcon /> */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className="text-black text-xl font-semibold"
                    primary="Наим. товара 1"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ width: "60px", height: "60px" }}>
                      <img src={tavar} alt="" /> {/* <WorkIcon /> */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className="text-black text-xl font-semibold"
                    primary="Наим. товара 1"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ width: "60px", height: "60px" }}>
                      <img src={tavar} alt="" /> {/* <BeachAccessIcon /> */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className="text-black text-xl font-semibold"
                    primary="Наим. товара 1"
                  />
                </ListItem>
              </List>
            </Box>
            <Box className="product">
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
                {cardinfo.map((info) => (
                  <div
                    style={{
                      maxWidth: "350px",
                      height: "auto",
                      overflow: "hidden",
                      background: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                    }}
                    key={crypto.randomUUID()}
                  >
                    <div>
                      <article>
                        <img
                          style={{
                            width: "100%",
                            height: "230px",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          src={info.image}
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
                          {info.title}
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
