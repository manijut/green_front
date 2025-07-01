import NewsLetter from '../models/NewsLetter.js';

export const subscribeNewsLetter = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.json({ success: false, message: 'Email is required' });
        }
        // Check for duplicate
        const exists = await NewsLetter.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: 'Already subscribed!' });
        }
        await NewsLetter.create({ email });
        return res.json({ success: true, message: 'Subscribed successfully!' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}; 