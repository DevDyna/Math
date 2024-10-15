/**
 *
 * @param {Registry.Item} event
 */
let CommonInit = (event) => {
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

  event
    .create("dense_iron_compound")
    .color(0, 0x878181)
    .texture("layer0", "chemlib:item/compound_solid_layer_0")
    .texture("layer1", "chemlib:item/compound_solid_layer_1");

  event
    .create("iron_rod")
    .color(0, 0xd4d4d4)
    .texture("layer0", "kubejs:item/rod");
};
