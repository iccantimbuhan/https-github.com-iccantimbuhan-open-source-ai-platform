import { Router } from "express";
import { ChatStreamController } from "../../controllers/chat-stream.controller.js";

const router = Router();

router.post("/", ChatStreamController.stream);

export default router;