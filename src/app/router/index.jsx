import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main-page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/history" element={<div>History Page</div>} />
        <Route path="/sacred" element={<div>Sacred Page</div>} />
        <Route path="/superior" element={<div>Superior Page</div>} />
        <Route path="/orders" element={<div>Orders Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
