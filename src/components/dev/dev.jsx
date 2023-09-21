import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

function Dev() {
  return (
    <>
      <Navbar />
      <div
        style={{ alignContent: "center", marginTop: "10rem" }}
        className="text-blue-400"
      >
        <Link to={"https://t.me/SaidqodirxonRahimov"}>
          <h1 style={{ fontSize: "3em", textAlign: "center" }}>
            #𝒮𝒶𝒾𝒹𝓆𝑜𝒹𝒾𝓇𝓍𝑜𝓃 𝑅𝒶𝒽𝒾𝓂𝑜𝓋 𝒾𝒷𝓃 𝒜𝒷𝒹𝓊𝓁𝓁𝑜{" "}
          </h1>
        </Link>

        <Link to={"https://t.me/Megac0derUz"}>
          <h1 style={{ fontSize: "3em", textAlign: "center" }}>
            Muhammadjon Abduvaxobov
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Dev;
