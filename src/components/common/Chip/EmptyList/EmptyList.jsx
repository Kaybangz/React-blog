import React from "react";
import "./styles.css";

const EmptyList = () => {
  return (
    <div className="emptyList__container">
      <img src="https://media1.giphy.com/media/U3ymJ5oYZefwCuoZDa/giphy.gif?cid=ecf05e47p1vgkg2byjrj6deuwvforl53qh83ypsndj8mfh5u&rid=giphy.gif&ct=g" alt="Not found" />
      <h1>Page not found...</h1>
    </div>
  );
};

export default EmptyList;
