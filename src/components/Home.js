import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const textStyle = {
    color: 'firebrick'
  };
  return <div id="home">
    <h1 style={textStyle}>
      {name} is a Web Developer from {city}
      </h1>
  
    <city></city>
  </div>;

}

export default Home;
