import styles from "../assets/styles/Home.module.css";
import {  useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const TransDetails = () => {

    const { tlk } = useParams();
    const [transData, setTransData] = useState({});

    useEffect(() => { TransD() }, []);

    async function TransD() {
        const data = {

            "jsonrpc": "2.0",
            "method": "eth_getTransactionByHash",
            "params": [
                tlk
            ],
            "id": 1
        }
        let transData1 = await fetch("http://127.0.0.1:8545", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        transData1 = await transData1.json();
        setTransData(transData1.result);

    }

    const navigate = useNavigate();

    const hexToDecimal = hex => parseInt(hex, 16);
    const blockNumber = hexToDecimal(transData.blockNumber)
    const chainId = hexToDecimal(transData.chainId)
    const gas = hexToDecimal(transData.gas)
    const gasPrice = hexToDecimal(transData.gasPrice)
    const maxFee = hexToDecimal(transData.maxFeePerGas)
    const maxPriority = hexToDecimal(transData.maxPriorityFeePerGas)
    const value = hexToDecimal(transData.value)


    function backClick() {
        navigate("/blockdetails/" + transData.blockNumber)
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
                            <td>Transaction Hash:</td>
                            <td>{transData.hash}</td>
                        </tr>
                        <tr>
                            <td>Block:</td>
                            <td>{blockNumber}</td>
                        </tr>
                        <tr>
                            <td>ChainID:</td>
                            <td>{chainId}</td>
                        </tr>
                        <tr>
                            <td>From:</td>
                            <td>{transData.from}</td>
                        </tr>
                        <tr>
                            <td>To:</td>
                            <td>{transData.to} </td>
                        </tr>
                        <tr>
                            <td>Gas:</td>
                            <td>{gas}</td>
                        </tr>
                        <tr>
                            <td>Gas Price:</td>
                            <td>{gasPrice} Gwei</td>
                        </tr>
                        <tr>
                            <td>MaxFeePerGas:</td>
                            <td>{maxFee} Wei</td>
                        </tr>
                        <tr>
                            <td>MaxPriorityFeePerGas:</td>
                            <td>{maxPriority} Wei</td>
                        </tr>
                        <tr>
                            <td>Value:</td>
                            <td>{value}</td>
                        </tr>
                        <tr>
                            <td>v:</td>
                            <td>{transData.v}</td>
                        </tr>
                        <tr>
                            <td> r:</td>
                            <td>{transData.r}</td>
                        </tr>
                        <tr>
                            <td>s:</td>
                            <td>{transData.s}</td>
                        </tr>
                        <tr>
                            <td>Input:</td>
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