/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let Bounty_Quest = (event) => {
  math_quest(event);
  chem_quest(event);
  op_quest(event);
  other_quest(event);
};
/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let math_quest = (event) => {
  for (let i = crafting_number_min; i < crafting_number_max / 2; i++) {
    bounty.quests.math.ar.push(simple_deal("kubejs:" + i, 1, 10));
  }

  bounty.quests.math.ar.forEach((e, index) => {
    bounty.quests.math.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "math_quest", {
    content: bounty.quests.math.obj,
  });
};
/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let chem_quest = (event) => {
  global.chem.name.forEach((e) => {
    bounty.quests.chem.ar.push(simple_deal("chemlib:" + e, 1, 10));
  });

  bounty.quests.chem.ar.forEach((e, index) => {
    bounty.quests.chem.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "chem_quest", {
    content: bounty.quests.chem.obj,
  });
};
/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let op_quest = (event) => {
  bounty.operator_bounty.forEach((e) => {
    bounty.quests.operator.ar.push(simple_deal("kubejs:" + e, 1, 10));
  });

  bounty.quests.operator.ar.forEach((e, index) => {
    bounty.quests.operator.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "operator_quest", {
    content: bounty.quests.operator.obj,
  });
};
/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let other_quest = (event) => {
  bounty.quests.other.ar.push(simple_deal("minecraft:stone", 1, 10));

  bounty.quests.other.ar.forEach((e, index) => {
    bounty.quests.other.obj[index] = e;
  });

  event.addJson(bounty_pools_url + "other_quest", {
    content: bounty.quests.other.obj,
  });
};
