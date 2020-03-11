const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
