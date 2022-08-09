import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import conn from "db/conn";
import users from "routes/users";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Testing api for basic server function
app.get("/test", (req: Request, res: Response) => {
  console.log("/test get request received!");
  res.send(`<h1>Success</h1>`);
});

app.use("/users", users);

app.listen(PORT, () => {
  // perform a database connection when server starts
  conn.connectToServer((err: any) => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});
