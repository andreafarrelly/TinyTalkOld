import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView, Alert } from 'react-native';

const cardImages = {
  Animals: [
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
  require('../assets/JPEG/cartoon_crocodile.jpg'),
],
Letters: [
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
],
Bodyparts: [
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
],
Buildings: [
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
],
Colours: [
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
],
Nature: [
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
],
Numbers: [
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
],
Sports: [
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
],
Transport: [
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
],
};

const Game = () => {
  const [selectedCategory, setSelectedCategory] = useState('Animals');
  const [piles, setPiles] = useState([]);

  useEffect(() => {
    initializeGame();
  }, [selectedCategory]);

  const initializeGame = () => {
    const categoryImages = cardImages[selectedCategory];

    if (!categoryImages) {
      console.error(`Category not found: ${selectedCategory}`);
      return;
    }

    const initialPiles = Array.from({ length: 2 }, (_, pileIndex) => {
      const cardIndex = Math.floor(Math.random() * categoryImages.length);
      return { id: pileIndex, image: categoryImages[cardIndex], isFlipped: false };
    });

    setPiles(initialPiles);
  };

  const handleCardPress = (pileIndex) => {
    const newPiles = [...piles];
    const categoryImages = cardImages[selectedCategory];

    if (!categoryImages) {
      console.error(`Category not found: ${selectedCategory}`);
      return;
    }

    const cardIndex = Math.floor(Math.random() * categoryImages.length);

    newPiles[pileIndex].image = categoryImages[cardIndex];
    newPiles[pileIndex].isFlipped = true; // Always flip the card on tap
    setPiles(newPiles);

    // Check for a match after updating the second pile
    if (
      newPiles[0].isFlipped &&
      newPiles[1].isFlipped &&
      newPiles[0].image === newPiles[1].image
    ) {
      // Match found!
      Alert.alert('Snap!', 'You matched two of the same cards!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SNAP!{'\n'}<Text style={styles.subtitle}>Choose a Category:</Text></Text>
      <ScrollView contentContainerStyle={styles.categoryContainer}>
  <View style={styles.categoryRow}>
    {Object.keys(cardImages).slice(0, 5).map(category => (
      <TouchableOpacity
        key={category}
        style={[styles.categoryButton, { backgroundColor: category === selectedCategory ? 'dodgerblue' : 'white' }]}
        onPress={() => setSelectedCategory(category)}
      >
        <Text style={{ color: category === selectedCategory ? 'white' : 'black' }}>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
  <View style={styles.categoryRow}>
    {Object.keys(cardImages).slice(5, 9).map(category => (
      <TouchableOpacity
        key={category}
        style={[styles.categoryButton, { backgroundColor: category === selectedCategory ? 'dodgerblue' : 'white' }]}
        onPress={() => setSelectedCategory(category)}
      >
        <Text style={{ color: category === selectedCategory ? 'white' : 'black' }}>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
</ScrollView>
      <View style={styles.content}>
        {piles.map((pile, index) => (
          <TouchableOpacity
            key={pile.id}
            style={styles.card}
            onPress={() => handleCardPress(index)}
          >
            {pile.isFlipped && <Image source={pile.image} style={styles.image} />}
            {/* No condition for the "Tap" text, it will only be shown if the card is not flipped */}
            <Text style={styles.cardText}>{!pile.isFlipped && 'Tap'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    padding: 15,
    paddingTop: 20, // Adjusted paddingTop for moving the card up
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'dodgerblue',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70, // Adjusted paddingBottom for better spacing
  },
  categoryContainer: {
    paddingTop: 5,
    paddingLeft: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 50,
    paddingRight: 100,
  },
  categoryButton: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'dodgerblue',
    height: 30,
  },
  selectedCategoryButton: {
    backgroundColor: 'dodgerblue',
  },
  categoryButtonText: {
    fontSize: 18, // Adjusted font size
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
    lineHeight: 30, // Center the text vertically within the button
  },
  selectedCategoryButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    width: 290,
    height: 170,
    margin: 15,
    marginTop: 5,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Center the text horizontally
    marginTop: 'auto', // Push the text to the vertical center
    marginBottom: 'auto', // Push the text to the vertical center
  },
});

export default Game;