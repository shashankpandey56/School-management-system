import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Form() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    status: "",
    password:"",
    logo:"",
    country:"",
    pincode:  "",
    city:"",
    state:  "",
   
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target.logo)
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveData = () => {
    
  

    async function save() {
      await axios.post("http://localhost:9000/user/create", user).then((res) => {
        alert("new school inserted successfully");
        history.push("/");
      });
    }
    save();
  };
  return (
    <div>
      <form method="POST" id="add_user" encType="multipart/form-data">
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
            <label for="Email" class="text-dark">
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
            <label for="pincode" class="text-dark">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={user.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="password" class="text-dark">
            Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label for="contact" class="text-dark">
              Full Addresss
            </label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="city" class="text-dark">
             City
            </label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="state" class="text-dark">
            State
            </label>
            <input
              type="text"
              name="state"
              value={user.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="country" class="text-dark">
          Country
            </label>
            <input
              type="text"
              name="country"
              value={user.country}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <label for="status" class="text-dark">
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
          <div >
              <label for="name" className="text-dark">
                Logo File*
              </label>

              <input
                type="file"
                name="logo"
                value={user.logo}
                onChange={handleChange}
              />
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
  );
}

export default Form;
