import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import Home from '../Home';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

 

  renderScene(component) {
    return (
      <View style={ { flex: 1 } }>
        { React.createElement(component, this.props) }
      </View>
    );
  }

  render() {
    console.log(this.props);
    return (
      <TabBarIOS style={{flex: 1}} >
        <TabBarIOS.Item
          systemIcon="favorites"
          iconSize={25}
         
          selectedIconName="favorites"
         >
            { this.renderScene(Home) }
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          
          selectedIconName="more"
          >
            
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);