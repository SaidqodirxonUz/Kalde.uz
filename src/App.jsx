import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";
import About from "./pages/about_us/About";
import Product_info from "./pages/product_info/product_info";
// import About from "./pages/about_us/About";
// import Our_products from "./pages/our_products/Our_products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Our_products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/product" element={<Product_info />} />
      </Routes>
    </>
  );
}

export default App;
