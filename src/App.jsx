import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import Data from "./components/Data/Data";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(Data);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategoryFilter(value);
  };

  useEffect(() => {
    const filtered = categoryFilter
      ? Data.filter((item) => item.category === categoryFilter)
      : Data;
    setFilteredProduct(filtered);
  }, [categoryFilter]);

  return (
    <div className="main-wrapper">
      <div className="filter-label">
        <label htmlFor="category">
          <h3>Filter category:</h3>
        </label>
        <select
          id="category"
          className="label-section"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="mobile">Mobile</option>
          <option value="Pad">Pad</option>
          <option value="earphones">EarPhones</option>
          <option value="laptop">LapTops</option>
        </select>
      </div>
      <div className="Product-con">
        <div className="Product-Page">
          {filteredProduct.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
