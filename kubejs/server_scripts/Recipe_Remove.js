// priority: 1
/**
 * Very bad recipes go away! ***Squash*** ups
 * @param {Internal.RecipesEventJS} event
 */
let removedRecipes = (event) => {
  //BADRECIPES(event)
  event.remove({
    not: [
      { type: "alchemistry:combiner" },
      { type: "alchemistry:dissolver" },
      { type: "alchemistry:compactor" },
    ],
  });
};
