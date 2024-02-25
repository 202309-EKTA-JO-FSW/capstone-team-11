import React from "react";

const styles = {
  Card: {
    top: "102px",
    left: "64px",
    width: "1312px",
    height: "290px",
    backgroundColor: "rgba(27,27,29,0.48)",
    borderRadius: "12px",
  },
};

const Card = (props) => {
  return <div style={styles.Card}>{props.children}</div>;
};

export default Card;
