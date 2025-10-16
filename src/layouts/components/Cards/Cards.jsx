import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({ applications }) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
        <Card application={application}  />
      ))}
    </div>
  );
};

export default Cards;
