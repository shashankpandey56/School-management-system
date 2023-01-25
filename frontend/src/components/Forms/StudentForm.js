import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

function StudentForm() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    education: "",
    status: "",
    password:"",
    photo:"",
    education:"",
    rollno:  "",
    standard:"",
   emergencyno: "",
   joiningDate:"",
   fulladdress:"",
   
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

  const saveData = (e) => {
    e.preventDefault();
    console.log(user)
    
    async function save() {
      await axios.post("http://localhost:9000/student/create", user).then((res) => {
        alert("new student added successfully");
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
            <label for="contact" class="text-dark">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
            />
          </div>
         
          <div className="form-group">
            <label for="password" class="text-dark">
            
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label for="education" class="text-dark">
             Education
            </label>
            <input
              type="text"
              name="education"
              value={user.education}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="rollno" class="text-dark">
             Rollno
            </label>
            <input
              type="text"
              name="rollno"
              value={user.rollno}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="standard" class="text-dark">
            Standard
            </label>
            <input
              type="text"
              name="standard"
              value={user.standard}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="emergencyno" class="text-dark">
          Emergency No
            </label>
            <input
              type="text"
              name="emergencyno"
              value={user.emergencyno}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="joiningdate" class="text-dark">
          Joining Date
            </label>
            <input
              type="text"
              name="joiningdate"
              value={user.joiningDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="fulladdress" class="text-dark">
          Full Address
            </label>
            <input
              type="text"
              name="fulladdress"
              value={user.fulladdress}
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
          <div>
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

export default StudentForm;
