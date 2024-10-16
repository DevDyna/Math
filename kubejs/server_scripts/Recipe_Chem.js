// priority: 1
/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let ChemConversion = (event) => {
  let element_0 = Array.from(global.chem.name);
  let element_1 = Array.from(global.chem.name);
  let element_2 = Array.from(global.chem.name);

  //let mod_list = ["mekanism", "xycraft_world", "minecraft", "chemlib"];

  // CHEM NUMBER -> ELEMENT
  for (let i = 0; i < crafting_number_max; i++) {
    event.recipes.kubejs.shapeless("chemlib:" + element_0[i], [
      "kubejs:chem",
      "kubejs:" + (i+1),
    ]);

    global.utils.mods.forEach((mod_list_1) => {
      //SHAPELESS PAXEL INGOT -> PLATE
      if (
        Item.of("chemlib:" + element_0[i] + "_plate") != "minecraft:air" &&
        (mod_list_1 == "mekanism"
          ? Item.of(mod_list_1 + ":ingot_" + element_0[i])
          : Item.of(mod_list_1 + ":" + element_0[i] + "_ingot")) !=
          "minecraft:air" &&
        element_2.indexOf(element_0[i]) != -1
      ) {
        event.recipes.kubejs
          .shapeless("chemlib:" + element_0[i] + "_plate", [
            "kubejs:paxel",
            (mod_list_1 == "mekanism"
            ? Item.of(mod_list_1 + ":ingot_" + element_0[i])
            : Item.of(mod_list_1 + ":" + element_0[i] + "_ingot")),
          ])
          .damageIngredient("kubejs:paxel", 1);
        element_2.splice(element_2.indexOf(element_0[i]), 1);
      }

      global.utils.mods.forEach((mod_list_2) => {
        //SMELTING DUST -> INGOT
        if (
          Item.of(mod_list_2 + ":" + element_0[i] + "_dust") !=
            "minecraft:air" &&
          (mod_list_1 == "mekanism"
            ? Item.of(mod_list_1 + ":ingot_" + element_0[i])
            : Item.of(mod_list_1 + ":" + element_0[i] + "_ingot")) !=
            "minecraft:air" &&
          element_1.indexOf(element_0[i]) != -1
        ) {
          event.recipes.minecraft.smelting(
            mod_list_1 == "mekanism"
              ? Item.of(mod_list_1 + ":ingot_" + element_0[i])
              : Item.of(mod_list_1 + ":" + element_0[i] + "_ingot"),
            mod_list_2 + ":" + element_0[i] + "_dust"
          );
          element_1.splice(element_1.indexOf(element_0[i]), 1);
        }
      });
    });
  }
};
