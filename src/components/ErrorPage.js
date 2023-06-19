import styles from "../assets/styles/Home.module.css"
const ErrorPage = () => {
    return (

        <div className={styles.errorPage}>
            <div className={styles.errorText}>
            <h1>:(</h1>
            <h2>A <span>404</span> error occured, Block not found, check another block.</h2>
            <h3><a href="/">Return to home</a></h3>
            </div>
        </div>
    )
}

export default ErrorPage;