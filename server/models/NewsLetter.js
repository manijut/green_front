import mongoose from "mongoose";

const newsLetterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

const NewsLetter = mongoose.models.newsletter || mongoose.model('newsletter', newsLetterSchema);

export default NewsLetter; 