import { api } from '@/services/api'

export interface ChatResponse {
  model: string
  response: string
  createdAt: string
}

export interface HealthResponse {
  status: string
  service: string
  version: string
  provider: string
  model: string
  timestamp: string
}

export interface ModelInfo {
  name: string
  family: string
  parameters: string
  quantization: string
  size: number
  capabilities: string[]
}

export interface ModelsResponse {
  count: number
  models: ModelInfo[]
}

export async function chat(message: string): Promise<ChatResponse> {
  const res = await api.post('/api/v1/chat', { message })
  return res.data.data as ChatResponse
}

export async function getHealth(): Promise<HealthResponse> {
  const res = await api.get('/api/v1/health')
  return res.data.data as HealthResponse
}

export async function getModels(): Promise<ModelsResponse> {
  const res = await api.get('/api/v1/models')
  return res.data.data as ModelsResponse
}
