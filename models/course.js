const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseType: { type: String, required: true },
    courseName: { type: String, required: true },
    courseRank: { type: Number, required: true },
    coursePrice: { type: String, required: true },
    // author: { type: String, required: true },
    // description: String,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
