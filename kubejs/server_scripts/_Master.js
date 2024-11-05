// priority: -1

ServerEvents.recipes((event) => {
  removedRecipes(event);
  commonRecipes(event);
   OperatorRecipes(event);
  ChemConversion(event);
  LogFactoryRecipe(event);
  specialRecipes(event);
});

ServerEvents.tags("item", (event) => {
  ChemTag(event);
  BrokenFixerTag(event);
});

ServerEvents.lowPriorityData((event) => {
  Bounty_Reward(event)
  Bounty_Quest(event)
  Bounty_Core(event)
})

PlayerEvents.loggedIn((event) => {
  PlayerLogin(event);
});