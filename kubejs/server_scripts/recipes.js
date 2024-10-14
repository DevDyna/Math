ServerEvents.recipes((event) => {
  event.remove({
    not: [
      { type: "alchemistry:combiner" },
      { type: "alchemistry:dissolver" },
      { type: "alchemistry:compactor" },
    ],
  });

  event.recipes.create.filling("xycraft_world:kivi_rajan", [
    Fluid.of("minecraft:water", 1000),
    "xycraft_world:kivi",
  ]);

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

  event.custom({
    type: "xycraft_machines:extractor",
    adjacent: [],
    item_result: {
      Count: 1,
      id: "xycraft_world:kivi",
    },
    target: {
      block: "xycraft_world:kivi_rajan",
      predicate_type: "xycraft_core:block_rule",
    },
    ticks: 20,
    valid_directions: ["down", "up", "north", "south", "west", "east"],
  });

  event.custom({
    type: "xycraft_machines:extractor",
    adjacent: [],
    item_result: {
      Count: 64,
      id: "minecraft:cobblestone",
    },
    target: {
      block: "xycraft_world:aluminum_storage",
      predicate_type: "xycraft_core:block_rule",
    },
    ticks: 1,
    valid_directions: ["down", "up", "north", "south", "west", "east"],
  });

  let crafting_number_max = 99;

  let uncraft = (input, outputs) =>
    event.custom({
      type: "twilightforest:uncrafting",
      cost: 0,
      input: {
        ingredient: {
          item: input,
        },
      },
      key: {
        A: {
          item: outputs[0],
        },
        B: {
          item: outputs[1],
        },
      },
      pattern: ["AB"],
    });

  let nul = "minecraft:air";

  event.recipes.kubejs.shapeless("kubejs:1", ["minecraft:cobblestone"]);
  event.recipes.kubejs.shapeless("kubejs:less", ["kubejs:plus"]);
  event.recipes.kubejs.shapeless("kubejs:plus", ["kubejs:less"]);
  event.recipes.kubejs.shaped("kubejs:plus", [
    [nul, "minecraft:cobblestone", nul],
    ["minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone"],
    [nul, "minecraft:cobblestone", nul],
  ]);

  for (let i_result = 1; i_result < crafting_number_max + 1; i_result++) {
    for (let i_add1 = 0; i_add1 < crafting_number_max + 1; i_add1++) {
      for (let i_add2 = 0; i_add2 < crafting_number_max + 1; i_add2++) {
        if (i_result == i_add1 + i_add2) {
          event.recipes.kubejs
            .shapeless("kubejs:" + i_result, [
              "kubejs:" + i_add1,
              "kubejs:plus",
              "kubejs:" + i_add2,
            ])
            .keepIngredient("kubejs:plus")
            .id(i_result + "_from_" + i_add1 + "_plus_" + i_add2);
          event.recipes.kubejs
            .shapeless("kubejs:" + i_add1, [
              "kubejs:" + i_result,
              "kubejs:less",
              "kubejs:" + i_add2,
            ])
            .keepIngredient("kubejs:less")
            .id(i_add1 + "_from_" + i_result + "_less_" + i_add2);
          uncraft("kubejs:" + i_result, [
            "kubejs:" + i_add1,
            "kubejs:" + i_add2,
          ]);
        }
      }
    }
  }

  let elements = {
    1: "hydrogen",
    2: "helium",
    3: "lithium",
    4: "beryllium",
    5: "boron",
    6: "carbon",
    7: "nitrogen",
    8: "oxygen",
    9: "fluorine",
    10: "neon",
    11: "sodium",
    12: "magnesium",
    13: "aluminum",
    14: "silicon",
    15: "phosphorus",
    16: "sulfur",
    17: "chlorine",
    18: "argon",
    19: "potassium",
    20: "calcium",
    21: "scandium",
    22: "titanium",
    23: "vanadium",
    24: "chromium",
    25: "manganese",
    26: "iron",
    27: "cobalt",
    28: "nickel",
    29: "copper",
    30: "zinc",
    31: "gallium",
    32: "germanium",
    33: "arsenic",
    34: "selenium",
    35: "bromine",
    36: "krypton",
    37: "rubidium",
    38: "strontium",
    39: "yttrium",
    40: "zirconium",
    41: "niobium",
    42: "molybdenum",
    43: "technetium",
    44: "ruthenium",
    45: "rhodium",
    46: "palladium",
    47: "silver",
    48: "cadmium",
    49: "indium",
    50: "tin",
    51: "antimony",
    52: "tellurium",
    53: "iodine",
    54: "xenon",
    55: "cesium",
    56: "barium",
    57: "lanthanum",
    58: "cerium",
    59: "praseodymium",
    60: "neodymium",
    61: "promethium",
    62: "samarium",
    63: "europium",
    64: "gadolinium",
    65: "terbium",
    66: "dysprosium",
    67: "holmium",
    68: "erbium",
    69: "thulium",
    70: "ytterbium",
    71: "lutetium",
    72: "hafnium",
    73: "tantalum",
    74: "tungsten",
    75: "rhenium",
    76: "osmium",
    77: "iridium",
    78: "platinum",
    79: "gold",
    80: "mercury",
    81: "thallium",
    82: "lead",
    83: "bismuth",
    84: "polonium",
    85: "astatine",
    86: "radon",
    87: "francium",
    88: "radium",
    89: "actinium",
    90: "thorium",
    91: "protactinium",
    92: "uranium",
    93: "neptunium",
    94: "plutonium",
    95: "americium",
    96: "curium",
    97: "berkelium",
    98: "californium",
    99: "einsteinium",
    100: "fermium",
    101: "mendelevium",
    102: "nobelium",
    103: "lawrencium",
    104: "rutherfordium",
    105: "dubnium",
    106: "seaborgium",
    107: "bohrium",
    108: "hassium",
    109: "meitnerium",
    110: "darmstadtium",
    111: "roentgenium",
    112: "copernicium",
    113: "nihonium",
    114: "flerovium",
    115: "moscovium",
    116: "livermorium",
    117: "tennessine",
    118: "oganesson",
  };

  let name_element = [
    "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", 
    "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminum", "silicon", 
    "phosphorus", "sulfur", "chlorine", "argon", "potassium", "calcium", 
    "scandium", "titanium", "vanadium", "chromium", "manganese", "iron", 
    "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", 
    "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", 
    "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", 
    "rhodium", "palladium", "silver", "cadmium", "indium", "tin", "antimony", 
    "tellurium", "iodine", "xenon", "cesium", "barium", "lanthanum", "cerium", 
    "praseodymium", "neodymium", "promethium", "samarium", "europium", 
    "gadolinium", "terbium", "dysprosium", "holmium", "erbium", "thulium", 
    "ytterbium", "lutetium", "hafnium", "tantalum", "tungsten", "rhenium", 
    "osmium", "iridium", "platinum", "gold", "mercury", "thallium", "lead", 
    "bismuth", "polonium", "astatine", "radon", "francium", "radium", 
    "actinium", "thorium", "protactinium", "uranium", "neptunium", 
    "plutonium", "americium", "curium", "berkelium", "californium", 
    "einsteinium", "fermium", "mendelevium", "nobelium", "lawrencium", 
    "rutherfordium", "dubnium", "seaborgium", "bohrnium", "hassium", 
    "meitnerium", "darmstadtium", "roentgenium", "copernicium", 
    "nihonium", "flerovium", "moscovium", "livermorium", "tennessine", 
    "oganesson"
  ];
  
  

  let md = ["create", "embers", "xycraft_world", "minecraft", "chemlib"];

  for (let i = 1; i < crafting_number_max + 1; i++) {
    event.recipes.kubejs.shapeless("chemlib:" + elements[i], [
      "kubejs:chem",
      "kubejs:" + i,
    ]);

    md.forEach((mod1) => {
      md.forEach((mod2) => {
        if (
          Item.of(mod2 + ":" + elements[i] + "_dust") != "minecraft:air" &&
          Item.of(mod1 + ":" + elements[i] + "_ingot") != "minecraft:air" &&
          name_element.indexOf(elements[i])!= -1
        ) {
          event.recipes.minecraft.smelting(
            mod1 + ":" + elements[i] + "_ingot",
            mod2 + ":" + elements[i] + "_dust"
          );
          name_element.splice(name_element.indexOf(elements[i]),1)
        }
      });
    });
  }

  event.recipes.kubejs.shapeless("kubejs:chem", [
    "kubejs:3",
    "kubejs:8",
    "kubejs:5",
    "kubejs:13",
  ]);

  event.recipes.kubejs.shapeless("kubejs:for", ["kubejs:chem", "kubejs:plus"]);
});
