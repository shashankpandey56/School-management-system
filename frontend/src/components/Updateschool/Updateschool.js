import React, { useState, useEffect } from "react";
import Header from "../../assets/Header";
import Allusers from "../../assets/Allusers";

import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function Updateschool() {
  const { id } = useParams();
  console.log(id);
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.put(`http://localhost:9000/user/update/${id}`);
      setUser(res.data);
    };
    loadData();
  }, [id]);
  const saveData = (e) => {
    e.preventDefault();
    async function save() {
      await axios
        .put(`http://localhost:9000/api/users/${id}`, user)
        .then((res) => {
          history.push("/");
        });
    }
    save();
  };

  return (
    <div>
      <Header />
      <main id="site-main">
        <div class="container">
          <Allusers />
          <div class="form-title text-center">
            <h2 class="text-dark">Update School</h2>
            <span class="text-light">
              Use the below form to update an account
            </span>
          </div>
          <form method="POST" id="add_user">
            <div className="new_user">
              <div className="form-group">
                <label for="name" className="text-dark">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="Email" class="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="contact" class="text-light">
                  contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={user.contact}
                  onChange={handleChange}
                />
              </div>

              <div class="form-group">
                <label for="status" class="text-light">
                  Status
                </label>
                <div class="radio inline">
                  <input
                    type="radio"
                    id="radio-4"
                    name="status"
                    value="active"
                    onChange={handleChange}
                  />
                  <label for="radio-4" class="radio-label">
                    Active
                  </label>
                </div>
                <div class="radio inline">
                  <input
                    type="radio"
                    id="radio-5"
                    name="status"
                    value="inactive"
                    onChange={handleChange}
                  />
                  <label for="radio-5" class="radio-label">
                    Inactive
                  </label>
                </div>
              </div>

              <div class="form-group">
                <button
                  type="submit"
                  class="btn text-dark update"
                  onClick={saveData}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Updateschool;
