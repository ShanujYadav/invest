import { Lead } from "../models/lead.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const allLeads = async (req, res) => {
    const { appName, pid, ts, location, reqAction } = req.body.meta
    const { phone, password } = req.body.pay

    try {
        if (pid !== "INVST" || appName !== 'dashboard' || reqAction !== 'allLeads' || !ts || !location) {
            return res.status(400).json(
                new ApiResponse(400, "Payload Meta Malformed !"))
        }
        if (!phone || !password) {
            return res.status(400).json(new ApiResponse(400, 'Payload Body Malformed !'))
        }
        if (!(phone == '9528492010' && password == '9528492010')) {
            return res.status(400).json(new ApiResponse(400, 'Invalied User '))
        }
        const leads = await Lead.find()
        if (!leads.length) {
            return res.status(404).json(new ApiResponse(404, 'No leads found'))
        }
        return res.status(200).json(new ApiResponse('000', 'Leads retrieved successfully', leads))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, error?.message))
    }
}

export { allLeads }