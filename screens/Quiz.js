import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

import eye from '../assets/JPEG/eye.jpg';
import church from '../assets/JPEG/church.jpg';
import lightning from '../assets/JPEG/lightning.jpg';
import tree from '../assets/JPEG/tree.jpg';
import cartoonTruck from '../assets/JPEG/cartoon_truck.jpg';
import library from '../assets/JPEG/library.jpg';
import cartoonTractor from '../assets/JPEG/cartoon_tractor.jpg';
import prison from '../assets/JPEG/prison.jpg';
import blue from '../assets/colourblue.png';
import cartoonBoat from '../assets/JPEG/cartoon_boat.jpg';
import karate from '../assets/JPEG/karate.jpg';
import cartoonBear from '../assets/JPEG/cartoon_bear.jpg';
import cartoonElephant from '../assets/JPEG/cartoon_elephant.jpg';
import cartoonFlamingo from '../assets/JPEG/cartoon_flamingo.jpg';
import cartoonMonkey from '../assets/JPEG/cartoon_monkey.jpg';
import cartoonPenguin from '../assets/JPEG/cartoon_penguin.jpg';
import cartoonCat from '../assets/JPEG/cartoon_cat.jpg';
import cartoonZebra from '../assets/JPEG/cartoon_zebra.jpg';
import cartoonTiger from '../assets/JPEG/cartoon_tiger.jpg';
import cartoonHorse from '../assets/JPEG/cartoon_horse.jpg';
import cartoonDuck from '../assets/JPEG/cartoon_duck.jpg';
import cartoonLion from '../assets/JPEG/cartoon_lion.jpg';
import cartoonCow from '../assets/JPEG/cartoon_cow.jpg';
import cartoonPig from '../assets/JPEG/cartoon_pig.jpg';
import cartoonGiraffe from '../assets/JPEG/cartoon_giraffe.jpg';
import cartoonRabbit from '../assets/JPEG/cartoon_rabbit.jpg';
import cartoonSheep from '../assets/JPEG/cartoon_sheep.jpg';
import cartoonCrocodile from '../assets/JPEG/cartoon_crocodile.jpg';
import cartoonSquirrel from '../assets/JPEG/cartoon_squirrel.jpg';
import cartoonChicken from '../assets/JPEG/cartoon_chicken.jpg';
import cartoonFrog from '../assets/JPEG/cartoon_frog.jpg';
import cartoonCamel from '../assets/JPEG/cartoon_camel.jpg';
import cartoonTurtle from '../assets/JPEG/cartoon_turtle.jpg';
import cartoonGoat from '../assets/JPEG/cartoon_goat.jpg';
import cartoonSwan from '../assets/JPEG/cartoon_swan.jpg';
import cartoonBee from '../assets/JPEG/cartoon_bee.jpg';
import cartoonButterfly from '../assets/JPEG/cartoon_butterfly.jpg';
import cartoonKoala from '../assets/JPEG/cartoon_koala.jpg';
import cartoonHippo from '../assets/JPEG/cartoon_hippo.jpg';
import cartoonFox from '../assets/JPEG/cartoon_fox.jpg';
import cartoonWhale from '../assets/JPEG/cartoon_whale.jpg';
import cartoonShark from '../assets/JPEG/cartoon_shark.jpg';
import cartoonDonkey from '../assets/JPEG/cartoon_donkey.jpg';
import cartoonHedgehog from '../assets/JPEG/cartoon_hedgehog.jpg';
import cartoonRhino from '../assets/JPEG/cartoon_rhino.jpg';
import cartoonKangaroo from '../assets/JPEG/cartoon_kangaroo.jpg';
import cartoonParrot from '../assets/JPEG/cartoon_parrot.jpg';
import cartoonPanda from '../assets/JPEG/cartoon_panda.jpg';
import cartoonSnake from '../assets/JPEG/cartoon_snake.jpg';
import cartoonOwl from '../assets/JPEG/cartoon_owl.jpg';
import cartoonGorilla from '../assets/JPEG/cartoon_gorilla.jpg';
import girl from '../assets/JPEG/girl.jpg';
import boy from '../assets/JPEG/boy.jpg';
import knee from '../assets/JPEG/knee.jpg';
import eyes from '../assets/JPEG/eyes.jpg';
import mouth from '../assets/JPEG/mouth.jpg';
import chin from '../assets/JPEG/chin.jpg';
import hand from '../assets/JPEG/hand.jpg';
import toes from '../assets/JPEG/toes.jpg';
import foot from '../assets/JPEG/foot.jpg';
import shoulder from '../assets/JPEG/shoulder.jpg';
import hair from '../assets/JPEG/hair.jpg';
import nose from '../assets/JPEG/nose.jpg';
import ear from '../assets/JPEG/ear.jpg';

export default function Quiz({ navigation }) {
  const [recording, setRecording] = useState();
  const [sound, setSound] = useState();
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [recordingSaved, setRecordingSaved] = useState(false); // New state variable
  const [isRecordingStopped, setIsRecordingStopped] = useState(false);

  const animalOrder = [
    eye,
    cartoonFrog,
    church,
    lightning,
    tree,
    cartoonTruck,
    cartoonHedgehog,
    cartoonCrocodile,
    library,
    cartoonTractor,
    cartoonTiger,
    prison,
    blue,
    cartoonBoat,
    karate,
    cartoonBear,
    cartoonElephant,
    cartoonFlamingo,
    cartoonMonkey,
    cartoonPenguin,
    cartoonCat,
    cartoonZebra,
    cartoonHorse,
    cartoonDuck,
    cartoonLion,
    cartoonCow,
    cartoonPig,
    cartoonGiraffe,
    cartoonRabbit,
    cartoonSheep,
    cartoonSquirrel,
    cartoonChicken,
    cartoonCamel,
    cartoonTurtle,
    cartoonGoat,
    cartoonSwan,
    cartoonBee,
    cartoonButterfly,
    cartoonKoala,
    cartoonHippo,
    cartoonFox,
    cartoonWhale,
    cartoonShark,
    cartoonDonkey,
    cartoonRhino,
    cartoonKangaroo,
    cartoonParrot,
    cartoonPanda,
    cartoonSnake,
    cartoonOwl,
    cartoonGorilla,
    girl,
    boy,
    knee,
    eyes,
    mouth,
    chin,
    hand,
    toes,
    foot,
    shoulder,
    hair,
    nose,
    ear,
  ];  

  const startRecording = async () => {
    try {
      console.log('Requesting permissions');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
  
      // Check if there is an existing recording and stop it
      if (recording) {
        console.log('Stopping existing recording');
        await recording.stopAndUnloadAsync();
      }
  
      console.log('Starting recording');
      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(newRecording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };  
  
  const stopRecording = async () => {
    console.log('Stopping recording');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped at', uri);
  
    // Check if recording is stopped due to the "Save" button press
    if (!isRecordingStopped) {
      // Display the share sheet with flashcard order metadata
      const orderMetadata = {
        flashcardOrder: animalOrder.slice(0, 10).map((flashcard) => flashcard.toString()),
      };
  
      // Save the recording to AsyncStorage
      saveRecording(uri, orderMetadata);
    }
  
    // Set the recordingSaved state to true
    setRecordingSaved(true);
    setIsRecordingStopped(true); // Set the isRecordingStopped state to true
  };
  
const saveRecording = async (uri, orderMetadata) => {
  try {
    // Save the recording URI, order metadata, and flashcard text to AsyncStorage
    const recordingData = {
      uri,
      orderMetadata,
      flashcardText: flashcards.map((flashcard) => flashcard.toString()),
    };

    // Generate a unique key for each recording entry
    const recordingKey = `recording_${new Date().toISOString()}`;

    // Store the recording data in AsyncStorage
    await AsyncStorage.setItem(recordingKey, JSON.stringify(recordingData));

    console.log('Recording saved successfully');
  } catch (error) {
    console.error('Error saving recording:', error);
  }
};

  
  useEffect(() => {
    if (countdown === 0) {
      // Automatically start recording when the countdown reaches zero
      startRecording();
      const shuffledAnimalOrder = [...animalOrder].sort(() => Math.random() - 0.5);
      const selectedFlashcards = shuffledAnimalOrder.slice(0, 10);
      setFlashcards(selectedFlashcards);
      
      // Reset isRecordingStopped when starting a new recording
      setIsRecordingStopped(false);
    }
  }, [countdown]);  

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Keep the 1-second countdown

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0 && currentCardIndex < flashcards.length) {
      const cardInterval = setInterval(() => {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => clearInterval(cardInterval);
    }
  }, [countdown, flashcards, currentCardIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.flashcardContainer}>
        {countdown > 0 ? (
          <Text style={styles.countdownText}>{countdown}</Text>
        ) : currentCardIndex < flashcards.length ? (
          <View style={styles.flashcard}>
            <Image source={flashcards[currentCardIndex]} style={styles.flashcardImage} />
          </View>
        ) : (
          <View>
            <Text style={styles.countdownText}>Quiz Finished!</Text>
            <View style={styles.buttonContainer}>
  {/* Add the 'Save Recording' button */}
  {!recordingSaved && (
    <TouchableOpacity
      style={styles.button}
      onPress={stopRecording}
      disabled={!recording}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  )}

  {/* Modify the 'Quit' button to check if recording is stopped before stopping it */}
  <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Check if the recording is not stopped, then stop it
    if (!isRecordingStopped) {
      // Stop recording without saving or sharing
      setRecording(undefined);
      setIsRecordingStopped(true);
      console.log('Recording stopped without saving or sharing');
    }
    navigation.navigate('Home');
  }}>
  <Text style={styles.buttonText}>Quit</Text>
</TouchableOpacity>

</View>
          </View>
        )}
      </View>
    </View>
  );  
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF0',
  },
  flashcardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcard: {
    width: 650,
    height: 320,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  flashcardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  countdownText: {
    fontSize: 70,
    color: 'dodgerblue',
    fontWeight: 'bold',
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