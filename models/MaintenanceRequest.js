const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema({
    buildingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    apartmentNumber: {
        type: String,
        required: true
    },
    apartmentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
},

    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
  type: String,
  required: true,
  enum: ["critical", "high", "medium", "low"]
},
category: {
  type: String,
  required: true
},
createdAt: {
  type: Date,
  default: Date.now
},
resolutionDate: {
  type: Date,
  default: null
}

});

const MaintenanceRequest = mongoose.model(
    "MaintenanceRequest",
    maintenanceRequestSchema,
    "maintenanceRequests"
);

module.exports = MaintenanceRequest;