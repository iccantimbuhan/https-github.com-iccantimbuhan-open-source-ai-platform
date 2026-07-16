import { OllamaProvider } from "../providers/ollama/ollama.provider.js";
import { ApiError } from "../errors/api-error.js";

export class ChatService {
  private provider = new OllamaProvider();

  async chat(message: string) {
    try {
      const response = await this.provider.chat(message);

      return {
        model: response.model,
        response: response.message.content,
        createdAt: response.created_at,
      };
    } catch {
      throw new ApiError(
        503,
        "Unable to connect to Ollama."
      );
    }
  }
}