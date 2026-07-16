import axios from "axios";
import { env } from "../../config/env.js";
import type {
  AIProvider,
  ChatResponse,
} from "../interfaces/ai-provider.js";

export class OllamaProvider implements AIProvider {
  private readonly client = axios.create({
    baseURL: env.ollamaBaseUrl,
  });

  async listModels() {
    const response = await this.client.get("/api/tags");
    return response.data;
  }

  async chat(message: string): Promise<ChatResponse> {
    const response = await this.client.post("/api/chat", {
      model: env.ollamaModel,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      stream: false,
    });

    return {
      model: response.data.model,
      response: response.data.message.content,
      createdAt: response.data.created_at,
    };
  }

  async streamChat(message: string) {
    return this.client.post(
      "/api/chat",
      {
        model: env.ollamaModel,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        stream: true,
      },
      {
        responseType: "stream",
      }
    );
  }
}