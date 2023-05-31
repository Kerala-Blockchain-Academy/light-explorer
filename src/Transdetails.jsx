
import {useEffect,useState} from "react";
import { Link, Outlet, useLocation,useNavigate,useParams } from "react-router-dom";
import styles from "./style/Home.module.css";

function Transdetails(props){
  const navigate = useNavigate();
  const { tlk }  = useParams();
    const [isMounted, setIsMounted] = useState(false);
    // const location = useLocation();
    // const propsData1 = location.state;
    const [transData,setTransData] = useState([]);
    
    
    useEffect(() => { TransD() }, []);

    
    async function TransD(){
      console.log("WHAT")
      console.log("TLK",tlk);
      
        const data =  {
            
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
          })
          transData1= await transData1.json();
          console.log("hello")
        //   console.log(transData.result);
          setTransData(transData1);
        setIsMounted(true)
        
    }
    if(isMounted){

      console.log("hai");
    console.log("TransResult",transData.result);
    if(transData.result === null)
    {
      console.log("Dont go")
      navigate("/errorpage2", { state: tlk  });
    }
    else{
     const hexToDecimal = hex => parseInt(hex, 16);
     const blockNum = hexToDecimal(transData.result.blockNumber);
     console.log(blockNum);
     const chainid = hexToDecimal(transData.result.chainId);
     const gas = hexToDecimal(transData.result.gas);
     const gasPrice = hexToDecimal(transData.result.gasPrice);
      const maxfee = hexToDecimal(transData.result.maxFeePerGas);
      const maxpriority = hexToDecimal(transData.result.maxPriorityFeePerGas);
      const value = hexToDecimal(transData.result.value);
      // const input = hexToDecimal(transData.result.input);
    return(
        <div> <h2>Transaction Details</h2>
          <table className={styles.transmytable}>
            <tr><td><p>Transactionhash:</p></td><td>{transData.result.hash}</td></tr>
            <tr><td><p>Block:</p></td><td>{blockNum}</td></tr>
           <tr><td><p>ChainID:</p></td><td>{chainid}</td></tr>
            <tr><td><p>From:</p></td><td>{transData.result.from}</td></tr>
            <tr><td><p>To:</p></td><td>{transData.result.to}</td></tr>
            <tr><td><p>Gas:</p></td><td>{gas}</td></tr>
            <tr><td><p>GasPrice:</p></td><td>{gasPrice}  Gwei</td></tr>
            <tr><td><p>MaxFeePerGas:</p></td><td>{maxfee}</td></tr>
            <tr><td><p>MaxPriorityFeePerGas :</p></td><td>{maxpriority}</td></tr> 
            <tr><td><p>Value:</p></td><td>{value} Ethers</td></tr> 
            <tr><td><p>v:</p></td><td>{transData.result.v}</td></tr> 
            <tr><td><p>r: </p></td><td>{transData.result.r}</td></tr>
            <tr><td><p>s:</p></td><td>{transData.result.s}</td></tr> 
            <tr><td><p>Input:</p></td><td>
            <textarea id="json-text-area" rows="4" cols="50" name="input">{transData.result.input}</textarea>
            </td></tr></table>
        </div>
    );
    

}
}
}
export default Transdetails;