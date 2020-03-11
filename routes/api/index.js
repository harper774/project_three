const router = require("express").Router();
const coursesRoutes = require("./courses");

// Book routes
router.use("/courses", coursesRoutes);

module.exports = router;
