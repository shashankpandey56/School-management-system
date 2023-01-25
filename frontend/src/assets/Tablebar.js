import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

import "../App.css";

function Tablebar() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(users.length / userPerPage);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get("http://localhost:9000/user/find");
    setUsers(res.data.reverse());
  };
  const deleteUser = async (id) => {
    console.log(id);
    alert("Are you sure you want to delete this ");
    await axios.delete(`http://localhost:9000/user/delete/${id}`);
    loadUser();
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = users
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.contact}</td>

          <td>{user.status}</td>
          <td>
            <Link
              to={`/update-user/${user._id}`}
              className="btn border-shadow update"
            >
              <span class="text-gradient">
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </Link>
            <Link
              to="#"
              onClick={() => {
                deleteUser(user._id);
              }}
              className="btn border-shadow delete"
            >
              <span class="text-gradient">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </Link>
          </td>
        </tr>
      );
    });
  return (
    <div className="container">
      <form action="/" method="POST">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
      </form>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Tablebar;
