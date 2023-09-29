const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: String,
    category: {
      type: Object,
      required: true,
    },
    type: {
      type: Object,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    aptSuite: String,
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    bedroomCount: {
      type: Number,
      required: true,
    },
    bedCount: {
      type: Number,
      required: true,
    },
    bathroomCount: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Array,
      default: [{}],
    },
    listingPhotosPaths: [{ type: String }], // Store photo URLs as an array
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    highlightDesc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
