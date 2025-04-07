import { Route, Routes, useLocation } from "react-router";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import FAQs from "./pages/FAQs";
import Market from "./pages/Market";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const isMarketRoute = location.pathname === "/market";

  return (
    <>
      {!isMarketRoute && <Header />}
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="market" element={<Market />} />
      </Routes>
      {!isMarketRoute && <Footer />}
    </>
  );
}
