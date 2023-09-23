import { Typography } from "@mui/material";
import DostijeniyaImg from "../../assets/images/about_1_2.jpg";
import { useCountUp } from "use-count-up";
import "./dostijeniya.scss";
import { useTranslation } from "react-i18next";

const Dostijeniya = () => {
  const { t } = useTranslation();

  const partnersStart = 0;
  const partnersEnd = 500;
  const partnerDuration = 5;

  const productStart = 0;
  const productEnd = 50;
  const productDuration = 5;

  const factoryStart = 0;
  const factoryEnd = 20;
  const factoryDuration = 5;

  const statesStart = 0;
  const statesEnd = 10;
  const statesDuration = 5;

  const { value: statesValue } = useCountUp({
    isCounting: true,
    start: statesStart,
    end: statesEnd,
    duration: statesDuration,
  });

  const { value: factoryValue } = useCountUp({
    isCounting: true,
    start: factoryStart,
    end: factoryEnd,
    duration: factoryDuration,
  });

  const { value: partnerValue } = useCountUp({
    isCounting: true,
    start: partnersStart,
    end: partnersEnd,
    duration: partnerDuration,
  });

  const { value: productValue } = useCountUp({
    isCounting: true,
    start: productStart,
    end: productEnd,
    duration: productDuration,
  });

  // const { value } = useCountUp({
  //   isCounting: true,
  //   start,
  //   end,
  //   duration,
  // });

  // console.log({ partnerCountUp.value });

  return (
    <>
      <div className="bg_img">
        <div className="about_us hero ">
          <div className="dostijeniyaImg">
            <img src={DostijeniyaImg} alt="Dostijeniya" />
          </div>
          <div className="texts">
            <Typography
              variant="h2"
              component="h3"
              style={{
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 400,
                fontFamily: "Okta Neue",
                lineHeight: "normal",
                background:
                  "var(--linear, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("about_2_1")}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              style={{
                color: "#324291",
                fontFamily: "Okta Neue",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              {t("about_2_2")}
            </Typography>
            <div style={{ display: "flex" }} className="dostijeniya_more_main">
              <div className="dostijeniya_more">
                <span className="countSpan">
                  <h1 className="value">{partnerValue}+</h1>
                  {t("about_2_3")}
                </span>
                <span className="countSpan">
                  <h1 className="value">{productValue}+</h1>
                  {t("about_2_4")}
                </span>
                <span className="countSpan">
                  <h1 className="value">{factoryValue}+</h1>
                  {t("about_2_5")}
                </span>
                <span className="countSpan">
                  <h1 className="value">{statesValue}+</h1>
                  {t("about_2_6")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dostijeniya;
