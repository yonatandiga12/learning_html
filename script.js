
// recipeFunctions.js

async function getRecipe(recipeName) {
    const response = await fetch('recipes.json'); // Load the JSON data
    const recipes = await response.json(); // Parse JSON data
    
    // Find the recipe with the specified name
    const matchedRecipe = recipes.find(recipe => recipe.name === recipeName);
    return matchedRecipe;
}

async function displayRecipeDetails(recipeName) {
    const recipe = await getRecipe(recipeName);

    const recipeNameElement = document.createElement("p");
    recipeNameElement.textContent = recipe.name;
    document.getElementById("recipeTitle").append(recipeNameElement);

    const ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        ingredientsList.appendChild(ingredientItem);
    });
    document.getElementById("recipeIngredients").append(ingredientsList);

    const instructionsList = document.createElement("ul");
    recipe.instructions.forEach( instruction => {
        const instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem);
    });
    document.getElementById("recipeInstructions").append(instructionsList);
}