import type { Response } from "express";
import { ProviderFactory } from "../providers/provider.factory.js";
import { ApiError } from "../errors/api-error.js";

export class ChatService {
  private provider = ProviderFactory.create();

  async chat(message: string) {
    try {
      return await this.provider.chat(message);
    } catch {
      throw new ApiError(503, "Unable to connect to AI provider.");
    }
  }

  async stream(message: string, res: Response) {
    try {
      const response = await this.provider.streamChat?.(message);

      if (!response) {
        throw new ApiError(501, "Streaming not supported.");
      }

      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Transfer-Encoding", "chunked");

      response.data.pipe(res);
    } catch {
      throw new ApiError(503, "Unable to connect to AI provider.");
    }
  }
}