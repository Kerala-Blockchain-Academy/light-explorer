import { useEffect, useState } from "react";
import background from './background.jpg'
import Table from "./Table";
import styles from "./style/Home.module.css";
import { useNavigate  } from "react-router-dom";
// import { useHistory } from "react-router";


function Highlight(){
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    async function changeHandler(e){
        setSearchInput(e.target.value);
      };
    async function handleSearch(){
        console.log(searchInput.length)
        if(searchInput.length==64 || searchInput.length == 66)
        {
            console.log("hai",searchInput);
            navigate('/transdetails/'+searchInput, { state: searchInput  });}
        else{
            let hexStr =  Number(searchInput).toString(16);
                hexStr= "0x"+ hexStr
             console.log(hexStr);
            
            console.log("hello",Number(searchInput))
            navigate("/blockdetails/"+hexStr, { state: hexStr  });
        }
    }
    
    
    return (
        <div className={styles.header} >
    
            <div >
        
        <div className={styles.container}>
        
        <input
            className={styles.inputField}
            type="text"
            id="inputField"
            name="inputField"
            maxLength="120"
            placeholder="Search by Txn Hash / Block "
            required
            onChange={changeHandler}
          />
           <button className={styles.btn} onClick={handleSearch}>Search</button>
           </div>
        </div>
        

        <Table />
    </div>

    )
}

export default Highlight;