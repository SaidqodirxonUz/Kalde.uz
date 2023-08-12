import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Button from "@mui/material/Button";
// import Sidebar from "./components/sidebar/sidebar";
import Main from "./pages/main/main";
import Our_products from "./pages/our_products/Our_products";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Our_products />} />
      </Routes>
    </>
  );
}

export default App;
