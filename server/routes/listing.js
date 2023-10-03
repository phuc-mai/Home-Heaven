const router = require("express").Router();
const multer = require("multer");

const User = require("../models/User");
const Listing = require("../models/Listing")

/* Configure Multer for FILE UPLOADS */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

/* CREATE */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    /* Take information from the form */
    const {
      userId,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;

    const user = await User.findById(userId);

    /* The uploaded file is available as req.file */
    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    /* Get photo URLs */
    const listingPhotosPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      userId,
      firstName: user.firstName,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotosPaths,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    });

    await newListing.save();

    res.status(201).json(newListing);
  } catch (err) {
    res
      .status(409)
      .json({ message: "Fail to create Listing", error: err.message });
    console.log(err)
  }
});

/* READ */
router.get("/", async (req, res) => {
  try {
    const allListings = await Listing.find();
    res.status(202).json(allListings);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.get("/:userId/listings", async (req, res) => {
  try {
    const { userId } = req.params;
    const userListings = await Listing.find({ userId });
    res.status(202).json(userListings);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId);
    res.status(202).json(listing);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
