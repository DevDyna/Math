/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let commonRecipes = (event) => {
  let numToItem = (ar) => {
    let list = [];
    ar.forEach((e) => {
      list.push("kubejs:" + e);
    });
    return list;
  };

  event.recipes.kubejs.shapeless("xycraft_machines:machine_base", [
    "xycraft_world:kivi",
    "xycraft_world:aluminum_storage",
  ]);
  event.recipes.kubejs.shapeless("xycraft_world:kivi_rajan", [
    "4x xycraft_world:kivi",
  ]);

  event.recipes.kubejs.shaped("xycraft_machines:extractor", [
    ["xycraft_world:kivi_rajan"],
    ["xycraft_machines:machine_base"],
  ]);
  // event.recipes.shaped("4x projectred_expansion:pneumatic_tube", [
  //   ["minecraft:copper_ingot", "minecraft:glass", "minecraft:copper_ingot"],
  // ]);

  event.recipes.minecraft.smelting("minecraft:glass", "minecraft:sand");

  event.recipes.kubejs.shapeless("kubejs:1", ["minecraft:cobblestone"]);

  event.recipes.kubejs.shapeless("kubejs:plus", ["4x minecraft:cobblestone"]);
  event.recipes.kubejs.shapeless("2x minecraft:iron_ingot", [
    "3x kubejs:dense_iron_compound",
    "chemlib:einsteinium",
  ]);
  event.recipes.kubejs.shaped("kubejs:dense_iron_compound", [
    ["chemlib:iron", "chemlib:iron", "chemlib:iron"],
    ["chemlib:iron", "chemlib:dysprosium", "chemlib:iron"],
    ["chemlib:iron", "chemlib:iron", "chemlib:iron"],
  ]);

  event.recipes.kubejs.shapeless("minecraft:crafting_table", [
    "kubejs:chem",
    "3x kubejs:for",
  ]);

  event.recipes.kubejs.shaped("mekanismgenerators:wind_generator", [
    [nul, "mekanismgenerators:turbine_blade"],
    [nul, "kubejs:iron_rod"],
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
  ]);

  event.recipes.kubejs.shaped("4x kubejs:iron_rod", [
    ["chemlib:iron_plate"],
    ["chemlib:iron_plate"],
  ]);

  event.recipes.kubejs.shaped("mekanismgenerators:turbine_blade", [
    [nul, "chemlib:iron_plate"],
    ["chemlib:iron_plate", "kubejs:iron_rod", "chemlib:iron_plate"],
    [nul, "chemlib:iron_plate"],
  ]);

  event.recipes.kubejs.shapeless("kubejs:chem", numToItem([3, 8, 5, 13]));

  event.recipes.kubejs.shapeless("kubejs:for", ["kubejs:chem", "kubejs:plus"]);
  event.recipes.kubejs
    .shapeless("kubejs:div", ["kubejs:paxel", "kubejs:chem", "kubejs:for"])
    .damageIngredient("kubejs:paxel", 1);

  event.recipes.kubejs.shaped("alchemistry:combiner", [
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
    ["minecraft:iron_ingot", "kubejs:for", "minecraft:iron_ingot"],
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
  ]);
  event.recipes.kubejs.shaped("alchemistry:dissolver", [
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
    ["minecraft:iron_ingot", "kubejs:div", "minecraft:iron_ingot"],
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
  ]);
  event.recipes.kubejs.shaped("alchemistry:compactor", [
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
    ["minecraft:iron_ingot", "kubejs:chem", "minecraft:iron_ingot"],
    ["chemlib:iron_plate", "minecraft:iron_ingot", "chemlib:iron_plate"],
  ]);

  event.recipes.kubejs.shaped("8x mekanism:basic_universal_cable", [
    ["chemlib:iron_plate", "minecraft:redstone", "chemlib:iron_plate"],
  ]);

  event.recipes.kubejs.shaped("mekanism:basic_energy_cube", [
    [
      "chemlib:iron_plate",
      "mekanism:basic_universal_cable",
      "chemlib:iron_plate",
    ],
    [
      "mekanism:basic_universal_cable",
      "minecraft:redstone",
      "mekanism:basic_universal_cable",
    ],
    [
      "chemlib:iron_plate",
      "mekanism:basic_universal_cable",
      "chemlib:iron_plate",
    ],
  ]);

  event.recipes.kubejs.shaped("bountiful:bountyboard", [
    [woodLogs, woodPlanks, woodLogs],
    [woodPlanks, "minecraft:leather", woodPlanks],
    [woodLogs, woodPlanks, woodLogs],
  ]);
  event.recipes.kubejs.shaped("16x wares:cardboard_box", [
    [nul, "minecraft:paper"],
    ["minecraft:paper", nul, "minecraft:paper"],
    [nul, "minecraft:paper"],
  ]);

  event.recipes.kubejs.shaped("wares:delivery_table", [
    ["minecraft:ink_sac", nul, "minecraft:feather"],
    [woodLogs, woodPlanks, woodLogs],
    [woodLogs, nul, woodLogs],
  ]);

  event.recipes.kubejs.shaped("minecraft:stonecutter", [
    [nul, "minecraft:iron_ingot"],
    ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
  ]);

  event.recipes.minecraft.smelting("minecraft:smooth_stone", "minecraft:stone");

  event.recipes.minecraft.stonecutting(
    "4x projectred_core:plate",
    "minecraft:smooth_stone"
  );
};
