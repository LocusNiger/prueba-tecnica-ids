import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource-variable/azeret-mono";
import "@fontsource-variable/manrope";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import FAQs from "./pages/FAQs.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="details" element={<Details />} />
      <Route path="FAQs" element={<FAQs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
