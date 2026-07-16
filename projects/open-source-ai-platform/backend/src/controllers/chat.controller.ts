import type { Request, Response } from "express";
import { ChatService } from "../services/chat.service.js";
import { ApiResponse } from "../utils/api-response.js";

export class ChatController {
  static async chat(req: Request, res: Response) {
    const { message } = req.body;

    if (!message) {
      return ApiResponse.error(res, "Message is required", 400);
    }

    const service = new ChatService();

    const result = await service.chat(message);

    return ApiResponse.success(res, result);
  }
}