import express from "express";
import anotacaoController from "../controllers/anotacaoController.js";

const router = express.Router();

router.post("/", anotacaoController.create);
router.get("/", anotacaoController.getAll);
router.get("/:id", anotacaoController.getById);
router.put("/:id", anotacaoController.update);
router.delete("/:id", anotacaoController.delete);
router.patch("/:id/favorita", anotacaoController.favorite);

export default router;