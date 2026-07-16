import { z } from "zod";

export const ChatSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(5000, "Message is too long"),
});

export type ChatRequest = z.infer<typeof ChatSchema>;