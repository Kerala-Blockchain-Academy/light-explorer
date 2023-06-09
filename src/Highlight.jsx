import { useEffect, useState } from "react";
import background from './background.jpg'
import Table from "./Table";
import styles from "./style/Home.module.css";
import { useNavigate  } from "react-router-dom";



function Highlight(){
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    async function changeHandler(e){
        setSearchInput(e.target.value);
      };
    async function handleSearch(){
        console.log(searchInput.length)
        if(searchInput.length===64 || searchInput.length === 66)
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
        <section className={styles.searchContainer}>
        <section className={styles.searchHeader}>
          <section className={styles.searchSection}>
            <section className={styles.input_section}>
              <input
                className={styles.inputField}
                type="text"
                id="inputField"
                name="inputField"
                maxLength="120"
                placeholder="Search by Txn Hash / Block Number"
                required
                onChange={changeHandler}
              />
              <button className={styles.btn} onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.magnifying}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </section>
            <Table />
          </section>
          
        </section>
        
      </section>

    )
}

export default Highlight;