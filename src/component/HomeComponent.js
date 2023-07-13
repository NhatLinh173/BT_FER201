import React from "react";
import ItemsList from "./ItemsListComponent";

const Home = (props) => {
  return (
    <div>
      <ItemsList items={props.items} removeItem={props.removeItem} />
    </div>
  );
};

export default Home;
