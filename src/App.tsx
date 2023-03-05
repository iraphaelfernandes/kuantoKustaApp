import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// importing components
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route index element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route  path="/shop/:category/:productID" element={<ProductDetail />}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
