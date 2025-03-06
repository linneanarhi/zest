
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SearchResult from './pages/Home/SearchResult';
import ShoppingCart from './pages/Home/ShoppingCart';
import Checkout from './pages/Home/Checkout';
import AdminProducts from './pages/Admin/AdminProducts';
import New from './pages/Admin/New';
import 'typeface-roboto';
import { BrowserRouter, Routes, Route} from 'react-router';

function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/productdetails/:productName" element={<ProductDetails />} />
          <Route path="/searchresult/:slug" element={<SearchResult />} />
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

