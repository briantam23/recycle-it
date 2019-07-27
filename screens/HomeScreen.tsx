import * as React from 'react';
import { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { randomProTip } from '../util';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Recycle It!',
    headerStyle: {
      backgroundColor: '#518e30',
      marginBottom: 0,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 35,
    },
  };

  render() {
    const { container, contentContainer, flex, tabBarInfoContainer, tabBarInfoText } = styles;
    return (
      <View style={ container }>
        <ScrollView
          style={ container }
          contentContainerStyle={ contentContainer }
        >
          <View style={ flex }>

            <View>
              {/* <CameraComp /> */}
            </View>
            <View>
              {/* <Outcome /> */}
            </View>
          </View>
        </ScrollView>
        <View style={ tabBarInfoContainer }>

          <Text style={ tabBarInfoText }>
            { randomProTip }
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  contentContainer: {
    paddingTop: 0,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#8e3051',
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  helpContainer: {
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


export default HomeScreen;