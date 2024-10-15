// priority: -1

// /**
//  *
//  * @param {Internal.RecipesEventJS} event
//  */
// let numToChem=(event)=>{}
ServerEvents.recipes((event) => {
  removedRecipes(event);
  commonRecipes(event);
  OperatorRecipes(event);
  ChemConversion(event);

  // event.recipes.kubejs.shapeless("kubejs:less", ["kubejs:plus"]);
  // event.recipes.kubejs.shapeless("kubejs:plus", ["kubejs:less"]);
});

// /**
//  *
//  * @param {TagEvent.Item} event
//  */
// let ChemTag=(event)=>{}
ServerEvents.tags("item", (event) => {
  ChemTag(event);
});