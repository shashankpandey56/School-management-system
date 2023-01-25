import React from "react";
import Header from "../../assets/Header";
import Newuserbtn from "../../assets/Newuserbtn";
import Searchbox from "../../assets/Searchbox";
import Tablebar from "../../assets/Tablebar";


function Homepage() {
  return (
    <div>
      <Header />
      <main id="site-main">
        <div className="container">
          <Newuserbtn />
          <Searchbox placeholder="Enter School Name" handleChange ={(e)=>{console.log(e)}}/>
          <Tablebar />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
