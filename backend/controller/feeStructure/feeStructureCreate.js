var userDB = require("../../model/feeStructureModel");
module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const { name, email, contact,standard,fulladdress,rollno,fees,amount } = req.body;
  const user = userDB({
    name: name,
      email: email,
      contact: contact,
    rollno:rollno,
    standard:standard,
    amount:amount,
    
    fees:fees,
    fulladdress:fulladdress,
    
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
