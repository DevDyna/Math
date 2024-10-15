/**
 *
 * @param {Registry.Item} event
 */
let NumberInit = (event) => {
  let colors = {
    name:[
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
    ],
    hex : [
      0xff0000, 0x0000ff, 0x00ff00, 0xffff00, 0xffa500, 0x800080, 0xffc0cb,
      0xa52a2a, 0x000000, 0xffffff,
    ]
  };

  colors.name.forEach((color_name, index) => {
    for (let i = 0; i < 10; i++) {
      event
        .create(i + 10 * index + "")
        .tag("kubejs:number")
        .tooltip(color_name.charAt(0).toUpperCase() + color_name.slice(1))
        .displayName("Card " + (i + 10 * index))
        .color(0, colors.hex[index])
        .texture("layer0", "kubejs:item/card")
        .texture("layer1", "kubejs:item/" + i);
    }
  });
};
