import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUsPage from "../pages/AboutUsPage";
import AccountBookPage from "../pages/AccountBookPage";
import ContactUsPage from "../pages/ContactUsPage";
<<<<<<< Updated upstream
import ClintPortal from "../pages/clintportal";



=======
import StockMarketPage from "../pages/StockMarketPage";
>>>>>>> Stashed changes

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/accountbook" element={<AccountBookPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
<<<<<<< Updated upstream
      <Route path="/clintportal" element={<ClintPortal/>} />
=======
      <Route path="/stockmarket" element={<StockMarketPage />} />
>>>>>>> Stashed changes
    </Routes>
  );
}
