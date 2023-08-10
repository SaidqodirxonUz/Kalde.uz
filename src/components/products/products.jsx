import { Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";

import "./index.scss";
import product from "../../assets/product_img.jpg";

let cardinfo = [
  { title: "qwertyuitre efgbhvcsfghre 34rt5yhfe egfdvevrevef", image: product },
  { title: "Магазину", image: product },
  { title: "qwerty", image: product },
  { title: "qwerty", image: product },
  { title: "qwerty", image: product },
  { title: "qwerty", image: product },
];

const Products = () => {
  return (
    <div className="products_container">
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
          Наши продукты
        </Typography>
        <a
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "2rem 0",
            width: "180px",
            height: "30px",
            padding: "20px 24px",
            color: "rgba(239, 127, 26, 1)",
            border: "1px solid rgba(239, 127, 26, 1)",
            borderRadius: "100px",
          }}
          className="more"
          href="#"
        >
          Все продукты <FiArrowUpRight />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          flexWrap: "wrap",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        {cardinfo.map((info) => (
          <div
            style={{
              maxWidth: "400px",
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
                    width: "400px",
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
    </div>
  );
};

export default Products;
