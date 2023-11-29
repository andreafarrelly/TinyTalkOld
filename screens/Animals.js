import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function Animals() {
  const [animalIndex, setAnimalIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [sound, setSound] = useState();
  const navigation = useNavigation(); // Use the navigation hook

  const animals = [
    require('../assets/JPEG/cartoon_bear.jpg'),
    require('../assets/JPEG/cartoon_elephant.jpg'),
    require('../assets/JPEG/cartoon_flamingo.jpg'),
    require('../assets/JPEG/cartoon_monkey.jpg'),
    require('../assets/JPEG/cartoon_penguin.jpg'),
    require('../assets/JPEG/cartoon_cat.jpg'),
    require('../assets/JPEG/cartoon_zebra.jpg'),
    require('../assets/JPEG/cartoon_tiger.jpg'),
    require('../assets/JPEG/cartoon_horse.jpg'),
    require('../assets/JPEG/cartoon_duck.jpg'),
    require('../assets/JPEG/cartoon_lion.jpg'),
    require('../assets/JPEG/cartoon_cow.jpg'),
    require('../assets/JPEG/cartoon_pig.jpg'),
    require('../assets/JPEG/cartoon_giraffe.jpg'),
    require('../assets/JPEG/cartoon_rabbit.jpg'),
    require('../assets/JPEG/cartoon_sheep.jpg'),
    require('../assets/JPEG/cartoon_crocodile.jpg'),
    require('../assets/JPEG/cartoon_squirrel.jpg'),
    require('../assets/JPEG/cartoon_chicken.jpg'),
    require('../assets/JPEG/cartoon_frog.jpg'),
    require('../assets/JPEG/cartoon_camel.jpg'),
    require('../assets/JPEG/cartoon_turtle.jpg'),
    require('../assets/JPEG/cartoon_goat.jpg'),
    require('../assets/JPEG/cartoon_swan.jpg'),
    require('../assets/JPEG/cartoon_bee.jpg'),
    require('../assets/JPEG/cartoon_butterfly.jpg'),
    require('../assets/JPEG/cartoon_koala.jpg'),
    require('../assets/JPEG/cartoon_hippo.jpg'),
    require('../assets/JPEG/cartoon_fox.jpg'),
    require('../assets/JPEG/cartoon_whale.jpg'),
    require('../assets/JPEG/cartoon_shark.jpg'),
    require('../assets/JPEG/cartoon_donkey.jpg'),
    require('../assets/JPEG/cartoon_hedgehog.jpg'),
    require('../assets/JPEG/cartoon_rhino.jpg'),
    require('../assets/JPEG/cartoon_kangaroo.jpg'),
    require('../assets/JPEG/cartoon_parrot.jpg'),
    require('../assets/JPEG/cartoon_panda.jpg'),
    require('../assets/JPEG/cartoon_snake.jpg'),
    require('../assets/JPEG/cartoon_owl.jpg'),
    require('../assets/JPEG/cartoon_gorilla.jpg'),
  ];

  const icons = [ 'play', 'pause' ];  

  const animalSounds = [
    require('../assets/sounds/bear_sound.mp3'),
    require('../assets/sounds/elephant_sound.mp3'),
    require('../assets/sounds/flamingo_sound.mp3'),
    require('../assets/sounds/monkey_sound.mp3'),
    require('../assets/sounds/penguin_sound.mp3'),
    require('../assets/sounds/cat_sound.mp3'),
    require('../assets/sounds/zebra_sound.mp3'),
    require('../assets/sounds/tiger_sound.mp3'),
    require('../assets/sounds/horse_sound.mp3'),
    require('../assets/sounds/duck_sound.mp3'),
    require('../assets/sounds/lion_sound.mp3'),
    require('../assets/sounds/cow_sound.mp3'),
    require('../assets/sounds/pig_sound.mp3'),
    require('../assets/sounds/giraffe_sound.mp3'),
    require('../assets/sounds/rabbit_sound.mp3'),
    require('../assets/sounds/sheep_sound.mp3'),
    require('../assets/sounds/crocodile_sound.mp3'),
    require('../assets/sounds/squirrel_sound.mp3'),
    require('../assets/sounds/chicken_sound.mp3'),
    require('../assets/sounds/frog_sound.mp3'),
    require('../assets/sounds/camel_sound.mp3'),
    require('../assets/sounds/turtle_sound.mp3'),
    require('../assets/sounds/goat_sound.mp3'),
    require('../assets/sounds/swan_sound.mp3'),
    require('../assets/sounds/bee_sound.mp3'),
    require('../assets/sounds/butterfly_sound.mp3'),
    require('../assets/sounds/koala_sound.mp3'),
    require('../assets/sounds/hippo_sound.mp3'),
    require('../assets/sounds/fox_sound.mp3'),
    require('../assets/sounds/whale_sound.mp3'),
    require('../assets/sounds/shark_sound.mp3'),
    require('../assets/sounds/donkey_sound.mp3'),
    require('../assets/sounds/hedgehog_sound.mp3'),
    require('../assets/sounds/rhino_sound.mp3'),
    require('../assets/sounds/kangaroo_sound.mp3'),
    require('../assets/sounds/parrot_sound.mp3'),
    require('../assets/sounds/panda_sound.mp3'),
    require('../assets/sounds/snake_sound.mp3'),
    require('../assets/sounds/owl_sound.mp3'),
    require('../assets/sounds/gorilla_sound.mp3'),
  ];

  const toggleSound = async (index) => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    } else {
      const { sound } = await Audio.Sound.createAsync(animalSounds[index]);
      setSound(sound);
      await sound.playAsync();
    }
  };

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

  const renderSoundButton = () => {
    return (
      <TouchableOpacity onPress={() => toggleSound(animalIndex)} style={styles.soundButton}>
        {sound ? (
          <FontAwesome5Icon name="pause" size={30} color="white" />
        ) : (
          <FontAwesome5Icon name="play" size={30} color="white" />
        )}
      </TouchableOpacity>
    );
  };

    // Handle navigation when 'Quit' or 'Repeat' is pressed
    function handleQuit() {
      navigation.navigate('Categories'); 
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
            <TouchableOpacity onPress={handleQuit} style={styles.button}>
              <Text style={styles.buttonText}>Quit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRepeat} style={styles.button}>
              <Text style={styles.buttonText}>Repeat</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.flashcard}>
            <Image source={animals[animalIndex]} style={styles.flashcardImage} />
            <View style={styles.arrows}>
              {renderSoundButton(animalIndex)}
              <TouchableOpacity onPress={() => handleTap('left')} style={[styles.arrow, styles.arrowLeft]}>
                <Text style={styles.arrowText}>{'<'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTap('right')} style={[styles.arrow, styles.arrowRight]}>
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
    marginTop: 0, // Add negative margin to move the flashcard up
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
  soundButton: {
    padding: 30,
    borderRadius: 8,
    marginTop: -5,
    alignItems: 'center',
  },
  soundButtonText: {
    fontSize: 16,
    color: 'black',
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
