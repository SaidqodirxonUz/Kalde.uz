import { Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import axios from "axios";
import "./index.scss";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const LangVal = () => {
    return i18n.language;
  };
  //api

  async function getData() {
    try {
      let { data } = await axios.get("/products");
      console.log(data);
      setData(data.data);
    } catch (error) {
      // alert(error);
      console.log(error);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);
  console.log(data, "this");
  //
  const { t } = useTranslation();
  return (
    <div className="products_container w-full bg-stone-100 py-14 lg:py-22 lg:mb-10">
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
            textAlign: "center",
            margin: "0 auto",
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
          className="mx-auto lg:mx-0 "
        >
          {t("main_4_1")}
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
          href="/catalog"
        >
          {t("main_4_2")} <FiArrowUpRight />
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
        {data?.map((i) => {
          return (
            <div
              // key={info.id}
              onClick={() => {
                navigate(`/product/${i.id}`);
              }}
              style={{
                maxWidth: "400px",
                height: "auto",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "30px",
                margin: "0 auto",
              }}
              key={uuidv4()}
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
                    src={i.image_url}
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
                    {/* aaaaaaaaaaaa */}
                    {LangVal() == "uz"
                      ? i.uz_product_name
                      : LangVal() == "en"
                      ? i.en_product_name
                      : i.ru_product_name}
                  </Typography>
                </article>
              </div>
            </div>
          );
        })}
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
        href="/catalog"
      >
        {t("main_4_2")} <FiArrowUpRight />
      </a>
    </div>
  );
};

export default Products;
