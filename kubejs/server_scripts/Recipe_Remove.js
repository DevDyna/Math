// priority: 1
/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let removedRecipes = (event) => {
  event.remove({
    not: [
      { type: "alchemistry:combiner" },
      { type: "alchemistry:dissolver" },
      { type: "alchemistry:compactor" },
    ],
  });
};
