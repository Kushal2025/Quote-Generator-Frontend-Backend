const express = require("express");
const { getRandomQuotes} = require("../controllers/quoteController");

const router = express.Router();

router.get("/",getRandomQuotes);
module.exports = router;