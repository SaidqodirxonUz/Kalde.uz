import logo from "../../assets/navbar_img.png";
import "./navbar.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"; // Add this import
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { FormControl, NativeSelect } from "@mui/material";
import { useTranslation } from "react-i18next";

const pages = [
  { name: "Главная", url: "/" },
  { name: "O нас", url: "/about-us" },
  { name: "Преимущества", url: "/advantages" },
  { name: "Каталог", url: "/catalog" },
  { name: "Новости", url: "/news" },
  { name: "Контакт", url: "/contact" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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

  return (
    <AppBar
      position="fixed"
      style={{
        background: "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(5px)",
        boxShadow: "none",
        borderRadius: "50px",
        padding: "20px 40px",
        margin: "20px auto",
        width: "90vw",
        height: "93px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "53px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt="Kalde" />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              margin: "0",
              justifyContent: "flex-end",
            }}
            // style={}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <AiOutlineMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a
                    href={page.url}
                    style={{ textAlign: "center" }}
                    className="pages text-neutral-950 active:text-yellow-300"
                  >
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {pages.map((page) => (
              <a
                href={page.url}
                className="text-neutral-950 active:text-orange-500 links"
                key={page}
                onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page.name}
              </a>
            ))}
            <p className="divider">|</p>
            <Box>
              <Button
                sx={{
                  my: 2,
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BiSolidPhoneCall className="text-3xl text-orange-500" />
                <a
                  className="text-neutral-950 active:text-yellow-300"
                  href="tel:+998939087085"
                >
                  +998 (93) 908-7085
                  <hr />
                  {t("website_title")}
                </a>
              </Button>
            </Box>

            <Box className="select">
              <FaGlobe className="text-3xl text-orange-500" />
              <FormControl
                sx={{ display: "flex", justifyItems: "center", margin: "auto" }}
              >
                <NativeSelect
                  className="text-neutral-950 active:text-yellow-300"
                  defaultValue={i18n.language}
                  inputProps={{
                    name: "lang",
                    id: "uncontrolled-native",
                  }}
                  onChange={handleLanguageChange}
                >
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
