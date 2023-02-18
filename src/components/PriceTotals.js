import React, { useState, useEffect } from "react";

const PriceTotals = ({prices}) => {

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
        for (let i = 0; i < prices.length; i++) {
          if (prices[i].store === "fabarmory") {
            fabarmoryPriceList.push(prices[i].price);
    
            setFabarmoryTotal(
              fabarmoryPriceList.reduce((total, val) => total + val)
            );
          }
    
          if (prices[i].store === "cardmerchant") {
            cardmerchantPriceList.push(prices[i].price);
    
            setCardmerchantTotal(
              cardmerchantPriceList.reduce((total, val) => total + val)
            );
          }
    
          if (prices[i].store === "sushiknight") {
            sushiknightPriceList.push(prices[i].price);
    
            setSushiknightTotal(
              sushiknightPriceList.reduce((total, val) => total + val)
            );
          }
    
          if (prices[i].store === "shufflencut") {
            const float = parseFloat(prices[i].price);
            shufflencutPriceList.push(float);
    
            setShufflencutTotal(
              shufflencutPriceList.reduce((total, val) => total + val)
            );
          }
    
          if (prices[i].store === "tcgculture") {
            tcgculturePriceList.push(prices[i].price);
    
            setTcgcultureTotal(
              tcgculturePriceList.reduce((total, val) => total + val)
            );
          }
        }
      }, [prices]);

    return(
        <ul className="total_list" >
                 <li>Fab Armory Total:{fabarmoryTotal}</li>
      <li>Card Merchant Total:{cardmerchantTotal}</li>
      <li>Shuffle n Cut Total:{shufflencutTotal}</li>
      <li>Sushi Knight Total:{sushiknightTotal}</li>
      <li>TCG Culture Total:{tcgcultureTotal}</li> 
        </ul>
    )
}

export default PriceTotals