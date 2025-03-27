import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUsPage from "../pages/AboutUsPage";
import AccountBookPage from "../pages/AccountBookPage";
import ContactUsPage from "../pages/ContactUsPage";
import Detail from "../pages/Detail"; // Ensure this component exists

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/accountbook" element={<AccountBookPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
    </Routes>
  );
}
