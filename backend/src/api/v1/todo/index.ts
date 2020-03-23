import * as express from "express";

const TodoRouter = express.Router();

/**
 * @swagger
 * definitions:
 *  todo:
 *   type: object
 *   required:
 *     - title
 *     - content
 *     - writer
 *     - flag
 *   properties:
 *     _id:
 *       type: string
 *       description: ObjectId
 *     title:
 *       type: string
 *       description: todo 제목
 *     content:
 *       type: string
 *       description: todo 내용
 *     thumbnail:
 *       type: string
 *       description: todo 썸네일
 *     writer:
 *       type: string
 *       description: 작성자 id
 *     flag:
 *       type: number
 *       description: todo flag status
 *
 */

/**
 * @swagger
 *  /:
 *    get:
 *      summary: 투두 리스트 조회
 *      tags:
 *      - todo
 *      produces:
 *      - applicaion/json
 *      responses:
 *       200:
 *        description: fetch todo list by user
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/todo'
 */

TodoRouter.get("/");

/**
 * @swagger
 *  /{todoId}:
 *    get:
 *      summary: 개별적인 투두 조회
 *      tags:
 *      - todo
 *      produces:
 *      - applicaion/json
 *      responses:
 *       200:
 *        description: fetch todo by id
 *        schema:
 *          $ref: '#/definitions/todo'
 */

TodoRouter.get("/:todoId");

// create todo
TodoRouter.post("/");

// edit todo
TodoRouter.put("/:todoId");

// remove todo
TodoRouter.delete("/:todoId");

export default TodoRouter;
