/**
 *
 * @param {Internal.DataPackEventJS} event
 */
let Bounty_Core = (event) => {
  event.addJson(bounty_decrees_url + "chem_core", {
    objectives: ["chem_quest"],
    rewards: ["any_reward"],
  });

  event.addJson(bounty_decrees_url + "math_core", {
    objectives: ["math_quest"],
    rewards: ["any_reward"],
  });

  event.addJson(bounty_decrees_url + "operator_core", {
    objectives: ["operator_quest"],
    rewards: ["any_reward"],
  });

  event.addJson(bounty_decrees_url + "other_core", {
    objectives: ["other_quest"],
    rewards: ["any_reward"],
  });
};
