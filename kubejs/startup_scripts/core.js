// priority: 0
const colorNames = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];

const hexColors = [
  0xff0000, 0x0000ff, 0x00ff00, 0xffff00, 0xffa500, 0x800080, 0xffc0cb,
  0xa52a2a, 0x000000, 0xffffff,
];

StartupEvents.registry("item", (event) => {
  colorNames.forEach((e, index) => {
    for (let i = 0; i < 10; i++) {
      event
        .create(i + 10 * index + "")
        .tag("kubejs:number")
        .tooltip(e.charAt(0).toUpperCase() + e.slice(1))
        .displayName("Card " + (i + 10 * index))
        .color(0, hexColors[index])
        .texture("layer0", "kubejs:item/card")
        .texture("layer1", "kubejs:item/" + i);
    }
  });

  let operator = (name) => {
    event
      .create(name)
      .texture("kubejs:item/" + name)
      .glow(true)
      .tag("kubejs:operator");
  };

  let special_operator = (name, color, layer0, layer1) => {
    event
      .create(name)
      .color(0, color)
      .texture("layer0", layer0)
      .texture("layer1", layer1)
      .glow(true)
      .tag("kubejs:operator");
  };
  operator("plus");
  operator("less");
  operator("for");
  operator("div");
  operator("power");
  special_operator(
    "chem",
    0x2ff9d7,
    "chemlib:item/compound_liquid_layer_0",
    "chemlib:item/compound_liquid_layer_1"
  );

  event
    .create("kubejs:paxel", "paxel")
    .parentModel("kubejs:item/paxel")
    .unstackable()
    .texture("kubejs:item/paxel")
    .displayName("Pick-axe")
    .tier("iron")
    .maxDamage(16384)
    .tag("bookshelf:pickaxes")
    .tag("forge:tools/axes")
    .tag("forge:tools/pickaxes")
    .tag("forge:pickaxes");
});
