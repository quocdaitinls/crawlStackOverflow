import {Router} from "express";
import {testHandler} from "../controllers/testHandler";

const router = Router();

router.post("/test", testHandler);

export default router;
