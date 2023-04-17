import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUserRepository } from "./repositories/get-users/mongo-get-users";
config();

const app = express();

const port = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const mongoGetUserRepository = new MongoGetUserRepository();
  const getUsersCotnroller = new GetUsersController(mongoGetUserRepository);

  const { body, statusCode } = await getUsersCotnroller.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
