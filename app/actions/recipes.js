import * as types from './types'
import Api from '../lib/api'
export function fetchRecipes(params) {
  return (dispatch, getState) => {
    return Api.get('http://www.movietrip.me/trips/mob/index/page/1')
    .then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
      console.log(params);
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