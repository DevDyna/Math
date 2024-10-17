/**
 *
 * @param {Registry.Item} event
 */
let CoinsInit = (event) => {
  let coins = {
    name: ["bronze", "silver", "gold", "platinum"],
    hex: [0xcd7f32, 0xc0c0c0, 0xffd700, 0xe5e4e2],
  };

  coins.name.forEach((e, index) => {
    event
      .create(e + "_coin")
      .modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "kubejs:item/coin",
        },
      })
      .color(0, coins.hex[index])
      .tag("kubejs:coins")
      .tooltip(
        "§7[" +
          (index == 0 ? "§f" : "§7") +
          "■" +
          (index == 1 ? "§f" : "§7") +
          "■" +
          (index == 2 ? "§f" : "§7") +
          "■" +
          (index == 3 ? "§f" : "§7") +
          "■§7]"
      );
  });
};
