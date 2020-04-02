const router = require("express").Router();
const enrolledController = require("../../controllers/enrolledController");

router.route("/")
.get(enrolledController.findAll)
.post(enrolledController.create);

router.route("/:id")
.get(enrolledController.find)
.put(enrolledController.update)
.delete(enrolledController.remove);

module.exports = router;