import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Button from "@mui/material/Button";
// import Sidebar from "./components/sidebar/sidebar";
import Main from "./pages/main/main";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
