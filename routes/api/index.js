const router = require("express").Router();
const coursesRoutes = require("./courses");
const usersRoutes = require("./users");
const enrolledRoutes = require("./enrolled");

// routes
router.use("/courses", coursesRoutes);
router.use("/users", usersRoutes);
router.use("/enrolled", enrolledRoutes);
module.exports = router;
