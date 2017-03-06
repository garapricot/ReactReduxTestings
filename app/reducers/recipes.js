import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
export const searchedRecipes = createReducer({}, {
[types.SET_SEARCHED_RECIPES](state,action){
  let newState={};
  debugger;
  action.recipes.forEach( (recipe) => {
       newState[recipe.id]=recipe;
    });
    return newState
}
});
debugger;
export const recipeCount = createReducer( 0,{
[types.SET_SEARCHED_RECIPES](state,action){
  return action.recipes.length;
},
  [types.ADD_RECIPE](state,action){
  return state+1;
}
});