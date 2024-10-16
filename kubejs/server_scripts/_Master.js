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
  LogFactoryRecipe(event);
  specialRecipes(event);
});

// /**
//  *
//  * @param {TagEvent.Item} event
//  */
// let ChemTag=(event)=>{}
ServerEvents.tags("item", (event) => {
  ChemTag(event);
  BrokenFixerTag(event);
});


// /**
//  *
//  * @param {Internal.DataPackEventJS} event
//  */
// let ChemTag=(event)=>{}
ServerEvents.lowPriorityData((event) => {

  //Bounty_Remove(event)
  Bounty_Reward(event)
  Bounty_Quest(event)
  Bounty_Core(event)


})