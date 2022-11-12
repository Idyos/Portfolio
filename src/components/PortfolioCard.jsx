import styles from "./portfoliocard.module.css";

function PortfolioCard({ valor }) {

  return (
      <div className={styles.portwrapper}  >
        <img src={valor.thumbnail} alt="" className={styles.bgimg} />
        <div className={styles.porthover}>
          <div className={styles.porttext}>
            <h1>{valor.name}</h1>
            <h5>{valor.year}</h5>
          </div>
        </div>
      </div>
  );
}

export default PortfolioCard;
