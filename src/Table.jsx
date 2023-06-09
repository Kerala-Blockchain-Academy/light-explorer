import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style/Home.module.css";

function Table() {

  const [isMounted, setIsMounted] = useState(false);
  const [block, setBlock] = useState();
  const [showResult, setShowResult] = useState(true);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const { blk } = "5";

  var lblk;
  const [blockdetails, setblockdetails] = useState([]);
  const [transCount, settransCount] = useState();

  const blocksJSX = [];
  const parameter = "1";
  const data1 = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
  };

  useEffect(() => {
    Genis();
    BlockD();
  }, []);

  async function Genis() {

    let res = await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    res = await res.json();

    console.log(res)
    const hexToDecimal = hex => parseInt(hex, 16);
    const dec1 = hexToDecimal(res.result);
    console.log(dec1);

    setBlock(dec1);
    setIsMounted(true);

  }


  //// code from translayout////

  async function BlockD() {

    const blk1 = Number(blk);
    console.log("BLK", blk1)
    const data1 = {
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    };
    let res = await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
    res = await res.json();

    lblk = await res.result;
    console.log("Largest Hex", lblk);
    const hexToDecimal = hex => parseInt(hex, 16);
    const dec1 = hexToDecimal(lblk);
    // console.log("Largest",dec1);
    if (blk1 > dec1) {
      console.log("hiiii")
      navigate("/errorpage", { state: blk });
    }
    else {

      const data = await {
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": [
          blk1,
          true
        ],
        "id": 1
      }
      const data2 = {

        "jsonrpc": "2.0",
        "method": "eth_getBlockTransactionCountByNumber",
        "params": [
          blk1
        ],
        "id": 1
      }
      let blockData = await fetch("http://127.0.0.1:8545", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      blockData = await blockData.json();
      setblockdetails(blockData.result)
      console.log("BDDDD", blockdetails);


      let trans = await fetch("http://127.0.0.1:8545", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      });
      trans = await trans.json();
      settransCount(trans.result);
      setIsMounted(true)
      // console.log(trans.result);

    }
  }


  if (isMounted) {
    console.log("bloclccc", block);
    for (var i = 0; i < block; i++) {

      const block1 = block - i;
      console.log("blk01", block1);
      blocksJSX.push(block1);
    }

    console.log(blocksJSX)
  }
  console.log(parameter);

  return (
    <section className={styles.heroSectionContainer}>

      <section className={styles.frontDashboard}>
        <section>
          <section>
            <p>Latest Block</p>
          </section>
          <section>
            <p>Latest Tranaction</p>
          </section>
        </section>
      </section>

    </section>
  );

}

export default Table;