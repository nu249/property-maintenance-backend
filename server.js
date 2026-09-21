require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const app = express();
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const buildingRoutes = require("./routes/buildingRoutes");
const apartmentRoutes = require("./routes/apartmentRoutes");
const maintenanceRequestRoutes = require("./routes/maintenanceRequestRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 3000;
connectDB();

   app.use("/api/users", userRoutes);
   app.use("/api/buildings", buildingRoutes);
   app.use("/api/apartments", apartmentRoutes);
   app.use("/api/maintenance-requests", maintenanceRequestRoutes);
   app.use("/api/dashboard", dashboardRoutes);
app.get("/", (req, res) => {
    res.send("Property Maintenance Backend is running!");
});
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is healthy"
    });
});
app.use(errorHandler);
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });