import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  
  return (
    <div id="home">
      <h1 style={{color:"firebrick"}}></h1>
      {name} is a web Developer from {city}
    </div>
  );
}

export default Home;
