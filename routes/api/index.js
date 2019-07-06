const router = require("express").Router();
const albumRoutes = require("./albums");

// Album routes
router.use("/albums", albumRoutes);

module.exports = router;
