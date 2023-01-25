import React from "react";
import Allusers from "../../assets/Allusers";
import AddSchoolForm from "../Forms/AddSchoolForm"
import Header from "../../assets/Header";

function Newschool() {
  return (
    <div>
      <Header />
      <main id="site-main">
        <div className="container">
          <Allusers />
          <div className="form-title text-center">
            <h2 className="text-dark">New User</h2>
            <span className="text-light">
              Use the below form to create a new account
            </span>
          </div>
         <AddSchoolForm/>
        </div>
      </main>
    </div>
  );
}

export default Newschool;
