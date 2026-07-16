import { OllamaProvider } from "../providers/ollama/ollama.provider.js";

export class ChatService {
  private provider = new OllamaProvider();

  async chat(message: string) {
    const response = await this.provider.chat(message);

    return {
      model: response.model,
      response: response.message.content,
      createdAt: response.created_at,
    };
  }
}