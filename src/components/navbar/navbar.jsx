import logo from "../../assets/navbar_img.png";
import "./navbar.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, NativeSelect } from "@mui/material";

const pages = [
  "Главная",
  "O нас",
  "Преимущества",
  "Каталог",
  "Новости",
  "Контакт",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background: "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(5px)",
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    className="pages text-neutral-950 active:text-yellow-300"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="text-neutral-950 active:text-yellow-300"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page}
              </Button>
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
                </a>
              </Button>
            </Box>

            <Box className="select">
              <FaGlobe className="text-3xl text-orange-500" />
              <FormControl
                sx={{ display: "flex", justifyItems: "center", margin: "auto" }}
              >
                {/* <InputLabel variant="standart" htmlFor="uncontrolled-native">
              
            </InputLabel> */}

                <NativeSelect
                  className="text-neutral-950 active:text-yellow-300"
                  defaultValue="ru"
                  inputProps={{
                    name: "lang",
                    id: "uncontrolled-native",
                  }}
                >
                  <option
                    className="text-neutral-950 active:text-yellow-300"
                    value="ru"
                  >
                    Ру
                  </option>
                  <option
                    className="text-neutral-950 active:text-yellow-300"
                    value="uz"
                  >
                    Uz
                  </option>
                  {/* <option value="">Thirty</option> */}
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
