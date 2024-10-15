// priority: 1
/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let ChemConversion = (event) => {
  let elements = Array.from(global.chem.name);
  let name_element = Array.from(global.chem.name);
  let name_element2 = Array.from(global.chem.name);

  let mod_list = ["mekanism", "xycraft_world", "minecraft", "chemlib"];

  for (let i = 1; i < crafting_number_max + 1; i++) {
    event.recipes.kubejs.shapeless("chemlib:" + elements[i], [
      "kubejs:chem",
      "kubejs:" + i,
    ]);

    mod_list.forEach((mod_list_1) => {
      if (
        (mod_list_1 == "mekanism"
          ? Item.of(mod_list_1 + ":ingot_" + elements[i])
          : Item.of(mod_list_1 + ":" + elements[i] + "_ingot")) !=
        "minecraft:air"
      ) {
        tagItems.ingot.push((mod_list_1 == "mekanism"
            ? Item.of(mod_list_1 + ":ingot_" + elements[i])
            : Item.of(mod_list_1 + ":" + elements[i] + "_ingot")));
      }

      //tagItems.ingot

      if (
        Item.of("chemlib:" + elements[i] + "_plate") != "minecraft:air" &&
        (mod_list_1 == "mekanism"
          ? Item.of(mod_list_1 + ":ingot_" + elements[i])
          : Item.of(mod_list_1 + ":" + elements[i] + "_ingot")) !=
          "minecraft:air" &&
        name_element2.indexOf(elements[i]) != -1
      ) {
        event.recipes.kubejs
          .shapeless("chemlib:" + elements[i] + "_plate", [
            "kubejs:paxel",
            mod_list_1 + ":" + elements[i] + "_ingot",
          ])
          .damageIngredient("kubejs:paxel", 1);
        name_element2.splice(name_element2.indexOf(elements[i]), 1);
      }

      mod_list.forEach((mod_list_2) => {
        if (
          Item.of(mod_list_2 + ":" + elements[i] + "_dust") !=
            "minecraft:air" &&
          (mod_list_1 == "mekanism"
            ? Item.of(mod_list_1 + ":ingot_" + elements[i])
            : Item.of(mod_list_1 + ":" + elements[i] + "_ingot")) !=
            "minecraft:air" &&
          name_element.indexOf(elements[i]) != -1
        ) {
          event.recipes.minecraft.smelting(
            mod_list_1 + ":" + elements[i] + "_ingot",
            mod_list_2 + ":" + elements[i] + "_dust"
          );
          name_element.splice(name_element.indexOf(elements[i]), 1);
        }
      });
    });
  }
};
