//
// Lasagna Master Functions
//

// Task 1: Cooking Status
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }

  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}


// Task 2: Preparation Time
export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}


// Task 3: Quantities
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    }

    if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return {
    noodles,
    sauce
  };
}


// Task 4: Add Secret Ingredient
export function addSecretIngredient(friendList, myList) {
  const secret = friendList[friendList.length - 1];
  myList.push(secret);
}


// Task 5: Scale Recipe
export function scaleRecipe(recipe, portions) {
  const factor = portions / 2;
  const newRecipe = {};

  for (let key in recipe) {
    newRecipe[key] = recipe[key] * factor;
  }

  return newRecipe;
}