import type { Request, Response } from "express";
import { ChatSchema } from "../validators/chat.validator.js";
import { ChatService } from "../services/chat.service.js";

export class ChatStreamController {
  static async stream(req: Request, res: Response) {
    const parsed = ChatSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: parsed.error.issues[0].message,
      });
    }

    const service = new ChatService();

    await service.stream(parsed.data.message, res);
  }
}