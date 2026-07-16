import type { Request, Response } from "express";
import { ChatService } from "../services/chat.service.js";
import { ApiResponse } from "../utils/api-response.js";
import { ChatSchema } from "../validators/chat.validator.js";

export class ChatController {
  static async chat(req: Request, res: Response) {
    const parsed = ChatSchema.safeParse(req.body);

    if (!parsed.success) {
      return ApiResponse.error(
        res,
        parsed.error.issues[0].message,
        400
      );
    }

    const service = new ChatService();

    const result = await service.chat(parsed.data.message);

    return ApiResponse.success(res, result);
  }
}