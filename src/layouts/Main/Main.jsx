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
      });
  }, []);

  const changeStatus = async (e, application, status) => {
    e.preventDefault();

    const appInfo = {
      company: application.company,
      name: application.name,
      place: application.place,
      work: application.work,
      date: application.date,
      status: status,
    };
    try {
      const response = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${application.id}`,
        appInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Search />
      <Cards applications={applications} changeStatus={changeStatus} />
    </div>
  );
};

export default Main;
