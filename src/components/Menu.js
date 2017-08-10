import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')

class Menu extends Component {
  render(){
    return(
      <View style={styles.menu}>
         <View style={styles.avatarContainer}>
           <View style={styles.avatarImage}>
             <Image
                 Style={styles.avatar}
                 source={require('../images/user.png')}
               />
               <Text style={styles.text}>Modeste</Text>
           </View>
           <Icon
               name="exchange"
               color="white"
               size={25}
             />
         </View>
         <ScrollView style={styles.scrollContainer}>
             <View style={styles.textWidthIcon}>
               <View style={styles.withIcon}>
                   <Icon
                       style={styles.iconWithText}
                       name="download"
                       color="white"
                       size={28}
                     />
                   <Text style={styles.text}>My download</Text>
               </View>
               <Icon
                   style={styles.rightIcon}
                   name="angle-right"
                   color="white"
                   size={25}
                 />
             </View>

             <View style={styles.textWidthIcon}>
               <View style={styles.withIcon}>
                   <Icon
                       style={styles.iconWithText}
                       name="check"
                       color="white"
                       size={25}
                     />
                   <Text style={styles.text}>My List</Text>
               </View>
               <Icon
                   style={styles.rightIcon}
                   name="angle-right"
                   color="white"
                   size={25}
                 />
             </View>

             <View style={[styles.items, styles.itemSelected]}>
                <Text style={styles.text}>Home</Text>
             </View>
             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Available for download</Text>
             </View>
             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>NetFlix Originals</Text>
             </View>

             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>TV Shows</Text>
             </View>
             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Actions & Adventures</Text>
             </View>
             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Children &  Family Movies</Text>
             </View>

             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Comedies</Text>
             </View>

             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Documentaries</Text>
             </View>

             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Independent Movies</Text>
             </View>
             <View style={styles.noSelectedItems}>
                <Text style={styles.text}>Indian Movies</Text>
             </View>

         </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu:{
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#191919"
  },
  avatarContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width/2+59,
    borderColor: '#000',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  avatar:{
    width: 40,
    height: 40,
    marginRight: 20,
  },
  avatarImage:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  text:{
    color: '#b3b3b3',
    fontSize: 15
  },
  textWidthIcon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderColor: '#000000',
    borderBottomWidth: 3
  },
  withIcon:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollContainer:{
    width: width/2+59
  },
  rightIcon:{
    paddingRight: 20
  },
  iconWithText:{
    marginRight: 10,
    paddingLeft: 20
  },
  items:{
    paddingVertical: 15,
    paddingLeft: 20,
    marginTop: 5,
  },
  itemSelected:{
    borderLeftWidth: 5,
    borderColor: 'red'
  },
  noSelectedItems:{
    paddingVertical: 15,
    paddingLeft: 25,
    marginTop: 5,
  }
})

export default Menu;
