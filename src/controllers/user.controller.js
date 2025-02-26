import { Lead } from "../models/lead.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const connectUs = async (req, res) => {
    const { appName, pid, ts, location, reqAction } = req.body.meta
    const { phone, message, name ,email} = req.body.pay

    try {
        if (!(pid == "INVST" && appName === 'investycoons' && reqAction == 'connect' && ts && location)) {
            return res.status(400).json(
                new ApiResponse(400, "Payload Meta Malformed !"))
        }
        if (!phone || !message || !name || !email) {
            return res.status(400).json(new ApiResponse(400, 'Payload Body Malformed !'))
        }
        const lead = await Lead.create({
            name,
            phone,
            email,
            message,
            appName,
            ts,
            reqAction,
            location,
        })
        return res.status(200).json(new ApiResponse('000', 'Thank You, Our team will Contact You Soon', lead))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, error?.message))
    }
}

export { connectUs }