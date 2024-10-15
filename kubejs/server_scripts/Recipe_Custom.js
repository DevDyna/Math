/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let specialRecipes = (event) => {
  let xycraft_extractor = (output, count, tick_delay, block_below) => {
    event.custom({
      type: "xycraft_machines:extractor",
      adjacent: [],
      item_result: {
        Count: count,
        id: output,
      },
      target: {
        block: block_below,
        predicate_type: "xycraft_core:block_rule",
      },
      ticks: tick_delay,
      valid_directions: ["down", "up", "north", "south", "west", "east"],
    });
  };

  //CUSTOM - ALCHEMISTRY
  //---------------------------------------------------------------------//
  let xychron = [
    "xycraft_world:xychorium_gem_blue",
    "xycraft_world:xychorium_gem_dark",
    "xycraft_world:xychorium_gem_green",
    "xycraft_world:xychorium_gem_red",
    "xycraft_world:xychorium_gem_light",
  ];
  let xychron_result = [];
  xychron.forEach((e) => {
    xychron_result.push({
      count: 1,
      item: e,
    });
  });
  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 1,
      ingredient: {
        item: "xycraft_world:kivi_rajan",
      },
    },
    output: {
      groups: [
        {
          probability: 100,
          results: xychron_result,
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });
  //---------------------------------------------------------------------//
  //CUSTOM - XYCRAFT
  //---------------------------------------------------------------------//
  xycraft_extractor("xycraft_world:kivi", 1, 20, "xycraft_world:kivi_rajan");
  xycraft_extractor(
    "minecraft:cobblestone",
    64,
    1,
    "xycraft_world:aluminum_storage"
  );
  xycraft_extractor("chemlib:cellulose", 1, 80, "minecraft:oak_sapling");
  //---------------------------------------------------------------------//
};
