let express = require("express")
let router = express.Router()
const User = require("../Models/userModel");
 
let bcrypt = require("bcryptjs")


router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }, // Check token validity
        });

        if (!user) {
            return res.status(400).send('Invalid or expired token');
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.status(200).send('Password reset successfully');
    } catch (error) {
        res.status(500).send('Error resetting password: ' + error.message);
    }
});

module.exports = router