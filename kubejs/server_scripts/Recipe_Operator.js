/**
 *
 * @param {Internal.RecipesEventJS} event
 */
let OperatorRecipes = (event) => {
  
  let uncraft = (input, outputs) =>
    event.custom({
      type: "twilightforest:uncrafting",
      cost: 0,
      input: {
        ingredient: {
          item: input,
        },
      },
      key: {
        A: {
          item: outputs[0],
        },
        B: {
          item: outputs[1],
        },
      },
      pattern: ["AB"],
    });

    /**
     * 
     * @param {string} operator 
     * @param {[string,string]} inputs 
     * @param {string} output 
     */
  let shapeless = (operator, inputs, output) => {
    event.recipes.kubejs
      .shapeless("kubejs:" + output, [
        "kubejs:" + inputs[0],
        "kubejs:" + operator,
        "kubejs:" + inputs[1],
      ])
      .keepIngredient("kubejs:" + operator)
      .id(output + "_from_" + inputs[0] + "_" + operator + "_" + inputs[1]);
  };

  for (let i_result = 1; i_result < crafting_number_max + 1; i_result++) {
    for (let i_add1 = 0; i_add1 < crafting_number_max + 1; i_add1++) {
      for (let i_add2 = 0; i_add2 < crafting_number_max + 1; i_add2++) {
        if (i_result == i_add1 + i_add2) {
          shapeless("plus", [i_add1, i_add2], i_result);
          shapeless("less", [i_result, i_add2], i_add1);

          uncraft("kubejs:" + i_result, [
            "kubejs:" + i_add1,
            "kubejs:" + i_add2,
          ]);
        }

        if (i_result == i_add1 * i_add2) {
          shapeless("for", [i_add1, i_add2], i_result);
          shapeless("div", [i_result, i_add2], i_add1);
        }
      }
    }
  }
};
