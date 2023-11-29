import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function Numbers() {
  const [animalIndex, setAnimalIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigation = useNavigation(); // Use the navigation hook

  const animals = [
    require('../assets/JPEG/numberzero.jpg'),
    require('../assets/JPEG/numberone.jpg'),
    require('../assets/JPEG/numbertwo.jpg'),
    require('../assets/JPEG/numberthree.jpg'),
    require('../assets/JPEG/numberfour.jpg'),
    require('../assets/JPEG/numberfive.jpg'),
    require('../assets/JPEG/numbersix.jpg'),
    require('../assets/JPEG/numberseven.jpg'),
    require('../assets/JPEG/numbereight.jpg'),
    require('../assets/JPEG/numbernine.jpg'),
    require('../assets/JPEG/numberten.jpg'),
  ];

  const progress = (animalIndex + 1) * (100 / animals.length);

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
        setAnimalIndex((animalIndex + 1) % animals.length);
      }
    }
  }
      // Handle navigation when 'Quit' or 'Repeat' is pressed
      function handleQuit() {
        navigation.navigate('Categories'); // Navigate to Categories.js
      }
    
      function handleRepeat() {
        setAnimalIndex(0); // Reset to the beginning of the Bodyparts.js page
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
        width: 650,
        height: 320,
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