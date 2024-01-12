import React from "react";
import styles from "./Business.module.css";

function Business(prop) {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <a href={prop.info.url}>
          <img src={prop.info.img_url} alt="" />
        </a>
      </div>
      <h2>{prop.info.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{prop.info.address}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{prop.info.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${prop.info.rating} stars`}</h3>
          <p>{`${prop.info.reviews} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;