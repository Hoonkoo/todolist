import { IUserInputDTO } from "@/interfaces/IUser";

import db from "@/db";

export const CreateUser = async ({
  id,
  password,
  passwordConfirm,
  name
}: IUserInputDTO) => {
  const user = await db.Models.User.create({
    userId: id,
    password,
    name
  });

  await user.save();
};
