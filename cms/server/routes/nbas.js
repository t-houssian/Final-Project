var express = require("express");
var router = express.Router();

const Nba = require("../models/nba");

router.get("/", (req, res, next) => {
  Nba.find()
    .then((nbas) => {
      res.status(200).json({
        message: "nba fetched successfully",
        nbas: nbas,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {

  const nba = new Nba({
    FULL_NAME: req.body.FULL_NAME ,
    TEAM: req.body.TEAM ,
    POS: req.body.POS ,
    AGE: req.body.AGE ,
    GP: req.body.GP ,
    MPG: req.body.MPG ,
    MINPerc: req.body.MINPerc ,
    USGPerc: req.body.USGPerc ,
    TOPerc: req.body.TOPerc ,
    FTA: req.body.FTA ,
    FTPerc: req.body.FTPerc ,
    TwoPA: req.body.TwoPA ,
    TwoPPerc: req.body.TwoPPerc ,
    ThreePA: req.body.ThreePA ,
    ThreePPerc: req.body.ThreePPerc ,
    eFGPerc: req.body.eFGPerc ,
    TSPerc: req.body.TSPerc ,
    PPG: req.body.PPG ,
    RPG: req.body.RPG ,
    TRBPerc: req.body.TRBPerc ,
    APG: req.body.APG ,
    ASTPerc: req.body.ASTPerc ,
    SPG: req.body.SPG ,
    BPG: req.body.BPG ,
    TOPG: req.body.TOPG ,
    VIVersatility: req.body.VIVersatility ,
    ORTG: req.body.ORTG ,
    DRTG: req.body.DRTG ,
  });

  nba
    .save()
    .then((createdNba) => {
      res.status(201).json({
        message: "nba added successfully",
        nba: createdNba,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.put("/:FULL_NAME", (req, res, next) => {
  Nba.findOne({ FULL_NAME: req.params.FULL_NAME })
    .then((nba) => {
      nba.FULL_NAME = req.body.FULL_NAME;
      nba.TEAM = req.body.TEAM;
      nba.POS = req.body.POS;
      nba.AGE = req.body.AGE;
      nba.GP = req.body.GP;
      nba.MPG = req.body.MPG;
      nba.MINPerc = req.body.MINPerc;
      nba.USGPerc = req.body.USGPerc;
      nba.TOPerc = req.body.TOPerc;
      nba.FTA = req.body.FTA;
      nba.FTPerc = req.body.FTPerc;
      nba.TwoPA = req.body.TwoPA;
      nba.TwoPPerc = req.body.TwoPPerc;
      nba.ThreePA = req.body.ThreePA;
      nba.ThreePPerc = req.body.ThreePPerc;
      nba.eFGPerc = req.body.eFGPerc;
      nba.TSPerc = req.body.TSPerc;
      nba.PPG = req.body.PPG;
      nba.RPG = req.body.RPG;
      nba.TRBPerc = req.body.TRBPerc;
      nba.APG = req.body.APG;
      nba.ASTPerc = req.body.ASTPerc;
      nba.SPG = req.body.SPG;
      nba.BPG = req.body.BPG;
      nba.TOPG = req.body.TOPG;
      nba.VIVersatility = req.body.VIVersatility;
      nba.ORTG = req.body.ORTG;
      nba.DRTG = req.body.DRTG;

      Nba.updateOne({ FULL_NAME: req.params.FULL_NAME }, nba)
        .then((result) => {
          res.status(204).json({
            message: "nba updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "nba not found.",
        error: { nba: "nba not found" },
      });
    });
});

router.delete("/:FULL_NAME", (req, res, next) => {
  Nba.findOne({ FULL_NAME: req.params.FULL_NAME })
    .then((nba) => {
      Nba.deleteOne({ FULL_NAME: req.params.FULL_NAME })
        .then((result) => {
          res.status(204).json({
            message: "NBA deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "nba not found.",
        error: { nba: "nba not found" },
      });
    });
});





module.exports = router;