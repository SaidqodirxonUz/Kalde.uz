import { CardHeader, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import { FiArrowUpRight } from "react-icons/fi";
import blogImg from "../../assets/blog.png";

import "./index.scss";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";

class Blog extends React.Component {
  clickLeft() {
    let container = document.querySelector("#flex-container");
    container.scrollTo({
      left: container.scrollLeft - 200,
      top: 0,
      behavior: "smooth",
    });
  }

  clickRight() {
    let container = document.querySelector("#flex-container");
    container.scrollTo({
      left: container.scrollLeft + 200,
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="products_container" style={{ padding: "2rem 0 2rem 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h2"
            component="h3"
            style={{
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
          >
            Blog yangiliklar
          </Typography>
          <a
            style={{
              // display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "2rem 0",
              width: "200px",
              height: "30px",
              padding: "20px 24px",
              color: "rgba(239, 127, 26, 1)",
              border: "1px solid rgba(239, 127, 26, 1)",
              borderRadius: "100px",
            }}
            className="more hidden lg:flex"
            href="#"
          >
            Barcha yangiliklar <FiArrowUpRight />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        ></div>
        <div className="blog">
          <div className="blog_container">
            <div className="outer">
              <div className="flex-container" id="flex-container">
                <div className="card">
                  <Card sx={{ maxWidth: 345, padding: "1rem" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blogImg}
                        alt="green iguana"
                      />
                      <div className="flex flex-row justify-start items-center px-6">
                        <TbCalendarEvent />
                        <CardHeader
                          className=""
                          subheader={new Date().toLocaleDateString()}
                        ></CardHeader>
                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="p">
                          Название новости находится в этом разделе
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Появится краткий текст о новостях. Текст будет
                          состоять примерно из 4 строк. И этот текст может
                          состоять почти из 100 букв. опять не знаю
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div className="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blogImg}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blogImg}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blogImg}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blogImg}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          style={{
            // display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            // margin: "2rem 0",
            width: "200px",
            height: "30px",
            padding: "20px 24px",
            color: "rgba(239, 127, 26, 1)",
            border: "1px solid rgba(239, 127, 26, 1)",
            borderRadius: "100px",
          }}
          className="more flex lg:hidden my-2rem mx-auto"
          href="#"
        >
          Barcha yangiliklar <FiArrowUpRight />
        </a>
      </div>
    );
  }
}

export default Blog;
