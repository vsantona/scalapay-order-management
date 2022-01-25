/** source/routes/posts.ts */
import express from "express";
import controller from "./order.controller";

const router = express.Router();

router.post("/orders", controller.createOrder);

export = router;
