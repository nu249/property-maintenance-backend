
const dashboardService = require("../services/dashboardService");
const getDashboardSummary = async (req, res) => {
    try {
        const summary = await dashboardService.getDashboardSummary();

        res.status(200).json(summary);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error getting dashboard summary"
        });
    }
};
const getRecentRequests = async (req, res) => {
    try {
        const recentRequests = await dashboardService.getRecentRequests();

        res.status(200).json(recentRequests);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error getting recent requests"
        });
    }
};
const getBuildingsNeedingAttention = async (req, res) => {
    try {
        const buildings = await dashboardService.getBuildingsNeedingAttention();

        res.status(200).json(buildings);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error getting buildings needing attention"
        });
    }
};
const getBuildingPriorityScores = async (req, res) => {
    try {
        const scores = await dashboardService.getBuildingPriorityScores();

        res.status(200).json(scores);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error calculating building priority scores"
        });
    }
};
            module.exports = {
  getDashboardSummary,
  getRecentRequests,
  getBuildingsNeedingAttention,
  getBuildingPriorityScores
};