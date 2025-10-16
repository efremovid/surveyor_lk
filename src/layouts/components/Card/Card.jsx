import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Card.module.scss";

const Card = ({ application, changeStatus }) => {
  const date = application.date.split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Огрганизация: {application.company}</p>
        <p>Ответственный: {application.name}</p>
        <p>Вид работы: {application.work}</p>
        <p>Зона работ: {application.place}</p>
        <p>Дата: {date}</p>
        <p>Время: {application.time}</p>
        <label>
          Статус:{" "}
          <select onChange={(e) => changeStatus(e, application, e.target.value)}>
            <option value={application.status}>{application.status}</option>
            <option value="Принято в работу">Принято в работу</option>
            <option value="Выполнено">Выполнено</option>
            <option value="Отклонено">Отклонено</option>
          </select>
        </label>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <MdDeleteForever className={styles.image} />
        </button>
      </div>
    </div>
  );
};

export default Card;
