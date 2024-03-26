import express from "express";
import cors from "cors";
const app = express();
import router from "./routes/user.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/users", router);

app.listen(3000, () => {
  console.log("Server is stated at port 3000");
});
