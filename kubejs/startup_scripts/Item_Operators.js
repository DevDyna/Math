/**
 *
 * @param {Registry.Item} event
 */
let OperatorInit = (event) => {
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
};
