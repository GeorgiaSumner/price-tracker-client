import React, { useState, useEffect } from "react";

const PriceTotals = ({ prices }) => {
  const [fabarmoryTotal, setFabarmoryTotal] = useState(0);
  const [cardmerchantTotal, setCardmerchantTotal] = useState(0);
  const [shufflencutTotal, setShufflencutTotal] = useState(0);
  const [sushiknightTotal, setSushiknightTotal] = useState(0);
  const [tcgcultureTotal, setTcgcultureTotal] = useState(0);

  const cardmerchantPriceList = [];
  const fabarmoryPriceList = [];
  const sushiknightPriceList = [];
  const shufflencutPriceList = [];
  const tcgculturePriceList = [];

  useEffect(() => {
    for (const element of prices) {
      if (element.store === "fabarmory" && element.price !== "Out of Stock") {
        fabarmoryPriceList.push(element.price);

        setFabarmoryTotal(
          fabarmoryPriceList.reduce((total, val) => total + val)
        );
      }

      if (
        element.store === "cardmerchant" &&
        element.price !== "Out of Stock"
      ) {
        cardmerchantPriceList.push(element.price);

        setCardmerchantTotal(
          cardmerchantPriceList.reduce((total, val) => total + val)
        );
      }

      if (element.store === "sushiknight" && element.price !== "Out of Stock") {
        sushiknightPriceList.push(element.price);

        setSushiknightTotal(
          sushiknightPriceList.reduce((total, val) => total + val)
        );
      }

      if (element.store === "shufflencut" && element.price !== "Out of Stock") {
        const float = parseFloat(element.price);
        shufflencutPriceList.push(float);

        setShufflencutTotal(
          shufflencutPriceList.reduce((total, val) => total + val)
        );
      }

      if (element.store === "tcgculture" && element.price !== "Out of Stock") {
        tcgculturePriceList.push(element.price);

        setTcgcultureTotal(
          tcgculturePriceList.reduce((total, val) => total + val)
        );
      }
    }
  }, [prices]);

  return (
    <ul className="total-list">
      <li>Fab Armory Total:{fabarmoryTotal}</li>
      <li>Card Merchant Total:{cardmerchantTotal}</li>
      <li>Shuffle n Cut Total:{shufflencutTotal}</li>
      <li>Sushi Knight Total:{sushiknightTotal}</li>
      <li>TCG Culture Total:{tcgcultureTotal}</li>
    </ul>
  );
};

export default PriceTotals;
