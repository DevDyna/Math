// priority: 1
/**
 * Very bad recipes go away! ***Squash*** ups
 * @param {Internal.RecipesEventJS} event
 */
let removedRecipes = (event) => {


  let recipe_ids =[
    'projectred_expansion:battery',
    'projectred_expansion:electric_screwdriver',
    'projectred_core:multimeter',
    'projectred_expansion:frame',
    'projectred_expansion:deployer',
    'projectred_expansion:block_breaker',
    'projectred_expansion:frame_actuator',
   'projectred_expansion:frame_motor',
    'projectred_expansion:fire_starter',
    'projectred_expansion:auto_crafter',
    'projectred_expansion:battery_box',
    'projectred_expansion:project_bench',
    'projectred_core:silicon',
    'projectred_core:electrotine_generator',
    'projectred_core:plate',
  ]


  event.remove({
    not: [
      { type: "alchemistry:combiner" },
      { type: "alchemistry:dissolver" },
      { type: "alchemistry:compactor" },
      { mod: "projectred_transmission" },
      { mod: "projectred_integration" },
      { mod: "projectred_illumination" },
      { mod: "projectred_expansion" },
      { mod: "projectred_core" },
    ],
  });
  recipe_ids.forEach(e=>{
    event.remove({id:e})
  })
  
};
