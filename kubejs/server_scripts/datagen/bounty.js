ServerEvents.lowPriorityData((event) => {
  let bounty_pools_url = "bountiful:bounty_pools/bountiful/";
  let bounty_decrees_url = "bountiful:bounty_decrees/bountiful/";

  let bounty_pools = [
    "_all_objs",
    "_all_rews",
    "_equip_rews",
    "_gardening_rews",
    "_metal_objs",
    "armorer_objs",
    "armorer_rews",
    "butcher_objs",
    "butcher_rews",
    "cleric_objs",
    "cleric_rews",
    "farmer_objs",
    "farmer_rews",
    "fisherman_objs",
    "fisherman_rews",
    "fletcher_objs",
    "fletcher_rews",
    "inventor_objs",
    "inventor_rews",
    "leatherer_objs",
    "leatherer_rews",
    "librarian_objs",
    "librarian_rews",
    "mapper_objs",
    "mapper_rews",
    "shepherd_objs",
    "shepherd_rews",
    "toolsmith_objs",
    "toolsmith_rews",
  ];

  let bounty_decrees = [
    "armorer",
    "butcher",
    "cleric",
    "farmer",
    "fisherman",
    "fletcher",
    "inventor",
    "leatherer",
    "librarian",
    "mapper",
    "shepherd",
    "toolsmith",
  ];

  bounty_decrees.forEach((e) => {
    event.addJson(bounty_decrees_url + e, {});
  });

  bounty_pools.forEach((e) => {
    event.addJson(bounty_pools_url + e, {});
  });

  event.addJson(bounty_pools_url + "custom_reward", {
    content: {
      fletcher_obj_planks: {
        type: "item",
        content: "minecraft:bow",
        amount: {
          min: 1,
          max: 2,
        },
        unitWorth: 1000,
        nbt: "{Damage:0}",
      },
    },
  });

  event.addJson(bounty_pools_url + "custom_quest", {
    content: {
      fletcher_obj_planks: {
        type: "item_tag",
        content: "minecraft:planks",
        amount: {
          min: 6,
          max: 64,
        },
        unitWorth: 60,
      },
    },
  });

  event.addJson(bounty_decrees_url + "custom", {
    objectives: ["custom_quest"],
    rewards: ["custom_reward"],
  });



  
});
