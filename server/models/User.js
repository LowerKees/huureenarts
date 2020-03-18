const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const keys = require("../config/keys");

// mongoose.connect(
//   "mongodb+srv://artshuren:kedbid-vatsaB-cozjy4@cluster0-gatgd.gcp.mongodb.net/test?retryWrites=true&w=majority",
//   { useUnifiedTopology: true, useNewUrlParser: true }
// );

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const UserSchema = new Schema({
  geslacht: {
    type: String,
    default: "",
    required: true
  },
  voornaam: {
    type: String,
    default: "",
    required: true
  },
  tussenvoegsel: {
    type: String,
    default: "",
    required: false
  },
  achternaam: {
    type: String,
    default: "",
    required: true
  },
  geboortedatum: {
    type: Date,
    default: Date.now,
    required: true
  },
  bigregnr: {
    type: String,
    default: "",
    required: true
  },
  straatnaam: {
    type: String,
    default: "",
    required: true
  },
  huisnummer: {
    type: Number,
    default: "",
    required: true
  },
  toevoeging: {
    type: String,
    default: "",
    required: false
  },
  postcode: {
    type: String,
    default: "",
    required: true
  },
  plaatsnaam: {
    type: String,
    default: "",
    required: true
  },
  telefoon: {
    type: String,
    default: "",
    required: true
  },
  email: {
    type: String,
    default: "",
    required: true
  },
  email2: {
    type: String,
    default: "",
    required: true
  },
  vaardigheid: {
    type: Map,
    of: Boolean
  },
  specialisme: {
    type: String,
    default: "",
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);