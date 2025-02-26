import mongoose, { Schema } from "mongoose"

const leadSchema = new Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    
    appName: { type: String, lowercase: true, trim: true },
    ts: { type: String, lowercase: true, trim: true },
    reqAction: { type: String, lowercase: true, trim: true },
    location: { type: String, lowercase: true, trim: true },
})
export const Lead = mongoose.model('lead', leadSchema);