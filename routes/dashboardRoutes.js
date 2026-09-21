const express = require("express");
const router = express.Router();
const { getDashboardSummary, getRecentRequests, getBuildingsNeedingAttention,getBuildingPriorityScores } = require("../controllers/dashboardController");
router.get("/summary", getDashboardSummary);
router.get("/recent-requests", getRecentRequests);
router.get("/buildings-needing-attention", getBuildingsNeedingAttention);
router.get("/priority-scores", getBuildingPriorityScores);


module.exports = router;