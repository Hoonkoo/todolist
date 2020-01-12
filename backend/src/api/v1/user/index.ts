import express from "express";
import * as api from "~/api/v1/user/user.ctrl";

const router = express.Router();

// 유저 정보 조회
router.get("/", api.loadUser);

// 유저 회원가입
router.post("/sign-up", api.signUp);

export default router;
