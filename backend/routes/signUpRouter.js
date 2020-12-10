const express = require("express");
const personSignUpController = require("../controllers/signUpController");
const router = express.Router();

// Adding API routes 
router.post("/", personSignUpController.signUpForm);
router.get("/", personSignUpController.getForm);

module.exports = router;