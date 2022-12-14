import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "@/pages/page-layout";
import MainPage from "@/pages/main-page";
import HistoryPage from "@/pages/history-page";
import SacredPage from "@/pages/sacred-page";
import SuperiorPage from "@/pages/superior-page";
import ContactsPage from "@/pages/contacts-page";
import TrebsPage from "@/pages/trebs-page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/sacred" element={<SacredPage />} />
          <Route path="/superior" element={<SuperiorPage />} />
          <Route path="/orders" element={<div>Orders Page</div>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/trebs" element={<TrebsPage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
