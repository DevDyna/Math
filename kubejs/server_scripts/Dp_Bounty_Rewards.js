/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let Bounty_Reward = (event) => {
  let coins = ["bronze", "silver", "gold", "platinum"];

  coins.forEach((e, index) => {
    global.chem.name.forEach((c, ind) => {
      if (ind > 40 && ind <= 90)
        bounty.rewards.ar.push(
          ware_nbt(
            "🧪 Science Exam 🧪",
            "{max:256,min:24,step:1}",
            `[{id:"kubejs:` + e + `_coin",Count:1}]`,
            `[{id:"chemlib:` +
              c +
              `",Count:{max:${(index + 1) * 16},min:${Math.floor(
                index * 16 - 1
              )},step:1}}]`,
            "Minechem Enterprise ®"
          )
        );
    });

    for (let i = 0; i < 100; i++) {
      bounty.rewards.ar.push(
        ware_nbt(
          "⛏ Paxel ⛏",
          1,
          `[{id:"kubejs:paxel",Count:1}]`,
          `[{id:"kubejs:` + e + `_coin",Count:{max:10,min:1,step:1}}]`,
          "Mine and Craft PLC"
        )
      );

      bounty.rewards.ar.push(
        ware_nbt(
          "✉ Decree ✉",
          1,
          `[{id:"bountiful:decree",Count:1}]`,
          `[{id:"kubejs:` + e + `_coin",Count:{max:10,min:1,step:1}}]`,
          "Decree Service Inc."
        )
      );

      // bounty.rewards.ar.push(
      //   ware_nbt(
      //     "🔥 Uncrafting Table 🔥",
      //     1,
      //     `[{id:"twilightforest:uncrafting_table",Count:1}]`,
      //     `[{id:"kubejs:` + e + `_coin",Count:{max:10,min:1,step:1}}]`,
      //     "Twilight Forest ©"
      //   )
      // );

      bounty.rewards.ar.push(
        ware_nbt(
          "⛄ Backpack ⛄",
          1,
          `[{id:"sophisticatedbackpacks:backpack",Count:1},{id:"sophisticatedbackpacks:advanced_feeding_upgrade",Count:1}]`,
          `[{id:"kubejs:` + e + `_coin",Count:{max:10,min:1,step:1}}]`,
          "Sophisticated Home LLC"
        )
      );

      bounty.rewards.ar.push(simple_deal('kubejs:power',1,8))
    }
  });

  global.chem.name.forEach((e) => {
    bounty.rewards.ar.push(simple_deal("chemlib:" + e, 1, 4));
    bounty.rewards.ar.push(simple_deal("chemlib:" + e + "_nugget", 1, 4));
    bounty.rewards.ar.push(simple_deal("chemlib:" + e + "_ingot", 1, 4));
    bounty.rewards.ar.push(simple_deal("chemlib:" + e + "_metal_block", 1, 4));
  });

  bounty.rewards.ar.forEach((e, index) => {
    bounty.rewards.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "any_reward", {
    content: bounty.rewards.obj,
  });
};
