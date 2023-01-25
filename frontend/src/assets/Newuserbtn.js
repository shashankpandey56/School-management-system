import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Newuserbtn() {
  return (
    <div className="box-nav d-flex justify-between">
      <a href="/add-user" class="border-shadow">
        <span className="text-gradient">
          Add New School <FontAwesomeIcon icon={faUser} />
        </span>
      </a>
    </div>
  );
}

export default Newuserbtn;
