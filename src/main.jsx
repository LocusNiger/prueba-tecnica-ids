import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource-variable/azeret-mono";
import "@fontsource-variable/manrope";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
