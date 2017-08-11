import React from 'react';
import{
  StackNavigator
} from 'react-navigation';

import App from './App';
import Search from './components/Search';
import Details from './components/Details';


const IndexApp = StackNavigator(
  {
    App: {screen: App},
    Search: {screen: Search},
    Details: {screen: Details}

  },{
    headerMode: 'none'
  }
)

export default IndexApp;
