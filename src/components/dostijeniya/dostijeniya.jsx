import { Typography } from "@mui/material";
import DostijeniyaImg from "../../assets/about_us_hero.png";
import { useCountUp } from "use-count-up";
import "./dostijeniya.scss";

const Dostijeniya = () => {
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
    <div className="about_us hero">
      <div className="img">
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
          Достижения компании
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
            lineHeight: "140%",
          }}
        >
          KALDE - основана в 1977 году, расположена в Стамбуле, Турция,
          производит продукцию для современных систем отопления и водоснабжения.
          Сегодня продукция KALDE известна в 50 странах мира. Продукция KALDE,
          отвечающая мировым стандартам, известна в 40 крупнейших странах мира.
          Вся продукция имеет международные сертификаты. На рынке Узбекистана
          продукция Kalde стала известна в 2009 году. На сегодняшний день в
          Узбекистане продукцию Kalde можно купить более чем в 20
          специализированных магазинах!
        </Typography>
        <div style={{ display: "flex" }}>
          <div
            href="#"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "-0.5rem",
              width: "46vw",
              // height: "10vh",
              padding: "2.25rem 5rem",
              borderRadius: "1.125rem",
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
              background: "#F5F5F5",
            }}
            className="more"
          >
            <span className="countSpan">
              <h1 className="value">{partnerValue}+</h1>Сотрудники
            </span>
            <span className="countSpan">
              <h1 className="value">{productValue}+</h1>Продукты
            </span>
            <span className="countSpan">
              <h1 className="value">{factoryValue}+</h1>Заводы
            </span>
            <span className="countSpan">
              <h1 className="value">{statesValue}+</h1>
              Государства
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dostijeniya;
