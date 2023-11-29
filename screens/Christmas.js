import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Christmas() {
  const [animalIndex, setAnimalIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigation = useNavigation();

  const initialAnimals = [
    require('../assets/JPEG/frontpage.jpg'),
    require('../assets/JPEG/page1.jpg'),
    require('../assets/JPEG/page2.jpg'),
    require('../assets/JPEG/page3.jpg'),
    require('../assets/JPEG/page4.jpg'),
    require('../assets/JPEG/page5.jpg'),
  ];

  const [animals, setAnimals] = useState([...initialAnimals]);

  const progress = (animalIndex + 1) * (100 / animals.length);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  function handleTap(direction) {
    if (direction === 'left') {
      if (animalIndex > 0) {
        setAnimalIndex(animalIndex - 1);
      }
    } else if (direction === 'right') {
      if (animalIndex === animals.length - 1) {
        if (completed) {
          setAnimalIndex(0);
          setCompleted(false);
        } else {
          setCompleted(true);
        }
      } else {
        setAnimalIndex(animalIndex + 1);
      }
    }
  }

  function handleQuit() {
    navigation.navigate('Stories');
  }

  function handleRepeat() {
    setAnimalIndex(0);
    setCompleted(false);
  }

  return (
    <ImageBackground style={styles.container} backgroundColor='#FFFFF0'>
      <View style={styles.flashcardContainer}>
        {completed ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleQuit} style={[styles.button, { backgroundColor: '#FFFFF0' }]}>
              <Text style={styles.buttonText}>Quit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRepeat} style={[styles.button, { backgroundColor: '#FFFFF0' }]}>
              <Text style={styles.buttonText}>Repeat</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.flashcard}>
            <Image source={animals[animalIndex]} style={styles.flashcardImage} />
            <View style={styles.arrows}>
              <TouchableOpacity onPress={() => handleTap('left')} style={styles.arrow}>
                <Text style={styles.arrowText}>{'<'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTap('right')} style={styles.arrow}>
                <Text style={styles.arrowText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  flashcard: {
    width: 600,
    height: 330,
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 5,
    shadowRadius: 30,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    position: 'relative', // Make this container relative for the arrows
  },
  flashcardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },

  arrows: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    marginLeft: 20,
  },
  arrowRight: {
    marginRight: 20,
  },
  arrowText: {
    fontSize: 80,
    color: 'black',
    opacity: 0.0,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#FFFFF0',
    borderRadius: 35,
    borderWidth: 4,
    borderColor: 'dodgerblue',
    padding: 15,
    margin: 5,
    width: 270,
  },
  buttonText: {
    fontSize: 25,
    color: 'dodgerblue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


