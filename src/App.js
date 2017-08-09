import React, {Component} from 'react';
import{
  Text,
  View,
  StyleSheet
} from 'react-native';

import List from './components/List';
import Slider from './components/Slider';

class App extends Component {
   render(){
     return(
       <View style={styles.container}>
           <Slider/>
           <List />
       </View>
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
