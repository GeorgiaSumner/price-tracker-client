import React, { useState } from "react";
import "./App.css";
import Search from "./components/SearchBar.js";
import SubmitButton from "./components/SubmitButton.js";
import CardList from "./components/CardList.js";
import PriceTotals from "./components/PriceTotals";
function App() {
  const [searchTerm, setSearch] = useState("");
  const [prices, setPrices] = useState([]);

  return (
    <div className="app-container">
      <div className="search-components">
        <Search setSearch={setSearch} />
        <SubmitButton searchTerm={searchTerm} setPrices={setPrices} />
      </div>

      <CardList prices={prices} />
      <PriceTotals prices={prices} />
    </div>
  );
}

export default App;
