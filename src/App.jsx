import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";
import About from "./pages/about_us/About";
import Product_info from "./pages/product_info/product_info";
import News from "./pages/news/news";
import News_info from "./pages/news_info/news_info";
import Filial from "./pages/filial/filial";
import Contact_filial from "./pages/contact-filial/contact";
import Advantages from "./pages/advantages/advantages";
import NotFound from "./pages/404page/404";
import Dev from "./components/dev/dev";
// import ContactUs from "./pages/contact/contact";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalog" element={<Our_products />} />
        <Route path="/product/:id" element={<Product_info />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<News_info />} />
        <Route path="/contact" element={<Filial />} />
        <Route path="/contact/:id" element={<Contact_filial />} />
        <Route path="/advantages" element={<Advantages />} />

        <Route path="/dev" element={<Dev />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
