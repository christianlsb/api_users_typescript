import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUserRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "John",
        lastName: "Lsb",
        email: "john@example.com",
        password: "password",
      },
    ];
  }
}
