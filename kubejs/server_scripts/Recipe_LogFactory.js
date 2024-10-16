/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let LogFactoryRecipe = (event) => {
  let LogFactoryList = Ingredient.of("#minecraft:logs").itemIds.filter(
    (item) => !/stripped|wood|hyphae|twilightforest/.test(item)
  );

  LogFactoryList = LogFactoryList.map((str) => str.replace(/log|stem/g, ""));

  LogFactoryList.forEach((e) => {
    console.log(
      "4x " +
        e +
        "planks <- " +
        "#" +
        e +
        (/crimson/g.test(e)|| /warped/g.test(e) ? "stems" : "logs")
    );
    event.recipes.kubejs.shapeless("4x " + e + "planks", [
      "#" + e + (/crimson/g.test(e)|| /warped/g.test(e) ? "stems" : "logs"),
    ]);
  });
};
