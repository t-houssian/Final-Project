const mongoose = require('mongoose');
mongoose.set('debug', true);
const Schema = mongoose.Schema;

let nbaSchema = new Schema({
  FULL_NAME: {type: String, required: true}, 
  TEAM: {type: String, required: true}, 
  POS: {type: String, required: true}, 
  AGE: {type: Number, required: true}, 
  GP: {type: Number, required: true}, 
  MPG: {type: Number, required: true}, 
  MINPerc: {type: Number, required: true}, 
  USGPerc: {type: Number, required: true}, 
  TOPerc: {type: Number, required: true}, 
  FTA: {type: Number, required: true}, 
  FTPerc: {type: Number, required: true}, 
  TwoPA: {type: Number, required: true}, 
  TwoPPerc: {type: Number, required: true}, 
  ThreePA: {type: Number, required: true}, 
  ThreePPerc: {type: Number, required: true}, 
  eFGPerc: {type: Number, required: true}, 
  TSPerc: {type: Number, required: true}, 
  PPG: {type: Number, required: true}, 
  RPG: {type: Number, required: true}, 
  TRBPerc: {type: Number, required: true}, 
  APG: {type: Number, required: true}, 
  ASTPerc: {type: Number, required: true}, 
  SPG: {type: Number, required: true}, 
  BPG: {type: Number, required: true}, 
  TOPG: {type: Number, required: true}, 
  VIVersatility: {type: Number, required: true}, 
  ORTG: {type: Number, required: true}, 
  DRTG: {type: Number, required: true}
});

module.exports = mongoose.model('Nba', nbaSchema, "nba");