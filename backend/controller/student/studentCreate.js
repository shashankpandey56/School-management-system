var userDB = require("../../model/studentSchoolModel");
module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { name, email, contact, status,password,photo,education,standard,joiningdate,fulladdress,emergencyno,rollno,fees } = req.body;
  const user = userDB({
    name: name,
    email: email,
    contact: contact,
    status: status,
    rollno:rollno,
 joiningdate:joiningdate,
    password:password,
    photo: photo,
   education:education,
  standard:standard,
  fees:fees,
  emergencyno:emergencyno,
    fulladdress:fulladdress
  });
  user
    .save(user)
    .then((data) => {
     res.send(data);
      
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
