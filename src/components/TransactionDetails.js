import styles from "../assets/styles/Home.module.css";
import { useLocation, useNavigate } from 'react-router-dom';

const TransDetails = () => {
    const location = useLocation();
    const state = location.state;
    const tnsDetails = state.tnsState

    const navigate = useNavigate();

    const hexToDecimal = hex => parseInt(hex, 16);
    const blockNumber = hexToDecimal(tnsDetails.blockNumber)
    const chainId = hexToDecimal(tnsDetails.chainId)
    const gas = hexToDecimal(tnsDetails.gas)
    const gasPrice = hexToDecimal(tnsDetails.gasPrice)
    const maxFee = hexToDecimal(tnsDetails.maxFeePerGas)
    const maxPriority = hexToDecimal(tnsDetails.maxPriorityFeePerGas)
    const value = hexToDecimal(tnsDetails.value)

    function backClick() {
        navigate("/blockdetails/" + tnsDetails.blockNumber)
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
                            <td>{tnsDetails.hash}</td>
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
                            <td>{tnsDetails.from}</td>
                        </tr>
                        <tr>
                            <td>To:</td>
                            <td>{tnsDetails.to} </td>
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
                            <td>{tnsDetails.v}</td>
                        </tr>
                        <tr>
                            <td> r:</td>
                            <td>{tnsDetails.r}</td>
                        </tr>
                        <tr>
                            <td>s:</td>
                            <td>{tnsDetails.s}</td>
                        </tr>
                        <tr>
                            <td>Input:</td>
                            <td>
                                <textarea id="json-text-area" rows="4" cols="50" name="input">{tnsDetails.input}</textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TransDetails;