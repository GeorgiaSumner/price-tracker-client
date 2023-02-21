import React, { useState } from "react";
import api from "../api.js";
import { jsonrepair } from "jsonrepair";
const SubmitButton = ({ searchTerm, setPrices }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const handleSubmission = async () => {
    setIsSearching(true);
    setButtonDisabled(true);

    await api.post("/cardSearch", { searchTerm }).then((res) => {
      setTimeout(() => {
        setIsSearching(false);
        setButtonDisabled(false);
      }, 6500);
      const body = res.data;
      const repaired = jsonrepair(body);

      const parsed = JSON.parse(repaired);
      for (let i = 0; i < parsed.length; i++) {
        if (parsed[i].price == 999999) {
          parsed[i].price = 0;
        }
      }
      setPrices((prices) => [...prices, { card: searchTerm }, ...parsed]);
    });
  };

  return (
    <div>
      <button
        onClick={handleSubmission}
        disabled={buttonDisabled}
        className="submit-button"
      >
        Search
      </button>
      <img
        src={require("../assets/loadingbook.gif")}
        alt="loading icon"
        className={isSearching ? "loading-icon" : "loading-icon-idle"}
      />
    </div>
  );
};

export default SubmitButton;
