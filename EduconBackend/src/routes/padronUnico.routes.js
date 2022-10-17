import { Router } from "express";
import { getPadronUnico } from "../controllers/padronUnico.controller";

const router = Router();

router.post('/padron', getPadronUnico);

export default router;