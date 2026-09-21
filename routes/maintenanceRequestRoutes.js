const express = require("express");
const router = express.Router();
const { getMaintenanceRequests } = require("../controllers/maintenanceRequestController");
router.get("/", getMaintenanceRequests);
module.exports = router;