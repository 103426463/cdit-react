import * as React from 'react';

import {
    StyleSheet,
    Button,
    View,
    Image,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// TODO: Turn this into class file 
// TODO: Make Core2 - 4 images using React.
// Learn <image>
// TODO: Gather navigation code into classes

// Sketch a custom app for design. Using: FB... Ytube... or draw own app.

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
        />
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{title: 'Profile'}}
                  />
        <Stack.Screen 
            name="Profile2" 
            component={ProfileScreen2} 
            options={{title: 'Profile2'}}
                  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
            }
            />

            <Button
            title="Go to Long's profile"
            onPress={() =>
            navigation.navigate('Profile2', {name: 'Long'})
            }
            />

            <Image source={require('./images/tiny_logo.png')}/>

        </View>
    
      
    );
  };

  const ProfileScreen = ({navigation, route}) => {
    console.log("abc")
    return (
    <View>
        <Text>This is {route.params.name}'s profile</Text>
        <Image source={require('./images/tiny_logo.png')}/>

    </View>
    );
  };

  const ProfileScreen2 = ({navigation, route}) => {
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
            <Image source={require('./images/tiny_logo.png')}/>
    
        </View>
        );  };

export default App;