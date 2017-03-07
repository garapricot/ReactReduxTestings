import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Home from '../Home'
class ApplicationTabs extends PureComponent{
  renderScene(component){
    return <View style={{flex:1}}>
        {React.createElement(component,this.props)}
      </View>
  }
  render(){
    return <TabBarIOS style={{flex:1}} >
   <TabBarIOS.Item
          systemIcon="favorites"
          iconSize={25}
          >
            { this.renderScene(Home) }
        </TabBarIOS.Item>
      <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          >
            { this.renderScene(Home) }
        </TabBarIOS.Item>
    </TabBarIOS>
  }
}
function mapStateRoProps(state){
  return{
    
  }
}
export default connect(mapStateRoProps)(ApplicationTabs)