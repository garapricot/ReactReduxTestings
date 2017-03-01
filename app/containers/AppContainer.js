import React,{PureComponent} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
const {
  View,
  TouchableHighlight,
  Text
} =ReactNative
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

class AppContainer extends PureComponent{
  constructor(props){
    super(props)
  }
  
  addRecipe(){
  this.props.addRecipe();
}
  render(){
    return <View>
    <Text style={{marginTop:21}}>
      Hello From Redux!!!! Recipe Count: {this.props.recipeCount}
      </Text>
      <TouchableHighlight onPress={()=>{this.addRecipe()}}>
          <Text>Add Recipe</Text>
      </TouchableHighlight>
    </View>
  }
}
export default connect((state)=>{return{
  recipeCount:state.recipeCount
}}, mapDispatchToProps)(AppContainer);