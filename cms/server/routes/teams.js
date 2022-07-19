var express = require("express");
var router = express.Router();

const Nba = require("../models/nba");

router.get("/", (req, res, next) => {
  Nba.find()
    .then((teams) => {
      res.status(200).json({
        message: "teams fetched successfully",
        teams: teams,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "An error occurred",
        error: error,
      });
    });
});

module.exports = router;