import { useRef } from "react";
import styles from "./portfoliocardphoto.module.css";

function PortfolioCardPhoto({ valor, childToParent}) {
  const img = useRef();
  
  function imgResults() {
    if(img.current.width>=6000){
      childToParent();
    }
  }

   

  return (
      <div className={`${styles.portwrapper} ${valor.dimensions==="tall" ? styles.tall : styles.wide}`}>
        <img src={valor.file} alt="" className={styles.bgimg} ref={img} onLoad={imgResults} loading="lazy"/>
      </div>
  );
}

export default PortfolioCardPhoto;
