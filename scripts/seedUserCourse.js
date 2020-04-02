const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/onlinecourse"
);

const coursesSeed = [
    {
        courseType: "Javascript",
        courseName: "Music Search Application",
        courseRank: 4.5,
        coursePrice: "free",
        date: new Date(Date.now())
    }
];

const usersSeed = [
    {
        userName: "Harper",
        email: "Harper@gmail.com",
        email_is_verified: true,
        password: "12345678",
        userBrief: "Web Developer",
        userCourseName: "Javascript",
        userCourseDetail: "Basic and intermediate web development courses",
        userCourse: "5e852bff0edb98793380c260",
        date: new Date(Date.now())
    }
];

// const enrolledSeed = [
//     {
//         userId: "5e84a62e397f77703dac6b29",
//         courseId: "5e84a62e397f77703dac6b27"
//     }
// ];

db.Course
    .remove({})
    .then(() => db.Course.collection.insertMany(coursesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted-course!");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(usersSeed))
    .then(data => {
        console.log(data.result.n + " records inserted-user!");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    // db.Enrolled
    // .remove({})
    // .then(() => db.Enrolled.collection.insertMany(enrolledSeed))
    // .then(data => {
    //     console.log(data.result.n + " records inserted-Enrolled!");
    // })
    // .catch(err => {
    //     console.error(err);
    //     process.exit(1);
    // });