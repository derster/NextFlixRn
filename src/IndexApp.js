import React from 'react';
import{
  Navigator
} from 'react-native';

import App from './App';
import Search from './components/Search';

class IndexApp extends React.Component {
  _renderScene(route, nagivator){
    var navigator ={navigator}

    switch(route.ident){
      case 'App':
          return(
            <App/>
          )
      case 'Search':
          return(
            <Search/>
          )
    }
  }
  render(){
    return(
      <Navigator
          initialRoute={{ident: 'Search'}}
          renderScene={this._renderScene}
      />
    )
  }
}

export default IndexApp;
