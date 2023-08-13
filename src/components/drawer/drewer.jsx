import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/navbar_img.png";
import { FaGlobe, FaAngleDown } from "react-icons/fa";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTelegram,
} from "react-icons/tb";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const items = [
    {
      value: "ru",
      label: "Рус",
    },
    {
      value: "uz",
      label: "Uz",
    },
  ];

  const pages = [
    { name: "Главная", url: "/" },
    { name: "O нас", url: "/about-us" },
    { name: "Преимущества", url: "/advantages" },
    { name: "Каталог", url: "/catalog" },
    { name: "Новости", url: "/news" },
    { name: "Контакт", url: "/contact" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 280,
        height: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="menubar"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <img src={logo} alt="Kalde" className=" m-auto py-4" />
        <List>
          {pages.map((el) => (
            <ListItem
              key={el.name}
              disablePadding
              className="px-6 active:text-orange-500 active:border-b-2 active:border-solid active:border-orange-500"
            >
              {/* <ListItemButton> */}
              <ListItemText primary={el.name} />
              {/* </ListItemButton> */}
            </ListItem>
          ))}
          <div className="flex flex-row justify-evenly h-10 items-center">
            <article className="flex flex-row justify-start items-center ">
              <FaGlobe className="" style={{ fontSize: "20px" }} />
              <ListItem className="px-6 bg-black active:bg-zinc-500 active:text-white  h-full">
                <select
                  style={{
                    // margin: "50px",
                    width: "100%",
                    fontSize: "17px",
                    padding: "10px 35px 10px 10px",
                    // fontSize: "16px",
                    border: "none",
                    height: "54px",
                    // -webkit-appearance: none,
                    // -moz-appearance: none,
                    appearance: "none",
                    background: "black",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "5%",
                    backgroundPosition: "98% 50%",

                    //   /* CAUTION: IE hackery ahead */
                    //   ::-ms-expand {
                    //       display: none; /* remove default arrow on ie10 and ie11 */
                  }}
                >
                  <option selected disabled>
                    Язык
                  </option>
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </ListItem>
            </article>
            <FaAngleDown />
          </div>
        </List>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          gap: "2rem",
          alignItems: "center",
          padding: "2rem 0",
          color: "white",
        }}
        className="s_links"
      >
        <article
          className="social_btn btn bg-orange-500 p-3 "
          style={{
            borderRadius: "8px",
          }}
        >
          <a href="#">
            <TbBrandTelegram />
          </a>
        </article>
        <article
          className="social_btn btn bg-orange-500 p-3 "
          style={{
            borderRadius: "8px",
          }}
        >
          <a href="#">
            <TbBrandInstagram />
          </a>
        </article>
        <article
          className="social_btn btn bg-orange-500 p-3 "
          style={{
            borderRadius: "8px",
          }}
        >
          <a href="#">
            <TbBrandFacebook />
          </a>
        </article>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AiOutlineMenu className="text-black text-2xl" />
          </Button>
          <Drawer
            style={{ background: "rgba(0,0,0,0.2)" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {console.log(anchor)}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
