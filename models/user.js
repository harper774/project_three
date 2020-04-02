const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const saltRound = 10;

/**
 * Hash user's password
 * @param {object} user user object
 * NOTE: manually hashing for update action for change password.
 */
const hashPassword = async (user) => {
    const u = user;
    const salt = await bcrypt.genSalt(saltRound);
    u.password = await bcrypt.hash(u.password, salt);
    return u;
};
// const userSchema = new Schema({
//     email: { type: String, required: true },
//     password: { type: String },
//     userBrief: { type: String },
//     userCourse: { type: Schema.Types.ObjectId, ref: "Course" },
//     userEnrolledTime: { type: Date, default: Date.now }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        email_is_verified: {
            type: Boolean,
            default: false
        },
        password: {
            type: String
        },
        userBrief: { type: String },
        userCourse: { type: Schema.Types.ObjectId, ref: "Course" },
        userEnrolledTime: { type: Date, default: Date.now },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

const User = mongoose.model("User", userSchema);

hashPassword(User);

module.exports = User;