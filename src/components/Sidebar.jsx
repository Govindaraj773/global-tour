import Logo from './Logo'
import App from '../App'
import styles from "./Sidebar.module.css";
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        {/* <p>Number of cities</p> */}
        <Outlet />
        <footer className={styles.footer}>
          <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by Global Tour Pvt Ltd </p>
        </footer>
    </div>
  )
}

export default Sidebar;