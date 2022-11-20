import { portfolio } from "../data/portinfo.js";
import styles from "./portfoliogrid.module.css";
import PortfolioCardPhoto from "./PortfolioCardPhoto";
import { useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import { useEffect } from "react";

function PortfolioGrid(props) {
  const photoItem = useRef();

  const childToParent = () => {
    photoItem.current.classList.add(styles.wide);
  }

  useEffect(() => {
    console.log(props.ref);
  })


  switch (props.type) {
    case 1:
      return (

        <ul className={styles.portGrid} >

          {portfolio[0].video.map((info, index) => {
            return (
              <li key={info.id} className={styles.portlist} id="listaportfolio" onClick={() => { props.setTrigger(true); props.setData(info); props.setAllData(portfolio[0].video); props.setDataType(0) }}>
                <PortfolioCard valor={info} />
              </li>
            );
          })}
        </ul>
      );
    case 2:
      return (
        <ul className={styles.portGridPhoto}>
          {portfolio[1].photography.map((info) => {
            return (
              <li key={info.id}  id="listaportfolio" onClick={() => { props.setTrigger(true); props.setData(info); props.setAllData(portfolio[1].photography); props.setDataType(1) }} className={`${styles.portlist} ${info.dimensions === "ultrawide" ? styles.ultrawide : info.dimensions === "wide" ? styles.wide : styles.tall}`} ref={photoItem} >
                <PortfolioCardPhoto rel="preload" valor={info} childToParent={childToParent} />
              </li>
            );
          })}
        </ul>
      );
    case 3:
      return (
        <ul className={styles.portGrid}>
          <h1>DESIGN</h1>
        </ul>
      );
      case 4:
        return (
          <ul className={styles.portGrid}>
            <h1>3D</h1>
          </ul>
        );
    default:
      break;
  }

}

export default PortfolioGrid;
