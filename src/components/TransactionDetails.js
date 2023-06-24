import styles from "../assets/styles/Home.module.css";
import {  useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Tooltip from "./Tooltip";

const TransDetails = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { thash } = useParams();
    const navigate = useNavigate();
    const [transData, setTransData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function TransD() {
            const data = {

                "jsonrpc": "2.0",
                "method": "eth_getTransactionByHash",
                "params": [
                    thash
                ],
                "id": 1
            }
            let transData1 = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            transData1 = await transData1.json();
            setTransData(transData1.result);
            setLoading(false)
        }
      
        TransD();
      }, []);
      

    const hexToDecimal = hex => parseInt(hex, 16);
    const blockNumber = hexToDecimal(transData.blockNumber)
    const chainId = hexToDecimal(transData.chainId)
    const gas = hexToDecimal(transData.gas)
    const gasPrice = parseFloat((hexToDecimal(transData.gasPrice) * 10**-9).toFixed(10))
    const maxFee = hexToDecimal(transData.maxFeePerGas)
    const maxPriority = hexToDecimal(transData.maxPriorityFeePerGas)
    const value = hexToDecimal(transData.value)


    function backClick() {
        navigate("/blockdetails/" + transData.blockNumber)
    }
    console.log("infinity loop check")

if(loading){
    return(
        <Loader />
    );
}

    return (
        <>
            {/* back arrow */}
            <div className={styles.arrow} onClick={backClick}></div>

            <div className={styles.table_container}>
                <table className={styles.table}>
                    <h2>Transaction Details</h2>
                    <tbody>
                        <tr>
                            <td>
                            <Tooltip text="A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed." />
                                Transaction Hash:</td>
                            <td>{transData.hash}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced." />
                                Block:</td>
                            <td>{blockNumber}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                ChainID:</td>
                            <td>{chainId}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="The sending party of the transaction." />
                                From:</td>
                            <td>{transData.from}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="The receiving party of the transaction (could be a contract address)." />
                                To:</td>
                            <td>{transData.to} </td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values." />
                                Gas Limit:</td>
                            <td>{gas}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="Cost per unit of gas spent for the transaction, in Ether and Gwei." />
                                Gas Price:</td>
                            <td>{gasPrice} Gwei</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                MaxFeePerGas:</td>
                            <td>{maxFee} Wei</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                MaxPriorityFeePerGas:</td>
                            <td>{maxPriority} Wei</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="The value being transacted in Ether and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction." />
                                Value:</td>
                            <td>{value}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                v:</td>
                            <td>{transData.v}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                r:</td>
                            <td>{transData.r}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="this is tool tip" />
                                s:</td>
                            <td>{transData.s}</td>
                        </tr>
                        <tr>
                            <td>
                            <Tooltip text="Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient." />
                                Input Data:</td>
                            <td class={styles.data_cell}>
                                <div>{transData.input}</div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TransDetails;