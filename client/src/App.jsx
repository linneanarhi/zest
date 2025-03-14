
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/Product-Details';
import SearchResult from './pages/Home/SearchResult';
import ShoppingCart from './pages/Home/ShoppingCart';
import Checkout from './pages/Home/Checkout';
import AdminProducts from './pages/Admin/AdminProducts';
import New from './pages/Admin/New';
import 'typeface-roboto';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';


function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "ZEST | HOME",
      "/search": " ZEST | SEARCHRESULT",
      "/admin/adminproducts": "ZEST | ADMIN - PRODUCTS",
      "/admin/new": "ZEST | ADD NEW PRODUCT"
    };

    document.title = titles[location.pathname] || "ZEST";
  }, [location]);

  return null; // Komponentens enda uppgift är att sätta titeln
}


function App() {

  return (
    <>


      <BrowserRouter>
      <PageTitle />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/productdetails/:slug" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/adminproducts" element={<AdminProducts />} />
          <Route path="/admin/new" element={<New />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;

