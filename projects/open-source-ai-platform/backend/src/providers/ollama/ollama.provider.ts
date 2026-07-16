import axios from "axios";
import { env } from "../../config/env.js";

export class OllamaProvider {
  private readonly client = axios.create({
    baseURL: env.ollamaBaseUrl,
  });

  async listModels() {
    const response = await this.client.get("/api/tags");
    return response.data;
  }
}