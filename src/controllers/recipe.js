const Recipe = require("../models/recipe");
const Ingredient = require("../models/recipe");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createRecipe = async (req, res) => {
    try {

        const { title, description, instructions, isFavorite, ingredients } = req.body;

        const processedIngredients = [];

        for (const item of ingredients) {
            const name = item.name.trim().toLowerCase();
            const unit = item.unit.trim().toLowerCase();

            console.log("name " + name);

            // Find existing ingredient by name
            let ingredient = await Ingredient.find({name: name});

            // If not found, create it
            if(!ingredient) {
                ingredient = await Ingredient.create({name: name, unit: unit});
            }

            processedIngredients.push({
                ingredient: ingredient._id,
                quantity: item.quantity
            });
        }

        // Creating the recipe
        const recipe = await Recipe.create({
            title: title,
            description: description,
            instructions: instructions,
            isFavorite: true,
            ingredients: processedIngredients,
        });

      res.status(201).json({ recipe });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };

module.exports = {
    getAllRecipes,
    createRecipe
}