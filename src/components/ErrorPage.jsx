import { useLocation } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";
import img from "../assets/images/sad.png"

const ErrorPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorText}>
        <img src={img} alt="Error Illustration" className={styles.errorImage} />
        <h1>404</h1>
        <h2>Oops! The Block or Transaction Hash not found.!!</h2>
        <p>
          {state?.message || "We couldn't find the page you were looking for."}
        </p>
        <div className={styles.buttons}>
          <a href="/" className={styles.btn}>
            Return Home
          </a>
          <button
            onClick={() => window.history.back()}
            className={styles.btnOutline}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
