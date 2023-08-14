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
    <div
      className="products_container w-full bg-stone-100 py-14 lg:py-22 lg:mb-10"
      // style={{ padding: "10rem 0 10rem 0" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1rem 0",
        }}
      >
        <Typography
          variant="h2"
          component="h3"
          style={{
            // textAlign: "center",
            // margin: "0 auto",
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
          className="mx-auto lg:mx-0"
        >
          Наши продукты
        </Typography>
        <a
          // className="btn"
          style={{
            // display: "flex",
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
          className="more hidden lg:flex"
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
          // width: "100%",
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
              margin: "0 auto",
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
      <a
        // className="btn"
        style={{
          // display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // margin: "2rem 0",
          width: "180px",
          height: "30px",
          padding: "20px 24px",
          color: "rgba(239, 127, 26, 1)",
          border: "1px solid rgba(239, 127, 26, 1)",
          borderRadius: "100px",
        }}
        className="more flex lg:hidden justify-center mx-auto my-10"
        href="#"
      >
        Все продукты <FiArrowUpRight />
      </a>
    </div>
  );
};

export default Products;
