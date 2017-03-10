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
  constructor(props){
    super(props);
    this.state={
      searching:false,
      moviesInput:''
    }
  }
  searchPressed(){
    this.setState({searching:true});
    this.props.fetchRecipes(this.state.moviesInput)
    .then(()=>
    {
      this.setState({searching:false});
    }
    );
  }
  recipes(){
    return Object.keys(this.props.searchedRecipes).map(key=>this.props.searchedRecipes[key]);
  }
  render(){
    debugger;
    console.log(this.recipes());
    return <View style={styles.scene}>
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput}
          returnKeyType='search'
          placeholder='Search Your Movie'
          onChangeText={(moviesInput)=>this.setState({moviesInput})}
          value={this.state.moviesInput}
          />
      <TouchableHighlight onPress={()=>{this.searchPressed()}} style={styles.searchButton}>
        <Text>Search Movies</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
      {!this.state.searching&&this.recipes().map((recipe)=>{
        return <TouchableHighlight key={recipe.id} 
                 onPress={()=>{
            this.props.navigate({key:'Detail',id:recipe.id})}
          }>
        <View>
          <Image source={{uri:'http://www.movlenebi.ge/gallery/monika-beluchi-za-dolce-gabbana_5003.jpg'}} style={styles.resultImage}/>
          <Text style={styles.resultText}>{recipe.title}</Text>
          </View>
        </TouchableHighlight>  
        })}
        {this.state.searching? <Text>Searching...</Text>:null}
      </ScrollView>
    </View>
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8
  },
  resultImage:{
    height:150,
  },
  resultText:{
    backgroundColor:'#000',
    color:'#FFF',
    height:20,
  },
  searchButton: {
    flex: 0.4,
  },
  searchInput: {
    flex: 0.7,
  },
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  };
}
export default connect(mapStateToProps)(Home)