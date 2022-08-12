import { Router } from "express";
import * as user from "controllers/userController";

const router: Router = Router();

router.post("/add", user.createUser);

router.get("/:userId", user.getUser);

router.get("/", user.getAllUsers);

router.put("/:userId", user.updateUser);

router.delete("/:userId", user.deleteUser);

export default router;
