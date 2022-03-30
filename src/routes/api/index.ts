import {Router} from "express";
import questionRouter from "./question";

const router = Router();

router.post("/question", questionRouter);

export default router;
