import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
}=ReactNative
class Home extends PureComponent{
  searchPressed(){
    this.props.fetchRecipes();
  }
  render(){
    return <View style={{marginTop:20}}>
      <View>
      <TouchableHighlight onPress={()=>{this.searchPressed()}}>
        <Text>Search Recipes</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
      
      </ScrollView>
    </View>
  }
}
function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  };
}
export default connect(mapStateToProps)(Home)