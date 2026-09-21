const Building = require("../models/Building");
const Apartment = require("../models/Apartment");
const MaintenanceRequest = require("../models/MaintenanceRequest");
const calculatePriorityPoints = require("../utils/priorityCalculator");
const getDashboardSummary = async () => {
    const totalBuildings = await Building.countDocuments();
    const totalApartments = await Apartment.countDocuments();

    const openRequests = await MaintenanceRequest.countDocuments({
        status: { $in: ["pending", "in_progress"] }
    });

    const criticalRequests = await MaintenanceRequest.countDocuments({
        priority: "critical"
    });

    return {
        totalBuildings,
        totalApartments,
        openRequests,
        criticalRequests
    };
};
const getRecentRequests = async () => {
    const recentRequests = await MaintenanceRequest.find()
        .sort({ createdAt: -1 })
        .limit(3);

    return recentRequests;
};
const getBuildingsNeedingAttention = async () => {
    const openRequests = await MaintenanceRequest.find({
        status: { $in: ["pending", "in_progress"] }
    });

    const buildingIds = openRequests.map(request => request.buildingId);

    const buildings = await Building.find({
        _id: { $in: buildingIds }
    });

    const scores = {};

    openRequests.forEach((request) => {
        const points = calculatePriorityPoints(request.priority);

        const buildingId = request.buildingId.toString();

        if (!scores[buildingId]) scores[buildingId] = 0;

        scores[buildingId] += points;
    });

    const result = buildings.map((building) => ({
        buildingId: building._id,
        name: building.name,
        score: scores[building._id.toString()]
    }));

    result.sort((a, b) => b.score - a.score);

    return result;
};
const getBuildingPriorityScores = async () => {
    const requests = await MaintenanceRequest.find({
        status: { $in: ["pending", "in_progress"] }
    });

    const scores = {};

    requests.forEach((request) => {
      const points = calculatePriorityPoints(request.priority); 

        const buildingId = request.buildingId.toString();

        if (!scores[buildingId]) scores[buildingId] = 0;

        scores[buildingId] += points;
    });

    const buildings = await Building.find({
        _id: { $in: Object.keys(scores) }
    });

    const result = buildings.map((building) => ({
        buildingId: building._id,
        name: building.name,
        score: scores[building._id.toString()]
    }));

    result.sort((a, b) => b.score - a.score);

    return result;
};
module.exports = {
    getDashboardSummary,
    getRecentRequests,
    getBuildingsNeedingAttention,
    getBuildingPriorityScores
};