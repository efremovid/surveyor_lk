import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";
import axios from "axios";

const Main = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  }, []);


  return (
    <div className={styles.container}>
      <Search />
      <Cards applications={applications}/>
    </div>
  );
};

export default Main;
