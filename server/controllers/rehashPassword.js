import bcryptjs from 'bcryptjs';

export const rehashPassword = async (email, plainTextPassword) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return false;
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(plainTextPassword, salt);

        user.password = hashedPassword;
        await user.save();

        console.log("Password rehashed and updated successfully");
        return true;
    } catch (error) {
        console.log("Error rehashing password:", error);
        return false;
    }
};