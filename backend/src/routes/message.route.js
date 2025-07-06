import express from "express";
import { productRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar,sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users",productRoute,getUsersForSidebar)
router.get("/:id",productRoute,getMessages)
router.post("/send/:id",productRoute,sendMessage)
export default router;