import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Share
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import TabsEpisodes from './TabsEpisodes';
import * as Animatable from 'react-native-animatable'
import TextGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window')

class Details extends Component{
    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            //android
            dialogTitle: 'Share this awesome content',
            //ios
            excludeActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }
  render(){
    const {goBack} = this.props.navigation
    const {params} = this.props.navigation.state
    const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details
    const {episodes} = params.item.details
    const {name} = params.item
    const {navigate} = this.props.navigation

    

    return(
      <ScrollView style={styles.container}>

        <TouchableHighlight
            style={styles.closeButton}
            onPress={() => goBack()}
        >
            <Icon
                name="close"
                color="white"
                size={18}
            />
        </TouchableHighlight>

        <Image
            style={styles.thumbnail}
            source={{uri: thumbnail}}
        />

        <View style={styles.buttonPlay}>
            <TouchableWithoutFeedback
                onPress={() => navigate('VideoPlayerView', {name: name})}
            >
                <View>
                    <Icon
                        style={styles.iconPlay}
                        name="play-circle"
                        size={90}
                        color="white"
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.nameContainer}>
                <Text style={[styles.text, styles.titleShow]}>
                    {name}
                </Text>
        </View>

        <View style={styles.descriptionContainer}>
              <View style={styles.subtitle}>
                  <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
                  <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
                  <Text style={[styles.text, styles.subTitleText]}>{season} Seasons</Text>
              </View>

              <View style={styles.description}>
                <Text style={[styles.text]}>{description}</Text>
              </View>

              <Text style={[styles.text]}>Cast: {cast}</Text>
              <Text style={[styles.text]}>Creator: {creator}</Text>

              <View style={styles.shareListIcons}>
                <View style={styles.myListIcon}>
                  <Icon
                      style={styles.listIcon}
                      name="check"
                      color="grey"
                      size={25}
                  />
                  <Text style={styles.text}>My List</Text>
                </View>

                <TouchableHighlight onPress={this.onShare}>
                    <View style={styles.myShareIcon}>
                        <Icon
                            style={styles.shareIcon}
                            name="share-alt"
                            color="grey"
                            size={25}
                        />
                        <Text style={styles.text}>Share</Text>
                    </View>
                </TouchableHighlight>
                
              </View>

        </View>

        <TabsEpisodes data={episodes}/>

      </ScrollView>

    )
  }
}
const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    headerWithIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconDown: {
        marginLeft: 5
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        top: 100,
        left: 150,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})
export default Details;
