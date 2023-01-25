import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

function Allusers() {
  return (
    <div class="box-nav d-flex justify-between">
      <div class="filter">
        <a href="/">
          <FontAwesomeIcon icon={faAngleDoubleLeft} /> All School
        </a>
      </div>
    </div>
  );
}

export default Allusers;
