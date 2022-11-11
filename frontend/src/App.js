import React from "react";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Categories />
      <Products />
    </div>
  );
};

export default App;
