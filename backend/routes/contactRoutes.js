
const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController");

// POST: Submit contact form
router.post("/", createContact);

module.exports = router;
