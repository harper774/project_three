const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrolledSchema = new Schema({
    userId: { type: String, required: true }, 
    courseId: { type: String, required: true }, 
    date: { type: Date, default: Date.now }
});

const Enrolled = mongoose.model("Enrolled", enrolledSchema);

module.exports = Enrolled;
