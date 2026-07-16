import type { Request, Response } from "express";
import { ModelService } from "../services/model.service.js";

export class ModelController {
  static async getModels(_req: Request, res: Response) {
    const service = new ModelService();

    const models = await service.getModels();

    res.json({
      success: true,
      count: models.length,
      data: models,
    });
  }
}