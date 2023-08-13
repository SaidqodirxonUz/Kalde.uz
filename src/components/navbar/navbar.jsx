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
import i18n from "../../i18n/i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const pages = [
    { name: t("navbar_main_link"), url: "/" },
    { name: t("navbar_about_link"), url: "/about-us" },
    { name: t("navbar_adventages_link"), url: "/advantages" },
    { name: t("navbar_catalog_link"), url: "/catalog" },
    { name: t("navbar_news_link"), url: "/news" },
    { name: t("navbar_contact_link"), url: "/contact" },
  ];

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
        margin: "20px 40px",
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                  <a
                    href={page.url}
                    className="text-neutral-950 active:text-orange-500 links"
                  >
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {pages.map((page, index) => (
              <a
                href={page.url}
                className="text-neutral-950 active:text-orange-500 links"
                key={index}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </a>
            ))}
            <p className="divider">|</p>

            <Box>
              <Button
                sx={{
                  my: 1,
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
                </a>
              </Button>
              <hr />
            </Box>

            <Box className="select">
              <FaGlobe className="text-3xl text-orange-500" />

              <FormControl>
                <NativeSelect
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  inputProps={{
                    name: "language",
                    id: "language",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      background: "white",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {items.map((item, index) => (
                    <option value={item.value} key={index}>
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
