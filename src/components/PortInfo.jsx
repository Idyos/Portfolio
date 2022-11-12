import styles from "./portinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function PortInfo(props) {

  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupwrapper}>
        <div className={styles.close} onClick={() => props.setTrigger(false)}>
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className={styles.popupdetails}>
          <div className={styles.popupinfo}>
            <h1 style={{"fontSize": "7vh"}}>{props.data.name}</h1>
            <h3 style={{"fontWeight": "normal", "fontSize": "4vh"}}>{props.data.subname}</h3>
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
