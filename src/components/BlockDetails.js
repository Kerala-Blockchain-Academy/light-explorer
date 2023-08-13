import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";
import Loader from "./Loader";
import Tooltip from "./Tooltip";

const BlockDetails = () => {

  const navigate = useNavigate();
  const { blk } = useParams();
  const [loading, setLoading] = useState(true);


  const blkNum = Number(blk);
  const [blockDetails, setBlockDetails] = useState([]);
  const [transDetails, setTransDetails] = useState([]);
  const transJSX = [];

  const apiUrl = process.env.REACT_APP_API_URL;

  // back button
  function backClick() {
    navigate("/")
  }

  useEffect(() => {
    async function BlockD() {

      try {
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
              blk,
              true
            ],
            "id": 1
          }

          let blockData = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          blockData = await blockData.json();

          setBlockDetails(blockData.result)
          setTransDetails(blockData.result.transactions)
          setLoading(false);
        }

      } catch (error) {
        console.log("An error occured while fetching from RPC url", error)
        setLoading(false);
      }

    }

    BlockD();
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  // for getting transaction details
  for (var i = 0; i < transDetails.length; i++) {
    transJSX.push(transDetails[i]);
  }

  const hexToDecimal = hex => parseInt(hex, 16);

  const size = hexToDecimal(blockDetails.size);
  console.log("sizeeee", blockDetails)

  const gas = hexToDecimal(blockDetails.gasUsed);
  const difficulty = hexToDecimal(blockDetails.difficulty);
  const gasLimit = hexToDecimal(blockDetails.gasLimit);
  const baseFeePerGas = parseFloat((hexToDecimal(blockDetails.baseFeePerGas) * 10**-9).toFixed(10))
  const totDifficulty = hexToDecimal(blockDetails.totalDifficulty);


  // timestamp format conversion
  const timestamp = hexToDecimal(blockDetails.timestamp);
  const currentTimestamp = Math.floor(Date.now() / 1000);
  var timeDifference = Math.floor(currentTimestamp - timestamp);
  if (timeDifference < 60) {
    timeDifference = timeDifference + " sec"
  }
  else if (timeDifference >= 60 && timeDifference < 3600) {
    console.log("Time difference in minutes:", Math.floor(timeDifference / 60));
  }
  else if (timeDifference >= 3600 && timeDifference < 86400) {
    timeDifference = Math.floor(timeDifference / 3600) + " hours ago";
  }
  else {
    timeDifference = Math.floor(timeDifference / 86400)  + " days ago";
  }

  // console.log("infinite loop check")

  return (
    <>
     
      <div className={styles.arrow} onClick={backClick}></div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <h2>Block Details</h2>
          <tbody>

            <tr>
              <td>
              <Tooltip text="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block." />
              Block Height:</td>
              <td>{blkNum}</td>
            </tr>

            <tr>
              <td>
              <Tooltip text="The hash of the block header of the current block."/>
              Block Hash:</td>
              <td>{blockDetails.hash}</td>
            </tr>

            <tr>
              <td>
              <Tooltip text="The date and time at which a block is produced." />
              Timestamp:</td>
              <td>{timeDifference}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves Ether value." />
              Transactions:</td>
              <td>{transDetails.length}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The block size is actually determined by the block's gas limit." />
              Size:</td>
              <td>{size} bytes</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time." />
              Difficulty:</td>
              <td>{difficulty}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="Address receiving fees from transactions in this block."></Tooltip>
              Miner:</td>
              <td>{blockDetails.miner}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The total gas used in the block and its percentage of gas filled in the block." />
              Gas Used:</td>
              <td>{gas} Wei</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="Total gas limit provided by all transactions in the block." />
              Gas Limit:</td>
              <td>{gasLimit} Wei</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block. " />
              Base Fee Per Gas:</td>
              {!isNaN(baseFeePerGas) ? 
              <td>{baseFeePerGas} GWei</td> : <td>Not Available</td>}
            </tr>
            <tr>
              <td>
              <Tooltip text="Block nonce is a value used during mining to demonstrate proof of work for a block." />
              Nonce:</td>
              <td>{blockDetails.nonce}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="Total difficulty of the chain until this block." />
              Total Difficulty:</td>
              <td>{totDifficulty}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The hash of the block from which this block was generated, also known as its parent block." />
              Parent Hash:</td>
              <td>{blockDetails.parentHash}</td>
            </tr>
            {/* <tr>
              <td>
              <Tooltip text="This is a tooltip " />
              Receipts Root:</td>
              <td>{blockDetails.receiptsRoot}</td>
            </tr> */}
            <tr>
              <td>
              <Tooltip text="The root of the state trie." />
              State Root:</td>
              <td>{blockDetails.stateRoot}</td>
            </tr>
            <tr>
              <td>
              <Tooltip text="The mechanism which Ethereum Javascript RLP encodes an empty string." />
              Sha3Uncles:</td>
              <td>{blockDetails.sha3Uncles}</td>
            </tr>

          </tbody>
        </table>

        {/* transactions */}
        {transJSX.length !== 0 ?
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

              {transJSX.map((tns, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td><Link className={styles.link} to={'/transdetails/' + tns.hash} state={{ tnsState: tns }}>{tns.hash ? tns.hash.slice(0, 25) : ""}...</Link> </td>
                      <td>{tns.from ? tns.from.slice(0, 25) : ""}...</td>
                      <td>{tns.to ? tns.to.slice(0, 25) : ""}...</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div> : ""}
      </div>
    </>
  );
}

export default BlockDetails;