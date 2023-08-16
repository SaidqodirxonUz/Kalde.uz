// import React from 'react'
import AboutUsHeroImg from "../../assets/about_us_hero.png";

import { Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Advantage_cards = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="py-10 md:py-0">
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <div
        className="advantage hero"
        // eslint-disable-next-line react/prop-types
        style={{ flexDirection: props ? props.dir : "row" }}
      >
        <div className="texts">
          <Typography
            variant="h5"
            component="h6"
            style={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              color: "var(--text-color-secondary-text, #2E2E2E)",
            }}
          >
            Вся продукция ППР изготавливается из высококачественного сырья
            класса «А», что обеспечивает лучшее соединение при пайке труб и
            фитингов.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Okta Neue",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140% /* 25.2px */",
            }}
          >
            KALDE - основана в 1977 году, расположена в Стамбуле, Турция,
            производит продукцию для современных систем отопления и
            водоснабжения. Сегодня продукция KALDE известна в 50 странах мира.
            Продукция KALDE, отвечающая мировым стандартам, известна в 40
            крупнейших странах мира. Вся продукция имеет международные
            сертификаты. На рынке Узбекистана продукция Kalde стала известна в
            2009 году. На сегодняшний день в Узбекистане продукцию Kalde можно
            купить более чем в 20 специализированных магазинах!
          </Typography>

          {/* <div style={{ display: "flex", columnGap: "1rem" }}> */}
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              //   margin: "2rem 0",
              width: "220px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
            className="more"
            onClick={handleOpen}
          >
            Свяжитесь с нами <FiArrowUpRight />
          </Button>
          {/* </div> */}
        </div>
        <div className="img">
          <img src={AboutUsHeroImg} alt="a" />
        </div>
      </div>
    </div>
  );
};

export default Advantage_cards;
