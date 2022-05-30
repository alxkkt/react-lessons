// // Создайте сайт с верхним меню, в котором будут такие ссылки:

// Home (адрес="/");
// Products (адрес="/products");
// Products from partners (адрес="/products-partners");
// Contacts (адрес="/contacts");
import NavMenu from "./components/NavMenu";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import PartnersProductsPage from "./components/pages/PartnersProductsPage";
import ContactsPage from "./components/pages/ContactsPage";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products-partners" element={<PartnersProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};

export default App;
