import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

function BusinessList(prop) {
  if (!prop.businesses) {
    return (
      <div className={styles.BusinessList}>
        <p>No results found. Please enter valid search words.</p>
      </div>
    );
  }
  return (
    <div className={styles.BusinessList}>
      {prop.businesses?.map(business => {
        return <Business info={business} key={business.id} />;
      })}
    </div>
  );
};

export default BusinessList;
