import type { Request, Response } from "express";
import { HealthService } from "../services/health.service.js";

export class HealthController {
  static getHealth(_req: Request, res: Response) {
    res.json({
      success: true,
      data: HealthService.getStatus(),
    });
  }
}