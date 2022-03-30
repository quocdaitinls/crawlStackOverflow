import {Router} from "express";
import {testHandler} from "../../controllers/testHandler";

const router = Router();

router.post("/byurl", testHandler);

export default router;
