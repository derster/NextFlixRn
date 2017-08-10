import React, {Component} from 'react';
import{
  Text,
  View,
  StyleSheet
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }


  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  updateMenu(isOpen){
    this.setState({isOpen})
  }
   render(){
     return(

         <SideMenu
           menu={<Menu/>}
           isOpen={this.state.isOpen}
           onChange={(isOpen) => this.updateMenu(isOpen)}
           >
          <View style={styles.container}>
              <Header toggle={this.toggle.bind(this)}/>
              <Slider />
              <List />
          </View>


          </SideMenu>
     
     )
   }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#000'
    }
})

export default App;
