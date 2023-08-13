import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Button from "@mui/material/Button";
// import Sidebar from "./components/sidebar/sidebar";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";
import About from "./pages/about_us/About";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Our_products />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
