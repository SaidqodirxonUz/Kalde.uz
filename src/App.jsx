import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";
import About from "./pages/about_us/About";
// import About from "./pages/about_us/About";
// import Our_products from "./pages/our_products/Our_products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalog" element={<Our_products />} />
      </Routes>
    </>
  );
}

export default App;
