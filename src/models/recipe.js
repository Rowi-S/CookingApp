const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxLength: [20, "title cannot be more then 20 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide description"],
    trim: true,
    maxLength: [500, "Please keep the description under 500 charecters"],
  },
  ingredients: [{
    ingredient: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
    quantity: Number
  }],
  instructions: {
    type: String,
    required: [true, "must give instructions"],
    trim: true,
    maxLength: [1000, "Please keep the instructions under 1000 chacerters"],
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
