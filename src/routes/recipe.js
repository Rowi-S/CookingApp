const express = require("express");

const router = express.Router();

const {
    getAllRecipes,
    createRecipe
} = require("../controllers/recipe");

router.route("/").get(getAllRecipes).post(createRecipe);
// router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
//put is for full update
//patch is for partial update

module.exports = router;
