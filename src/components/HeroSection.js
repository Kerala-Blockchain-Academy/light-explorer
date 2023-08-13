
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";


const HeroSection = () => {
  const [blockdetails, setblockdetails] = useState([]);
  const [latestTrans, setLatestTrans] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const data = {
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": [
      "latest",
      true],
    "id": 1
  };

  useEffect(() => {
    async function Genis() {

      let blockData = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      blockData = await blockData.json();

      setblockdetails(blockData.result);
      // setTransactions(blockData.result.transactions)
      setLatestTrans(blockData.result.transactions[0])
      setLoading(false);
    }

    Genis();
  }, []);

  const hexToDecimal = hex => parseInt(hex, 16);
  const blockNumber = hexToDecimal(blockdetails.number)
  const blockSize = hexToDecimal(blockdetails.size)

  async function changeHandler(e) {
    setSearchInput(e.target.value);
  };

  async function handleSearch() {
    if (/^(0x)?[0-9A-Fa-f]{64}$/.test(searchInput)) {
      navigate('/transdetails/' + searchInput, { state: searchInput });
    } else if (/^\d+$/.test(searchInput)) {
      let hexStr = Number(searchInput).toString(16);
      hexStr = "0x" + hexStr;
      navigate("/blockdetails/" + hexStr, { state: hexStr });
    } else {
      navigate("/errorpage")
    }
  }

  function blockCard() {
    navigate("/blockdetails/" + blockdetails.number);
  }
  function transCard() {
    navigate("/transdetails/" + latestTrans.hash);
  }

  return (
    <>
      {/* seerch bar */}

      <div className={styles.wrap}>
        <div className={styles.search}>
          <input id="inputField" maxLength="120" onChange={changeHandler} type="text" className={styles.searchTerm} placeholder="Search by Txn Hash / Block Number" />
          <button type="submit" className={styles.searchButton} onClick={handleSearch}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.search_icon}
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* dashboard section */}

      <div className={styles.cards}>
        <div className={styles.card_l}>
          <h1>Latest Block Details</h1>
          {!loading ? 
            <div onClick={blockCard} className={styles.scroller}>
              <span>
                Latest Block : {blockNumber}<br />
                Block Hash : {blockdetails.hash ? blockdetails.hash.slice(0, 25) : ""}...<br />
                Block size : {blockSize} bytes<br />
              </span>
            </div>
          : ""}
        </div>
 
        <div className={styles.card_r}>
          <h1>Latest Transaction Details</h1>
          {!loading ?
            <div onClick={transCard} className={styles.scroller}>
              <span>
                Transaction Hash : {latestTrans.hash ? latestTrans.hash.slice(0, 20) : ""}...<br />
                From : {latestTrans.from ? latestTrans.from.slice(0, 30) : ""}...<br />
                To : {latestTrans.to ? latestTrans.to.slice(0, 30) : ""}...<br />
              </span>
            </div>
          : ""}
        </div>

      </div>
    </>
  );
}

export default HeroSection;