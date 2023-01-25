
import React, { useState} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

function FeeForm() {
  const history = useHistory();
  const [user, setUser] = useState({
    name:"",
    email: "",
    contact: "",
    rollno:"",
  standard:"",
  amount:"",
  
  fees:"",
  fulladdress:"",
   
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    console.log(user)
    
    async function save() {
      await axios.post("http://localhost:9000/fee/create", user).then((res) => {
        alert("new teacher added successfully");
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
            <label for="rollno" class="text-dark">
            Rollno
            </label>
            <input
              type="rollno"
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
            <label for="amount" class="text-dark">
         Amount
            </label>
            <input
              type="text"
              name="amount"
              value={user.amount}
              onChange={handleChange}
            />
          </div>
          
          
     
          <div className="form-group">
            <label for="fees" class="text-dark">
                Fees Mode
            </label>
            <input
              type="text"
              name="fees"
              value={user.fees}
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

export default FeeForm;
