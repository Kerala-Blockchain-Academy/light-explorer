import {useEffect,useState} from "react";
import { Outlet ,Link,useLocation} from "react-router-dom";

function Transactions(props){
   const [isMounted, setIsMounted] = useState(false);
    const location = useLocation();
    const propsData = location.state;
     const length = propsData.transactions.length;
     console.log(length)
     
     const transJSX = [];
   //   useEffect(() => { Trans() }, []);
     
   //   async function Trans(){
     
     
   //   for (var i = 0; i < length; i++) {
   //    const hash = await propsData.transactions[i].hash;
   //    console.log("Hash",hash);
   //    await transJSX.push(hash);
   //  }
   //  for (var i = 0; i < length; i++) {
   //    const hash = await propsData.transactions[i].hash;
   //    console.log("Hash",hash);
   //    await transJSX.push(hash);

   //  console.log ("Trans",transJSX)
   // setIsMounted(true)
   // }
   for (var i = 0; i < length; i++) {
      const hash =  propsData.transactions[i].hash;
      console.log("Hash",hash);
       transJSX.push(hash);}
   
      console.log ("TransTrans",transJSX)
    return(
        <div>
           <table>
            <thead></thead>
            <tbody>

           <tr>
              <th>Transaction Hash</th>

           </tr>
           
           {transJSX.map((tlk) => {
            console.log("hello")
            console.log("TLK",tlk);
            return(
               <tr>
                  <td>
                     <div key={tlk}>
               <Link to={'/transdetails/'+tlk}>{tlk}</Link></div>
               </td></tr>
            )
               })}
           
        
           </tbody>
          </table>
        </div>
    );
            
}
export default Transactions;