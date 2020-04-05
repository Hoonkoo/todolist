import * as express from "express";
import { celebrate, Joi } from "celebrate";

import { createUser, login, loadUser, logout } from "./user.ctrl";
import { isLoggedIn } from "@/middlewares/auth";

const UserRouter = express.Router();

/**
 * @swagger
 * definitions:
 *  user:
 *    type: object
 *    required:
 *      - _id
 *      - user_id
 *      - name
 *      - lastLoggedIn
 *    properties:
 *      _id:
 *        type: string
 *        description: ObjectId
 *      user_id:
 *        type: string
 *        description: user 아이디
 *      name:
 *        type: string
 *        description: user 이름
 *      todos:
 *        type: array
 *        items:
 *          $ref: '#/definitions/todo'
 *        description: 작성한 투두 리스트
 *      lastLoggedIn:
 *        type: date
 *        description: 마지막 로그인 시간
 */

/**
 * @swagger
 *  /:
 *    get:
 *      tags:
 *      - user
 *      produces:
 *      - application/json
 *      summary: 로그인 유저 정보 조회
 *      parameters:
 *      responses:
 *        200:
 *          schema:
 *          properties:
 *            message:
 *              type: string
 *            user:
 *              $ref: '#/definitions/user'
 */
// load user
UserRouter.get("/", isLoggedIn, loadUser);

/**
 * @swagger
 *  /login:
 *    post:
 *      tags:
 *      - user
 *      produces:
 *      - appliciation/json
 *      summary: 로그인
 *      parameters:
 *        - name : id
 *          in: body
 *          description: 유저 아이디
 *          require: true
 *          type: string
 *        - name : password
 *          in: body
 *          description: 비밀번호
 *          require: true
 *          type: string
 *      responses:
 *        200:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *              user:
 *                $ref: '#/definitions/user'
 */
UserRouter.post(
  "/login",
  celebrate({
    body: Joi.object({
      id: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  login
);

/**
 * @swagger
 * /logout:
 *    get:
 *      tags:
 *      - user
 *      produces:
 *      - appliciation/json
 *      summary: 로그아웃
 *      response:
 *        200:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 */
UserRouter.get("/logout", isLoggedIn, logout);

/**
 * @swagger
 *  /signup:
 *    post:
 *      tags:
 *      - user
 *      produces:
 *      - appliciation/json
 *      summary: 회원가입
 *      parameters:
 *        - name : id
 *          in: body
 *          description: 로그인 시 사용하는 유저 아이디
 *          require: true
 *          type: string
 *        - name : password
 *          in: body
 *          description: 비밀번호
 *          require: true
 *          type: string
 *        - name : passwordConfirm
 *          in: body
 *          description: 비밀번호 재확인
 *          require: true
 *          type: string
 *        - name : name
 *          in: body
 *          description: 유저 이름
 *          require: true
 *          type: string
 *      responses:
 *        200:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 */
UserRouter.post(
  "/signup",
  celebrate({
    body: Joi.object({
      id: Joi.string().required(),
      password: Joi.string().required(),
      passwordConfirm: Joi.string().required(),
      name: Joi.string().required(),
    }),
  }),
  createUser
);

// search user
UserRouter.get("/:userId");

// withdraw user
UserRouter.delete("/");

export default UserRouter;
