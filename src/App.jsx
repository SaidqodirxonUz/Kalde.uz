import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";
import About from "./pages/about_us/About";
import Product_info from "./pages/product_info/product_info";
import News from "./pages/news/news";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalog" element={<Our_products />} />
        <Route path="/product/:id" element={<Product_info />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
