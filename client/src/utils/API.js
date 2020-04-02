import axios from "axios";

export default {
    // courses api
    getCourses: function () {
        return axios.get("/api/courses");
    },
    // Gets the book with the given id
    getCourse: function (id) {
        return axios.get("/api/courses/" + id);
    },
    // Deletes the course with the given id
    deleteCourse: function (id) {
        return axios.delete("/api/courses/" + id);
    },
    // Saves a course to the database
    saveCourse: function (courseData) {
        return axios.post("/api/courses", courseData);
    },

    // users api
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the User with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a User to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },

    getEnrolled: function (id) {
        return axios.get("/api/enrolled/" + id);
    },

    getAuth: function (data) {
        return axios.post("/auth/register_login", data);
    }
};
