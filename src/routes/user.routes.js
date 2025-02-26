import { Router } from "express";
import { connectUs } from "../controllers/user.controller.js";


const router = Router()

router.route('/connect').post(connectUs)

// Secure Routes
// router.route('/logout').post(verifyUser, logoutEmp)

export default router