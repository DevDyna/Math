/**
 *
 * @param {TagEvent.Item} event
 */
let ChemTag = (event) => {
  let valid_ingot;
  global.chem.name.forEach((element_name) => {
    event.add("kubejs:elements", "chemlib:" + element_name);
    global.chem.mods.forEach((mod_name) => {
      valid_ingot =
        mod_name == "mekanism"
          ? Item.of(mod_name + ":ingot_" + element_name)
          : Item.of(mod_name + ":" + element_name + "_ingot");
      if (valid_ingot != "minecraft:air") {
        event.add("kubejs:chem_ingots", valid_ingot.id);
      }
    });
  });
};
