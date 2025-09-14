
const Quote = require("../models/Quote");


const getRandomQuotes = async (req,res) =>{
     try {
    const count = await Quote.countDocuments();
    console.log("Quote count:", count);

    if (count === 0) {
      return res.status(404).json({ error: "No quotes found" });
    }

    const randomIndex = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(randomIndex);
    res.json(quote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Server error" });
  }
}
module.exports = {getRandomQuotes};
