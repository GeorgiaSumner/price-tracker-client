import React from "react";
import api from "../api.js";
import { jsonrepair } from "jsonrepair";
const SubmitButton = ({ searchTerm, setPrices }) => {
  const handleSubmission = async () => {
    await api.post("/cardSearch", { searchTerm }).then((res) => {
      console.log(res);
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
      <button onClick={handleSubmission}>Submit</button>
    </div>
  );
};

export default SubmitButton;
