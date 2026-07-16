import type { AxiosResponse } from "axios";

export interface ChatResponse {
  model: string;
  response: string;
  createdAt: string;
}

export interface AIModel {
  name: string;
  family: string;
  parameters: string;
  quantization: string;
  size: number;
  capabilities: string[];
}

export interface AIProvider {
  listModels(): Promise<any>;

  chat(message: string): Promise<ChatResponse>;

  streamChat?(
    message: string
  ): Promise<AxiosResponse<any>>;
}