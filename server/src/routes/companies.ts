import { Router, Request, Response } from "express";
import companies from "../data/companies.json";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error",
      });
  }
});

export default router;