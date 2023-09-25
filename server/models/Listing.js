const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: String,
    category: String,
    type: String,
    title: String,
    location: String,
    imagePath: String,
    description: String,
    roomCount: Int,
    bedCount: Int,
    bathroomCount: Int,
    guestCount: Int,
    price: Int,
    highlight: String,
    highlightDesc: String,
    amenities: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema)

module.exports = Listing
