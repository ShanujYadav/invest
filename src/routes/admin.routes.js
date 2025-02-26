import { Router } from "express"
import { allLeads } from "../controllers/admin.controller.js";

const router = Router()

router.route('/allLeads').post(allLeads)


export default router