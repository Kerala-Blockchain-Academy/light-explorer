import styles from "../assets/styles/Home.module.css"
import { Link} from "react-router-dom";
const Header = () => {

  return (
<div className={styles.nav}>
<Link to="/" className={styles.link}>
<div className={styles.logo}>
  <h1>BL&#x1F50D;CK VIEWER</h1>
    </div>
    </Link>
</div>


  )
}

export default Header;