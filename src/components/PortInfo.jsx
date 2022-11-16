import styles from "./portinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function PortInfo(props) {
  useEffect(() => {
    if (props.trigger === true) {
      document.querySelector("#popupwrapper").classList.add(styles.rotated);
    }
  });

  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupwrapper} id="popupwrapper">
        <div
          className={styles.close}
          onClick={() => {
            document
              .querySelector("#popupwrapper")
              .classList.add(styles.rotateout);
            setTimeout(() => {
              props.setTrigger(false);
            }, 1000);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className={styles.popupdetails}>
          <div className={styles.popupinfo}>
            <h1 style={{ fontSize: "4em" }}>{props.data.name}</h1>
            <h3 style={{ fontWeight: "normal", fontSize: "1.5em" }}>
              {props.data.subname}
            </h3>
            <br />
          </div>
          <iframe
            title={props.data.name}
            src={props.data.link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5>{props.data.description}</h5>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PortInfo;
