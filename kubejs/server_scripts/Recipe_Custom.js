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

  let alchemistry_compactor = (input, count, output) => {
    event.custom({
      type: "alchemistry:compactor",
      group: "alchemistry:compactor",
      input: {
        count: count,
        ingredient: {
          item: input,
        },
      },
      result: {
        item: output,
      },
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
      probability: 20.0,
      results: [
        {
          count: 1,
          item: e,
        },
      ],
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
      groups: xychron_result,
      rolls: 1,
      weighted: false,
    },
  });

  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 1,
      ingredient: {
        item: "kubejs:plus",
      },
    },
    output: {
      groups: [
        {
          probability: 100,
          results: [
            {
              count: 1,
              item: "kubejs:less",
            },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  let xychron_gems = [
    "xycraft_world:xychorium_gem_blue",
    "xycraft_world:xychorium_gem_red",
    "xycraft_world:xychorium_gem_green",
  ];
  let gems = [
    "projectred_core:sapphire",
    "projectred_core:ruby",
    "projectred_core:peridot",
  ];
  gems.forEach((e, i) => {
    event.custom({
      type: "alchemistry:combiner",
      group: "alchemistry:combiner",
      input: [
        {
          count: 1,
          ingredient: {
            item: xychron_gems[i],
          },
        },
        {
          count: 1,
          ingredient: {
            item: "xycraft_world:xychorium_gem_light",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "xycraft_world:xychorium_gem_dark",
          },
        },
      ],
      result: {
        item: e,
      },
    });
  });

  alchemistry_compactor("chemlib:titanium_oxide", 4, "minecraft:ink_sac");
  alchemistry_compactor("chemlib:hydroxylapatite", 1, "minecraft:white_dye");
  alchemistry_compactor("chemlib:cellulose", 4, "minecraft:brown_dye");
  alchemistry_compactor("chemlib:cobalt_aluminate", 4, "minecraft:blue_dye");

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
  //CUSTOM - BOTANY POTS
  //---------------------------------------------------------------------//
  //---------------------------------------------------------------------//
};
