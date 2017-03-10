import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
class Detail extends Component {
  recipe() {
    return this.props.searchedRecipes[this.props.navigationParams.id] || null;
  }
  render() {
    const recipe = this.recipe();
    if (!recipe) { return null }
    return <View>
      <View>
         <TouchableHighlight style={{backgroundColor:'#222d4a'}}  onPress={ () => { this.props.navigateBack() } }>
         <Text style={{paddingTop:30,paddingBottom:2, color: '#2b90f5'} }>Go Back</Text>
      </TouchableHighlight>
      </View>
      <View>
        <Image source={ { uri: "http://bazavan.ro/wp-content/uploads/2017/01/monica-bellucci-100a.jpg" } } style={appStyle.resultImage} />
        <Text style={ appStyle.resultText } >{recipe.title}</Text>
        <Text style={ { fontSize: 21 } } >{recipe.id}</Text>
      </View>
    </View>
  }
}
function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    navigationParams: state.navigationParams,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);