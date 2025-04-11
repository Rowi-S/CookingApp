const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name cannot be more then 20 characters"],
  },
  unit: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [500, "Please keep the description under 500 charecters"],
  }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
