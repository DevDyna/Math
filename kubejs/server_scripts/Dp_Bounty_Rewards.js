/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let Bounty_Reward = (event) => {
  for (let i = 0; i < 10; i++) {
    bounty.rewards.ar.push(
      ware_nbt(
        "Decree Chem",
        1,
        `[{id:"bountiful:decree",Count:1,tag:{ "bountiful:decree_data": '{"ids":["chem_core"]}'}}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Decree Chem"
      )
    );

    bounty.rewards.ar.push(
      ware_nbt(
        "Decree Math",
        1,
        `[{id:"bountiful:decree",Count:1,tag:{ "bountiful:decree_data": '{"ids":["math_core"]}'}}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Decree Math"
      )
    );

    bounty.rewards.ar.push(
      ware_nbt(
        "Decree Operator",
        1,
        `[{id:"bountiful:decree",Count:1,tag:{ "bountiful:decree_data": '{"ids":["op_core"]}'}}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Decree Operator"
      )
    );

    bounty.rewards.ar.push(
      ware_nbt(
        "Decree Other",
        1,
        `[{id:"bountiful:decree",Count:1,tag:{ "bountiful:decree_data": '{"ids":["other_core"]}'}}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Decree Other"
      )
    );

    bounty.rewards.ar.push(
      ware_nbt(
        "Uncrafting Table",
        1,
        `[{id:"twilightforest:uncrafting_table",Count:1}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Uncrafting Table"
      )
    );

    bounty.rewards.ar.push(
      ware_nbt(
        "Backpack",
        1,
        `[{id:"sophisticatedbackpacks:backpack",Count:1,tag:{inventorySlots:27,renderInfo:{upgradeItems:[{Count:1b,id:"sophisticatedbackpacks:feeding_upgrade"}]},upgradeSlots:1}}]`,
        `[{id:"kubejs:` + i + `",Count:{max:64,min:1,step:1}}]`,
        "Backpack"
      )
    );
  }

  bounty.op_bounty.forEach((e) => {
    bounty.rewards.ar.push(simple_deal("kubejs:" + e, 1, 4));
  });

  bounty.rewards.ar.forEach((e, index) => {
    bounty.rewards.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "any_reward", {
    content: bounty.rewards.obj,
  });
};
