import * as types from './types'
import Api from '../lib/api'
debugger;
export function fetchRecipes() {
  return (dispatch, getState) => {
    return Api.get('http://www.movietrip.me/trips/mob/index/page/1')
    .then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}
export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}