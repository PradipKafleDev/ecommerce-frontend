import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
