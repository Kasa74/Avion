import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutPage } from "./Pages/AboutPage";
import { ProductListingsPage } from "./Pages/ProductListingsPage";
import { ProductListingPage } from "./Pages/ProductListingPage";
import { CartPage } from "./Pages/CartPage";
import { ContactPage } from "./Pages/ContactPage";
import { ProfilePage } from "./Pages/ProfilePage";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/catalog" element={<ProductListingsPage />} />
      <Route path="/item/:id" element={<ProductListingPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
);
