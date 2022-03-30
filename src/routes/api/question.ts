import {Router} from "express";
import {generateById} from "../../controllers/question/byId";
import {generateByListIds} from "../../controllers/question/byListIds";
import {generateByListUrls} from "../../controllers/question/byListUrls";
import {generateByUrl} from "../../controllers/question/byUrl";

const router = Router();

router.post("/byurl", generateByUrl);
router.post("/byurls", generateByListUrls);
router.post("/byid", generateById);
router.post("/byids", generateByListIds);

export default router;
