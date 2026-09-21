const Apartment = require("../models/Apartment");
const getApartments = async (req, res) => {
      try {
        const apartments = await Apartment.find();
        res.status(200).json(apartments);
         } catch (error) {
             res.status(500).json({
  message: "Error getting apartments"
});  }
};
module.exports = { getApartments };