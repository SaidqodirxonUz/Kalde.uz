/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { Box, Button, List, ListItemText } from "@mui/material";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { TbCalendarEvent, TbMapSearch } from "react-icons/tb";
import "./index.scss";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import i18n from "../../i18n/i18n";
import ReactMapGL from "react-map-gl";
import mapboxgl, { XMapbox } from "mapbox-gl";
// import Map from "../../components/maps/map";
import { BiCurrentLocation } from "react-icons/bi";
import Maps from "../../components/maps/map";

// import mapboxgl from "mapbox-gl";
// import AppMap from "../../components/map";
// import AppLayout from "../../layout";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdThkZTE1MTR4dzNkczJwYnVjc2plNSJ9.Yc8_3DMMA7l8CiY_tJY8iw";
// var map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/streets-v12",
// });

// XMapbox.accessToken =
//   "pk.eyJ1IjoibWVnYWNvZGVydXoiLCJhIjoiY2xsdThkZTE1MTR4dzNkczJwYnVjc2plNSJ9.Yc8_3DMMA7l8CiY_tJY8iw";
// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
// var map = new XMapbox.Map({
//   container: "marker",
//   style: "mapbox://styles/mapbox/streets-v11",
// });
const Contact_filial = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [map, setMap] = useState(
    "https://www.google.com/maps/place/Kardiologiya+Markazi/@41.320296,69.2996732,15z/data=!4m6!3m5!1s0x38aef4c58ca4d005:0xbb6846c76541260d!8m2!3d41.3243314!4d69.2999526!16s%2Fg%2F1hm2txb8q?entry=ttu"
  );
  const [filial, setFilial] = useState([]);

  // const mapContainer = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "500px",
    zoom: 10,
  });

  // const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);
  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });
  // map.current.on("move", () => {
  //   setLng(map.current.getCenter().lng.toFixed(4));
  //   setLat(map.current.getCenter().lat.toFixed(4));
  //   setZoom(map.current.getZoom().toFixed(2));
  // });
  // });
  // let address = "University of Oxford";
  // location = "https://goo.gl/maps/WCvH3VUCTg8sUZr98";
  const navigate = useNavigate();
  useEffect(() => {
    async function getFilials() {
      try {
        let { data } = await axios.get(`/dealers/${id}`);
        setFilial([data.data]);
        setMap(data.data.location);
        console.log(data.data, "data");
        console.log(data.data.location, "l");
        await setMap(data.data.location);
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
    }
    getFilials();
  }, [id]);
  const LangVal = () => {
    return i18n.language;
  };
  console.log(filial, "state");
  // console.log(map);
  // setMap(
  //   filial[0].location
  //     ? filial[0].location
  //     : "https://www.google.com/maps/place/Kardiologiya+Markazi/@41.320296,69.2996732,15z/data=!4m6!3m5!1s0x38aef4c58ca4d005:0xbb6846c76541260d!8m2!3d41.3243314!4d69.2999526!16s%2Fg%2F1hm2txb8q?entry=ttu"
  // );
  // const l =
  //   "https://www.google.com/maps/place/Kardiologiya+Markazi/@41.320296,69.2996732,15z/data=!4m6!3m5!1s0x38aef4c58ca4d005:0xbb6846c76541260d!8m2!3d41.3243314!4d69.2999526!16s%2Fg%2F1hm2txb8q?entry=ttu";

  const { t } = useTranslation();
  return (
    <>
      <div className="bg_img">
        <Navbar />
        {/* <!-- Hero Area Start --> */}
        <div className="hero-area pt-40 md:pt-20 lg:pt-10">
          <section className="Contacts w-9/12 mx-auto flex flex-col justify-between md:flex-row gap-10">
            {filial.map((f) => {
              console.log(f.location, "q2");
              // setMap(f.location);
              // {
              //   location = f.location;
              // }
              return (
                <div className="f_info" key={f.id}>
                  <h5 className="filial_name">
                    {LangVal() == "uz"
                      ? f.title_uz
                      : LangVal() == "en"
                      ? f.title_en
                      : f.title_ru}
                  </h5>

                  <List>
                    <ListItemText>
                      <p
                        // style={{ textAlign: "center" }}
                        className="pages text-black active:text-orange-500 flex flex-row "
                      >
                        <MdLocationOn className="icons text-2xl text-orange-500" />{" "}
                        {t("firyal_1_1")} {f.adress}
                      </p>
                    </ListItemText>
                    <ListItemText>
                      <p className="flex flex-row text-black ">
                        <TbCalendarEvent className="icons text-2xl text-orange-500" />
                        {t("firyal_1_3")} {f.work_at}
                      </p>
                    </ListItemText>
                    <ListItemText>
                      <a
                        href={`tel:${f.phone_number}`}
                        // style={{ textAlign: "center" }}
                        className="pages flex flex-row text-black active:text-orange-500 items"
                      >
                        <BsTelephoneFill className="icons text-xl text-orange-500" />
                        {t("firyal_1_4")} {f.phone_number}
                      </a>
                    </ListItemText>
                    <ListItemText>
                      <a
                        href={`mailto:${f.email}`}
                        // style={{ textAlign: "center" }}
                        className="pages flex flex-row text-black active:text-orange-500 items"
                      >
                        <MdEmail className="icons text-xl text-orange-500" />{" "}
                        {t("firyal_1_5")} {f.email}
                      </a>
                    </ListItemText>

                    <ListItemText>
                      <Link
                        to={f.location}
                        target="_blank"
                        // style={{ textAlign: "center" }}
                        className="pages flex flex-row text-black active:text-orange-500 items"
                      >
                        <TbMapSearch className="icons text-xl text-orange-500" />
                        {t("firyal_1_6")}{" "}
                        {LangVal() == "uz"
                          ? f.title_uz
                          : LangVal() == "en"
                          ? f.title_en
                          : f.title_ru}
                      </Link>
                    </ListItemText>
                  </List>
                </div>
              );
            })}
            <div
              style={{ maxWidth: "400px" }}
              className="w-full contact_card p-10 bg-white rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]"
            >
              <h5
                className="filial_name"
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  paddingBottom: "2rem",
                }}
              >
                {t("application_1_2")}
              </h5>
              <Box
                component="form"
                noValidate
                autoComplete="on"
                className="flex flex-col justify-center gap-5  forma"
                // onSubmit={() => {
                //   setName("");
                //   setPhone("");
                //   setName("");
                // }}
              >
                <div className="bg_input">
                  <label className="custom-field two">
                    <input
                      value={name}
                      type="url"
                      placeholder="&nbsp;"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <span className="placeholder">{t("application_1_3")}</span>
                  </label>
                </div>
                <div className="bg_input">
                  <label className="custom-field two">
                    <input
                      value={phone}
                      type="url"
                      placeholder="&nbsp;"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    <span className="placeholder">{t("application_1_4")}</span>
                  </label>
                </div>

                <div className="bg_input">
                  <textarea
                    value={message}
                    placeholder={t("application_1_5")}
                    rows="3"
                    name="comment[text]"
                    id="comment_text"
                    cols="10"
                    className="ui-autocomplete-input p-5"
                    style={{ color: "#000", resize: "none", width: "100%" }}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <Button
                  variant="contained"
                  className="send_btn"
                  style={{ backgroundColor: "#EF7F1A", width: "100%" }}
                  type="submit"
                  onClick={async (e) => {
                    e.preventDefault();
                    let data = JSON.stringify({
                      name: name,
                      phone: phone,
                      message: message,
                    });

                    let config = {
                      method: "post",
                      maxBodyLength: Infinity,
                      url: "/send",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      data: data,
                    };

                    // axios.post("/send", data);
                    axios
                      .request(config)
                      .then((response) => {
                        console.log(JSON.stringify(response.data));
                        if (response.status == 200) {
                          toast(
                            LangVal() == "uz"
                              ? response.data.message
                              : LangVal() == "en"
                              ? response.data.message
                              : response.data.message,
                            { type: "success" }
                          );
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        if (error.request.status == 400) {
                          toast(
                            LangVal() == "uz"
                              ? error.response.data[0].error_uz
                              : LangVal() == "en"
                              ? error.response.data[2].error_en
                              : error.response.data[1].error_ru,
                            { type: "error" }
                          );
                        }
                        if (error.request.status == 403) {
                          toast(
                            LangVal() == "uz"
                              ? error.response.data[0].error_uz
                              : LangVal() == "en"
                              ? error.response.data[2].error_en
                              : error.response.data[1].error_ru,
                            { type: "info" }
                          );
                        }
                      });
                    setName("");
                    setPhone("");
                    setMessage("");
                  }}
                >
                  {t("application_1_6")}
                </Button>
              </Box>
            </div>
          </section>
        </div>
        {/* <Contact /> */}
        <section className="location" id="location">
          {/* {filial.map((l) => { */}
          {/* return ( */}
          {/* <div ref={mapContainer} className="map-container" /> */}
          {/* <div id="map"> */}
          {/* {console.log(filial[0].location)} */}
          <Maps url={map} />
          {/* 
        <mapboxgl.Map
        accessToken={mapboxAccessToken}
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          width: "100%",
          height: "500px",
        }}
          center={[viewport.longitude, viewport.latitude]}
          zoom={viewport.zoom}
        ></mapboxgl.Map> */}
          {/* <div>
          {
            new XMapbox.Map({
              container: "marker",
              style: "mapbox://styles/mapbox/streets-v11",
            })
          }
        </div> */}
          {/* <AppLayout /> */}
          {/* style={{ width: "100%", height: "500px" }} */}
          {/* <x-div>
          <x-mapbox>
          <x-marker id="marker" lnglat="Toronto, Canada" center>
              Looking For Here?
              </x-marker>
              </x-mapbox>
            </x-div> */}
          {/* <iframe
          width="600"
          height="450"
          // style="border:0"
          loading="lazy"
          allowfullscreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBcIC_Sf8mYR0ZgDis-MzanDaeqS4yO0Gk
          &q=${address}`}
        ></iframe> */}
          {/* <iframe
            // AIzaSyBgkbHAvREwtXtYQMYQ1pT7fXtVd0hScI
            className="gmap_iframe"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={location}
          ></iframe> */}
          {/* shuni oc \/*/}
          {/* 
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7979651830346!2d69.24579717661015!3d41.356744897894345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c8cfa42d491%3A0x40eea1c4b4fe62d7!2sMagazin%20Kalde!5e0!3m2!1sen!2s!4v1693209392169!5m2!1sen!2s"
          width="100%"
          height="600"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.900470353685!2d69.2339409770477!3d41.3621374840949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c58d1abc231%3A0xc2de16d428dded27!2sChuqursoy%20Market!5e0!3m2!1sen!2s!4v1692464390824!5m2!1sen!2s"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          {/* {address !== "" ? (
          <iframe
          width="600"
          height="450"
          // style="border:0"
          loading="lazy"
          allowfullscreen
          referrerPolicy="no-referrer-when-downgrade"
          src={"" + location}
          ></iframe>
          ) : (
            ""
          )} */}
          {/* </div> */}
          {/* );
        })} */}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact_filial;
