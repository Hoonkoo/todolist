import * as express from "express";
import { celebrate, Joi } from "celebrate";

import { createUser } from "./user.ctrl";

const UserRouter = express.Router();

/**
 * @swagger
 * definitions:
 *  user:
 *    type: object
 *    required:
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

// load user
UserRouter.get("/");

// login
UserRouter.post("/login");

// logout
UserRouter.post("/logout");

/**
 * @swagger
 *  /signup:
 *    post:
 *      summary: 회원가입
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                password:
 *                  type: string
 *                passwordConfirm:
 *                  type: string
 *                name:
 *                  type: string
 *              required:
 *                - id
 *                - password
 *                - passwordConfirm
 *                - name
 *      tags:
 *      - user
 *      produces:
 *      - appliciation/json
 *      response:
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
      name: Joi.string().required()
    })
  }),
  createUser
);

// search user
UserRouter.get("/:userId");

// withdraw user
UserRouter.delete("/");

export default UserRouter;
