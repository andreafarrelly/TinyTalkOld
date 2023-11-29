import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const Random = () => {
  const [animalIndex, setAnimalIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
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
    require('../assets/JPEG/girl.jpg'),
    require('../assets/JPEG/boy.jpg'),
    require('../assets/JPEG/knee.jpg'),
    require('../assets/JPEG/eyes.jpg'),
    require('../assets/JPEG/mouth.jpg'),
    require('../assets/JPEG/chin.jpg'),
    require('../assets/JPEG/hand.jpg'),
    require('../assets/JPEG/toes.jpg'),
    require('../assets/JPEG/foot.jpg'),
    require('../assets/JPEG/shoulder.jpg'),
    require('../assets/JPEG/hair.jpg'),
    require('../assets/JPEG/nose.jpg'),
    require('../assets/JPEG/ear.jpg'),
    require('../assets/JPEG/house.jpg'),
    require('../assets/JPEG/hospital.jpg'),
    require('../assets/JPEG/prison.jpg'),
    require('../assets/JPEG/school.jpg'),
    require('../assets/JPEG/policestation.jpg'),
    require('../assets/JPEG/shop.jpg'),
    require('../assets/JPEG/library.jpg'),
    require('../assets/JPEG/gym.jpg'),
    require('../assets/JPEG/skyscraper.jpg'),
    require('../assets/JPEG/office.jpg'),
    require('../assets/JPEG/museum.jpg'),
    require('../assets/JPEG/hotel.jpg'),
    require('../assets/JPEG/cinema.jpg'),
    require('../assets/JPEG/bank.jpg'),
    require('../assets/JPEG/firestation.jpg'),
    require('../assets/JPEG/factory.jpg'),
    require('../assets/JPEG/church.jpg'),
    require('../assets/JPEG/bakery.jpg'),
    require('../assets/colourblue.png'),
    require('../assets/JPEG/colourblack.jpg'),
    require('../assets/JPEG/colourgrey.jpg'),
    require('../assets/colourgreen.png'),
    require('../assets/JPEG/colourred.jpg'),
    require('../assets/JPEG/colourpurple.jpg'),
    require('../assets/JPEG/colourpink.jpg'),
    require('../assets/JPEG/colouryellow.jpg'),
    require('../assets/JPEG/colourwhite.jpg'),
    require('../assets/JPEG/colourorange.jpg'),
    require('../assets/JPEG/letterA.jpg'),
    require('../assets/JPEG/letterB.jpg'),
    require('../assets/JPEG/letterC.jpg'),
    require('../assets/JPEG/letterD.jpg'),
    require('../assets/JPEG/letterE.jpg'),
    require('../assets/JPEG/letterF.jpg'),
    require('../assets/JPEG/letterG.jpg'),
    require('../assets/JPEG/letterH.jpg'),
    require('../assets/JPEG/letterI.jpg'),
    require('../assets/JPEG/letterJ.jpg'),
    require('../assets/JPEG/letterK.jpg'),
    require('../assets/JPEG/letterL.jpg'),
    require('../assets/JPEG/letterM.jpg'),
    require('../assets/JPEG/letterN.jpg'),
    require('../assets/JPEG/letterO.jpg'),
    require('../assets/JPEG/letterP.jpg'),
    require('../assets/JPEG/letterQ.jpg'),
    require('../assets/JPEG/letterR.jpg'),
    require('../assets/JPEG/letterS.jpg'),
    require('../assets/JPEG/letterT.jpg'),
    require('../assets/JPEG/letterU.jpg'),
    require('../assets/JPEG/letterV.jpg'),
    require('../assets/JPEG/letterW.jpg'),
    require('../assets/JPEG/letterX.jpg'),
    require('../assets/JPEG/letterY.jpg'),
    require('../assets/JPEG/letterZ.jpg'),
    require('../assets/JPEG/tree.jpg'),
    require('../assets/JPEG/sun.jpg'),
    require('../assets/JPEG/cloud.jpg'),
    require('../assets/JPEG/leaves.jpg'),
    require('../assets/JPEG/rain.jpg'),
    require('../assets/JPEG/branch.jpg'),
    require('../assets/JPEG/wind.jpg'),
    require('../assets/JPEG/grass.jpg'),
    require('../assets/JPEG/rock.jpg'),
    require('../assets/JPEG/sea.jpg'),
    require('../assets/JPEG/flower.jpg'),
    require('../assets/JPEG/star.jpg'),
    require('../assets/JPEG/lightning.jpg'),
    require('../assets/JPEG/sand.jpg'),
    require('../assets/JPEG/rainbow.jpg'),
    require('../assets/JPEG/fire.jpg'),
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
    require('../assets/JPEG/football.jpg'),
    require('../assets/JPEG/basketball.jpg'),
    require('../assets/JPEG/baseball.jpg'),
    require('../assets/JPEG/tennis.jpg'),
    require('../assets/JPEG/running.jpg'),
    require('../assets/JPEG/swimming.jpg'),
    require('../assets/JPEG/karate.jpg'),
    require('../assets/JPEG/rugby.jpg'),
    require('../assets/JPEG/americanfootball.jpg'),
    require('../assets/JPEG/golf.jpg'),
    require('../assets/JPEG/skateboarding.jpg'),
    require('../assets/JPEG/cycling.jpg'),
    require('../assets/JPEG/bowling.jpg'),
    require('../assets/JPEG/cartoon_van.jpg'),
    require('../assets/JPEG/cartoon_car.jpg'),
    require('../assets/JPEG/cartoon_train.jpg'),
    require('../assets/JPEG/cartoon_bus.jpg'),
    require('../assets/JPEG/cartoon_truck.jpg'),
    require('../assets/JPEG/cartoon_motorbike.jpg'),
    require('../assets/JPEG/cartoon_bike.jpg'),
    require('../assets/JPEG/cartoon_plane.jpg'),
    require('../assets/JPEG/cartoon_helicopter.jpg'),
    require('../assets/JPEG/cartoon_boat.jpg'),
    require('../assets/JPEG/cartoon_ship.jpg'),
    require('../assets/JPEG/cartoon_rocket.jpg'),
    require('../assets/JPEG/cartoon_tractor.jpg'),
  ];

  useEffect(() => {
    shuffleAnimals();
  }, []);

  const shuffleAnimals = () => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setShuffledAnimals(shuffled);
  };

  const progress = (animalIndex + 1) * (100 / shuffledAnimals.length);

  function handleTap(direction) {
    if (direction === 'left') {
      if (animalIndex > 0) {
        setAnimalIndex(animalIndex - 1);
      }
    } else if (direction === 'right') {
      if (animalIndex === shuffledAnimals.length - 1) {
        if (completed) {
          setAnimalIndex(0);
          setCompleted(false);
        } else {
          setCompleted(true);
        }
      } else {
        setAnimalIndex((animalIndex + 1) % shuffledAnimals.length);
      }
    }
  }
      // Handle navigation when 'Quit' or 'Repeat' is pressed
      function handleQuit() {
        navigation.navigate('Categories'); // Navigate to Categories.js
      }
    
      function handleRepeat() {
        const shuffled = [...animals].sort(() => Math.random() - 0.5);
        setShuffledAnimals(shuffled);
        setAnimalIndex(0); // Reset to the beginning of the page
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
              <Image source={shuffledAnimals[animalIndex]} style={styles.flashcardImage} />
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

export default Random;