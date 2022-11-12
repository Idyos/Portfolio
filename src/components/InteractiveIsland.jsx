import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import  styles from "./interactiveIsland.module.css";
import React from "react";

function IntIsland({reference}) {





  function pressToScroll(number) {
    switch (number) {
      case 0:
        document.querySelector(".one").scrollIntoView();
        break;
      case 1:
        document.querySelector(".two").scrollIntoView();
        break;
      case 2:
        document.querySelector(".three").scrollIntoView();
        break;
      case 3:
        document.querySelector(".four").scrollIntoView();
        break;
      default:
        document.querySelector(".one").scrollIntoView();
        break;
    }
  }

  return (
    <div className={styles.island2}>
      <FontAwesomeIcon icon={faAnglesUp} className={styles.updown}/>
      <FontAwesomeIcon
        icon={faHouseUser}
        onClick={()=>{pressToScroll(0)}}
        className={styles.position}
      />
      <FontAwesomeIcon
        icon={faSchool}
        onClick={()=>{pressToScroll(1)}}
      />
      <FontAwesomeIcon
        icon={faBook}
        onClick={()=>{pressToScroll(2)}}
      />
      <FontAwesomeIcon
        icon={faAddressCard}
        onClick={()=>{pressToScroll(3)}}
      />
      <FontAwesomeIcon icon={faAnglesDown} className={styles.updown}/>
    </div>
  );
}

export default IntIsland;
