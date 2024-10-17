const $MekanismJEI = Java.loadClass("mekanism.client.jei.MekanismJEI");
JEIEvents.hideCustom((event) => {
  // event.get($MekanismJEI.TYPE_GAS).hideAll();
  // event.get($MekanismJEI.TYPE_INFUSION).hideAll();
  event.get($MekanismJEI.TYPE_PIGMENT).hideAll();
  event.get($MekanismJEI.TYPE_SLURRY).hideAll();
});

JEIEvents.hideFluids((event) => {
  event.hideAll();
});

let DEV_MODE = false;

if (DEV_MODE) {
  JEIEvents.hideItems((event) => {
    event.hideAll();
  });

  JEIEvents.addItems((event) => {
    let list = [
      "kubejs:paxel",
      "create:mechanical_crafter",
      "minecraft:cobblestone",
      "minecraft:crafting_table",
      "twilightforest:uncrafting_table",
      "create:mechanical_mixer",
      "create:basin",
    ];
    list.forEach((e) => {
      event.add(e);
    });

    let special = ["plus", "less", "for", "div"];
    special.forEach((element) => {
      event.add("kubejs:" + element);
    });

    for (let i = 0; i < 100; i++) {
      event.add("kubejs:" + i);
    }
  });
}

JEIEvents.removeCategories((event) => {
  let list = [
    'minecraft:furnace',
    "mekanismgenerators:fission",
    "ae2:condenser",
    "minecraft:anvil",
    "minecraft:brewing",
    "minecraft:compostable",
    "minecraft:fuel",
    "create:automatic_brewing",
    "ae2:attunement",
    "ae2:certus_growth",
    "jei:information",
    "create:draining",
    "create:item_application",
    "create:mystery_conversion",
    "create:spout_filling",
    "thermal:bottler",
    "thermal:disenchantment_fuel",
    "thermal:gourmand_fuel",
    "thermal:stirling_fuel",
    "mekanism:sps_casing",
    "mekanism:nutritional_liquifier",
    "mekanism:boiler_casing",
  ];
  list.forEach((e) => {
    event.remove(e);
  });
});
