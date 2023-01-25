var userDB = require("../../model/notificationModel");
module.exports = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }
  const {
    img,
    title,
    description,
    date,
  
    status,
   
   } = req.body;
  const user = userDB({
    img: img,
      title: title,
      description: description,
      date: date,
    
      status:status,
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
