import * as createError from "http-errors";
import * as bcrypt from "bcryptjs";

import { IUserInputDTO } from "@/interfaces/IUser";
import db from "@/db";

const createUser = async ({
  id,
  password,
  passwordConfirm,
  name
}: IUserInputDTO): Promise<void> => {
  const exUser = await db.Models.User.findOne({ userId: id });

  // 유저 아이디가 이미 가입되어있으면 회원가입 취소
  if (exUser) {
    throw createError(400, "이미 존재하는 아이디입니다.");
  }

  // 비밀번호 체크
  if (password !== passwordConfirm) {
    throw createError(400, "비밀번호가 일치하지 않습니다.");
  }

  const hash = await bcrypt.hash(password, 12);

  const user = await db.Models.User.create({
    userId: id,
    password: hash,
    name
  });

  await user.save();
};

const loginUser = async ({ id, password }: Partial<IUserInputDTO>) => {
  const exUser = await db.Models.User.findOne({
    userId: id
  });

  // 아이디 체크
  if (!exUser) {
    throw createError(400, "존재하지 않는 아이디입니다.");
  }

  const passwordCheck = await bcrypt.compare(
    String(password)!,
    exUser.password
  );

  // 비밀번호 체크
  if (!passwordCheck) {
    throw createError(400, "패스워드가 일치하지 않습니다.");
  }

  const resultUser = Object.assign({}, exUser.toJSON());

  delete resultUser.password;

  return resultUser;
};

const UserService = {
  createUser,
  loginUser
};

export default UserService;
