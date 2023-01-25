const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Database/connection");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended:true,
}));
app.use(cors());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;
connectDB();

app.use("/", require("./routes/indexRoute"));

app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
});
