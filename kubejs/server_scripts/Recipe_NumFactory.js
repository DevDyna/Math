/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let OperatorRecipes = (event) => {
  /**
   *
   * @param {[string,string]} inputs
   * @param {string} output
   */

  function op_plus(inputs, output) {
    let plus = "plus";
    event.recipes.kubejs
      .shapeless("kubejs:" + output, [
        "kubejs:" + inputs[0],
        "kubejs:" + plus,
        "kubejs:" + inputs[1],
      ])
      .keepIngredient("kubejs:" + "plus");
  }
  function op_less(inputs, output) {
    event.recipes.kubejs
      .shapeless("kubejs:" + output, [
        "kubejs:" + inputs[0],
        "kubejs:" + "less",
        "kubejs:" + inputs[1],
      ])
      .keepIngredient("kubejs:" + "less");
  }
  function op_for(inputs, output) {
    event.recipes.kubejs
      .shapeless("kubejs:" + output, [
        "kubejs:" + inputs[0],
        "kubejs:" + "for",
        "kubejs:" + inputs[1],
      ])
      .keepIngredient("kubejs:" + "for");
  }
  function op_div(inputs, output) {
    event.recipes.kubejs
      .shapeless("kubejs:" + output, [
        "kubejs:" + inputs[0],
        "kubejs:" + "div",
        "kubejs:" + inputs[1],
      ])
      .keepIngredient("kubejs:" + "div");
  }

  for (let i_result = 1; i_result < crafting_number_max + 1; i_result++) {
    for (let i_add1 = 0; i_add1 < crafting_number_max + 1; i_add1++) {
      for (let i_add2 = 0; i_add2 < crafting_number_max + 1; i_add2++) {
        
        if (i_result == i_add1 + i_add2) {
          op_plus([i_add1, i_add2], i_result);
          op_less([i_result, i_add2], i_add1);
        }

        if (i_result == i_add1 * i_add2) {
          op_for([i_add1, i_add2], i_result);
          op_div([i_result, i_add2], i_add1);
        }
      }
    }
  }
};
