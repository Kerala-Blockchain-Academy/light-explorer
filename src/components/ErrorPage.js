import { useLocation } from 'react-router-dom';
import styles from "../assets/styles/Home.module.css"

const ErrorPage = () => {

    const location = useLocation();
    const { state } = location;

    return (

        <div className={styles.errorPage}>
            <div className={styles.errorText}>
                <h1>:(</h1>
                <h2>A <span>404</span> error occured, Block or Transaction Hash not found.!!</h2>
                <h3><a href="/">Return to home</a>&nbsp;|&nbsp;
                <a href="javascript:history.back()">Go Back</a></h3>
            </div>
        </div>
    );
}

export default ErrorPage;