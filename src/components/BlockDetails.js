import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";


const BlockDetails = () => {

  const navigate = useNavigate();
  const { blk } = useParams();
  console.log("console 1", blk)
  const blkNum = Number(blk);
  const [blockDetails, setBlockDetails] = useState([]);
  const [transDetails, setTransDetails] = useState([]);
  const transJSX = [];

  const apiUrl = process.env.REACT_APP_API_URL;
 

  useEffect(() => {
    async function BlockD() {
      const data1 = {
        "jsonrpc": "2.0",
        "method": "eth_blockNumber",
        "params": [],
        "id": 1
      };
  
      let res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      })
  
      res = await res.json();
  
      const latestBlk = await res.result;
      const hexToDecimal = hex => parseInt(hex, 16);
      const blkDec = hexToDecimal(latestBlk);
  
      if (blkNum > blkDec) {
     
        navigate("/errorpage");
      }
      else {
        const data = {
          "jsonrpc": "2.0",
          "method": "eth_getBlockByNumber",
          "params": [
            blkNum,
            true
          ],
          "id": 1
        };
  
        let blockData = await fetch("http://127.0.0.1:8545", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        blockData = await blockData.json();
        setBlockDetails(blockData.result)
        setTransDetails(blockData.result.transactions)
  
      };
    }
  
    BlockD();
  }, []);
  


  // for getting transaction details
  for (var i = 0; i < transDetails.length; i++) {
    transJSX.push(transDetails[i]);
  }

  const hexToDecimal = hex => parseInt(hex, 16);

  const size = hexToDecimal(blockDetails.size);
  const gas = hexToDecimal(blockDetails.gasUsed);
  const difficulty = hexToDecimal(blockDetails.difficulty);
  const gasLimit = hexToDecimal(blockDetails.gasLimit);
  const totDifficulty = hexToDecimal(blockDetails.totalDifficulty);


  // timestamp format conversion
  const timestamp = hexToDecimal(blockDetails.timestamp);
  const currentTimestamp = Math.floor(Date.now() / 1000);
  var timeDifference = Math.floor(currentTimestamp - timestamp);
  if (timeDifference < 60) {
    timeDifference = timeDifference + "sec"
  }
  else if (timeDifference >= 60 && timeDifference < 3600) {
    console.log("Time difference in minutes:", Math.floor(timeDifference / 60));
  }
  else if (timeDifference >= 3600 && timeDifference < 86400) {
    timeDifference = Math.floor(timeDifference / 3600) + " " + "hours ago";
  }
  else {
    timeDifference = Math.floor(timeDifference / 86400) + " " + "days ago";
  }

// back button
function backClick() {
  navigate("/")
}
console.log("infinity loop check")
  return (
    <>

      <div className={styles.arrow} onClick={backClick}></div>

      <div className={styles.table_container}>
        <table className={styles.table}>
          <h2>Block Details</h2>
          <tbody>
            <tr>
              <td>Block Height:</td>
              <td>{blkNum}</td>
            </tr>
            <tr>
              <td>Block Hash:</td>
              <td>{blockDetails.hash}</td>
            </tr>
            <tr>
              <td>Block timestamp:</td>
              <td>{timeDifference}</td>
            </tr>
            <tr>
              <td>Transactions:</td>
              <td>{transDetails.length}</td>
            </tr>
            <tr>
              <td>Size:</td>
              <td>{size} bytes</td>
            </tr>
            <tr>
              <td>Difficulty:</td>
              <td>{difficulty}</td>
            </tr>
            <tr>
              <td>Miner:</td>
              <td>{blockDetails.miner}</td>
            </tr>
            <tr>
              <td>Gas:</td>
              <td>{gas} Wei</td>
            </tr>
            <tr>
              <td>Gas Limit:</td>
              <td>{gasLimit} Wei</td>
            </tr>
            <tr>
              <td>Nonce:</td>
              <td>{blockDetails.nonce}</td>
            </tr>
            <tr>
              <td>Total Difficulty:</td>
              <td>{totDifficulty}</td>
            </tr>
            <tr>
              <td>Parent Hash:</td>
              <td>{blockDetails.parentHash}</td>
            </tr>
            <tr>
              <td>Receipts Root:</td>
              <td>{blockDetails.receiptsRoot}</td>
            </tr>
            <tr>
              <td>State Root:</td>
              <td>{blockDetails.stateRoot}</td>
            </tr>
            <tr>
              <td>Sha3Uncles:</td>
              <td>{blockDetails.sha3Uncles}</td>
            </tr>

          </tbody>
        </table>

        {/* transactions */}
        <div className={styles.table_container}>
          <h2>Transactions</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Index</th>
                <th>Hash</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>

            {/* const transHash = latestTrans.hash ? latestTrans.hash.slice(0, 25) : ""; */}

            {transJSX.map((tns, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td><Link className={styles.link} to={'/transdetails/' + tns.hash} state={{ tnsState: tns }}>{tns.hash ? tns.hash.slice(0, 25): ""}...</Link> </td>
                    <td>{tns.from ? tns.from.slice(0,25) : ""}...</td>
                    <td>{tns.to ? tns.to.slice(0,25) : ""}...</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default BlockDetails;