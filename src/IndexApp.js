import React from 'react';
import{
  StackNavigator
} from 'react-navigation';

import App from './App';
import Search from './components/Search';
import Details from './components/Details';
import VideoPlayerView from './components/VideoPlayerView';


const IndexApp = StackNavigator(
  {
    App: {screen: App},
    Search: {screen: Search},
    Details: {screen: Details},
    VideoPlayerView: {screen: VideoPlayerView}

  },{
    headerMode: 'none'
  }
)

export default IndexApp;
