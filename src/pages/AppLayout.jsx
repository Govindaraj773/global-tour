// import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
        <Sidebar />
        <Map />
        
    </div>
  )
}

export default AppLayout;