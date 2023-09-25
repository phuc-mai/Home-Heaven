const router = require("express").Router();

const User = require("../models/User");
const Listing = require("../models/Listing");

/* CREATE */
router.post("/listing", async (req, res) => {
  try {
    const {
      userId,
      category,
      type,
      title,
      location,
      imagePath,
      description,
      roomCount,
      bedCount,
      bathroomCount,
      guestCount,
      price,
      highlight,
      highlightDesc,
      amenities,
    } = req.body;

    const user = await User.findById(userId);

    const newListing = new Listing({
      userId,
      firstName: user.firstName,
      category,
      type,
      title,
      location,
      imagePath,
      description,
      roomCount,
      bedCount,
      bathroomCount,
      guestCount,
      price,
      highlight,
      highlightDesc,
      amenities,
    });

    await newListing.save()

    res.status(201).json(newListing)
  } catch (err) {
    res.status(409).json({ message: "Fail to create Listing", error: err.message });
  }
});

/* READ */
router.get("/", async (req, res) => {
  try {
    const allListings = await Listing.find()
    res.status(202).json(allListings)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.get("/:userId/listings", async (req, res) => {
  try {
    const { userId } = req.params
    const userListings = await Listing.find({ userId })
    res.status(202).json(userListings)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

module.exports = router;
