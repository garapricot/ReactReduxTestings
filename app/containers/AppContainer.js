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
    this.state={recipeCount:0}
  }
   incrementRecipeCount() {
      this.setState({recipeCount:this.state.recipeCount+1});
    }
  render(){
    return <View>
    <Text style={{marginTop:21}}>
      Hello From Redux!!!! Recipe Count: {this.state.recipeCount}
      </Text>
      <TouchableHighlight onPress={()=>{this.incrementRecipeCount()}}>
          <Text>Add Recipe</Text>
      </TouchableHighlight>
    </View>
  }
}
export default connect(()=>{return{}}, mapDispatchToProps)(AppContainer);