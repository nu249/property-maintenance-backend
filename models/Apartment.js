const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
    buildingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    apartmentNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    }});
const Apartment = mongoose.model(
    "Apartment",
    apartmentSchema,
    "apartments"
);
module.exports = Apartment;