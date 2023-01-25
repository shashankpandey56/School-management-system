var userDB = require("../../model/superAdminModel");
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
   
   } = req.body;
  const user = userDB({
    name: name,
      email: email,
      contact: contact,
      status: status,
    
      password:password
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
