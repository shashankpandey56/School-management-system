var userDB = require("../../model/addEmployeeModel");
module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    name,
    email,
    contact,
    status,
    password,
    education,
    photo,
    role,
    pincode,
    state,
    fulladdress,
   } = req.body;
  const user = userDB({
    name: name,
    email: email,
    contact: contact,
    status: status,
    password: password,
    education:education,
    photo: photo,
    role: role,
    pincode: pincode,
    state: state,
    fulladdress: fulladdress,
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
