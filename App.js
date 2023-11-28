import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

import Home from './screens/Home';
import Categories from './screens/Categories';
import Alphabet from './screens/Alphabet';
import Quiz from './screens/Quiz';
import Random from './screens/Random';
import Animals from './screens/Animals';
import Bodyparts from './screens/Bodyparts';
import Transport from './screens/Transport';
import Nature from './screens/Nature';
import Buildings from './screens/Buildings';
import Colours from './screens/Colours';
import Numbers from './screens/Numbers';
import Letters from './screens/Letters';
import Sports from './screens/Sports';
import Game from './screens/Game';
import Recordings from './screens/Recordings';
import Stories from './screens/Stories';
import Christmas from './screens/Christmas';


const Stack = createNativeStackNavigator();

import { Dimensions } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login or Register"
        screenOptions={{
          ...TransitionPresets.DefaultTransition,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: 'dodgerblue',
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="Login or Register"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Alphabet"
          component={Alphabet}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Random"
          component={Random}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Animals"
          component={Animals}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Bodyparts"
          component={Bodyparts}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Transport"
          component={Transport}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Nature"
          component={Nature}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Buildings"
          component={Buildings}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Colours"
          component={Colours}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Numbers"
          component={Numbers}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Letters"
          component={Letters}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Sports"
          component={Sports}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Recordings"
          component={Recordings}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Stories"
          component={Stories}
          options={{
            headerTitle: '',
          }}
        />
                <Stack.Screen
          name="Christmas"
          component={Christmas}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WelcomeScreen({ navigation }) {
  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require('/Users/andreafarrelly/TinyTalkOld/assets/tinytalklogo2.jpg')}
          style={{
            ...styles.logo,
            width: 300,
            height: 300,
            marginBottom: 10,
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNavigateToHome}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF0',
    marginTop: -50,
  },
  body: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: -34,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'dodgerblue',
  },
});