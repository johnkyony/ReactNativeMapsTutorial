import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {Container} from 'native-base';
import GoogleMapScreen from './GoogleMapScreen';
import OpenStreetMapScreen from './OpenStreetMapScreen';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View>
      <Text style={{color: 'white', fontSize: 30}}>Maps</Text>
    </View>
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    GoogleMap: GoogleMapScreen,
    OpenStreetMap: OpenStreetMapScreen,
  },
  {
    contentComponent: CustomDrawerContentComponent,
  },
);

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render() {
    return (
      <Container>
        <MyApp />
      </Container>
    );
  }
}

export default App;
