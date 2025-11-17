import { AuthController } from "@/controllers/auth-controller"
import { EnsureAuthenticated } from "@/middlewares/ensureAuthenticated"
import { Router } from "express"

export const authRoutes = Router()
const authController = new AuthController()

authRoutes.get("/",  EnsureAuthenticated,authController.auth)