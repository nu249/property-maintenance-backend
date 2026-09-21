const MaintenanceRequest = require("../models/MaintenanceRequest");
const getMaintenanceRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: "Error getting maintenance requests"
    });
  }
};
module.exports = { getMaintenanceRequests };