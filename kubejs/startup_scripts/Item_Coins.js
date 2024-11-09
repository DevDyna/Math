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
      .tooltip("[" + tipBar("■", 4, "§7", "§a", index, "§7") + "]");
  });
};

function tipBar(mainChar, maxChar, offCol, onCol, progress, colorEnd) {
  let bar = offCol + "";
  for (let i = 0; i < maxChar; i++) {
    bar = progress <= i ? bar + onCol + mainChar : bar + mainChar;
  }
  return bar + colorEnd;
}
