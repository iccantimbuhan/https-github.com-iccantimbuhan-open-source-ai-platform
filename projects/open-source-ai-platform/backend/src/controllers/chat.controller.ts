import type { Request, Response } from "express";
import { ChatService } from "../services/chat.service.js";

export class ChatController {
  static async chat(req: Request, res: Response) {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const service = new ChatService();

    const result = await service.chat(message);

    return res.json({
      success: true,
      data: result,
    });
  }
}