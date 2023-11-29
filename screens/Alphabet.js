import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';  

const imagesA = [   
  { name: 'Airplane', image: require('../assets/JPEG/cartoon_plane.jpg') },
  { name: 'Alligator', image: require('../assets/JPEG/cartoon_crocodile.jpg') },
  { name: 'American Football', image: require('../assets/JPEG/americanfootball.jpg') },
  { name: 'Arm', image: require('../assets/JPEG/arm.jpg') },
];

const imagesB = [
  { name: 'Bakery', image: require('../assets/JPEG/bakery.jpg') },
  { name: 'Bank', image: require('../assets/JPEG/bank.jpg') },
  { name: 'Baseball', image: require('../assets/JPEG/baseball.jpg') },
  { name: 'Basketball', image: require('../assets/JPEG/basketball.jpg') },
  { name: 'Bear', image: require('../assets/JPEG/cartoon_bear.jpg') },
  { name: 'Bee', image: require('../assets/JPEG/cartoon_bee.jpg') },
  { name: 'Bike', image: require('../assets/JPEG/cartoon_bike.jpg') },
  { name: 'Black', image: require('../assets/JPEG/colourblack.jpg') },
  { name: 'Blue', image: require('../assets/colourblue.png') },
  { name: 'Boat', image: require('../assets/JPEG/cartoon_boat.jpg') },
  { name: 'Bowling', image: require('../assets/JPEG/bowling.jpg') },
  { name: 'Boy', image: require('../assets/JPEG/boy.jpg') },
  { name: 'Branch', image: require('../assets/JPEG/branch.jpg') },   
  { name: 'Bus', image: require('../assets/JPEG/cartoon_bus.jpg') },
  { name: 'Butterfly', image: require('../assets/JPEG/cartoon_butterfly.jpg') },
];

const imagesC = [
  { name: 'Camel', image: require('../assets/JPEG/cartoon_camel.jpg') },
  { name: 'Car', image: require('../assets/JPEG/cartoon_car.jpg') },
  { name: 'Cat', image: require('../assets/JPEG/cartoon_cat.jpg') },
  { name: 'Chicken', image: require('../assets/JPEG/cartoon_chicken.jpg') },
  { name: 'Chin', image: require('../assets/JPEG/chin.jpg') },
  { name: 'Church', image: require('../assets/JPEG/church.jpg') },
  { name: 'Cinema', image: require('../assets/JPEG/cinema.jpg') },
  { name: 'Cloud', image: require('../assets/JPEG/cloud.jpg') },
  { name: 'Cow', image: require('../assets/JPEG/cartoon_cow.jpg') },
  { name: 'Crocodile', image: require('../assets/JPEG/cartoon_crocodile.jpg') },
  { name: 'Cycling', image: require('../assets/JPEG/cycling.jpg') },
];

const imagesD = [
  { name: 'Donkey', image: require('../assets/JPEG/cartoon_donkey.jpg') },
  { name: 'Duck', image: require('../assets/JPEG/cartoon_duck.jpg') },
];

const imagesE = [
  { name: 'Ear', image: require('../assets/JPEG/ear.jpg') },
  { name: 'Eight', image: require('../assets/JPEG/numbereight.jpg') },
  { name: 'Elephant', image: require('../assets/JPEG/cartoon_elephant.jpg') },
  { name: 'Eye', image: require('../assets/JPEG/eye.jpg') },
];

const imagesF = [
  { name: 'Factory', image: require('../assets/JPEG/factory.jpg') },
  { name: 'Fire', image: require('../assets/JPEG/fire.jpg') },
  { name: 'Fire Station', image: require('../assets/JPEG/firestation.jpg') },
  { name: 'Five', image: require('../assets/JPEG/numberfive.jpg') },
  { name: 'Flamingo', image: require('../assets/JPEG/cartoon_flamingo.jpg') },
  { name: 'Flower', image: require('../assets/JPEG/flower.jpg') },
  { name: 'Foot', image: require('../assets/JPEG/foot.jpg') },
  { name: 'Football', image: require('../assets/JPEG/football.jpg') },
  { name: 'Four', image: require('../assets/JPEG/numberfour.jpg') },
  { name: 'Fox', image: require('../assets/JPEG/cartoon_fox.jpg') },
  { name: 'Frog', image: require('../assets/JPEG/cartoon_frog.jpg') },
];

const imagesG = [
  { name: 'Giraffe', image: require('../assets/JPEG/cartoon_giraffe.jpg') },
  { name: 'Girl', image: require('../assets/JPEG/girl.jpg') },
  { name: 'Goat', image: require('../assets/JPEG/cartoon_goat.jpg') },
  { name: 'Golf', image: require('../assets/JPEG/golf.jpg') },
  { name: 'Gorilla', image: require('../assets/JPEG/cartoon_gorilla.jpg') },
  { name: 'Grass', image: require('../assets/JPEG/grass.jpg') },
  { name: 'Green', image: require('../assets/colourgreen.png') },
  { name: 'Grey', image: require('../assets/JPEG/colourgrey.jpg') },
  { name: 'Gym', image: require('../assets/JPEG/gym.jpg') },
];

const imagesH = [
  { name: 'Hair', image: require('../assets/JPEG/hair.jpg') },
  { name: 'Hand', image: require('../assets/JPEG/hand.jpg') },
  { name: 'Hedgehog', image: require('../assets/JPEG/cartoon_hedgehog.jpg') },
  { name: 'Helicopter', image: require('../assets/JPEG/cartoon_helicopter.jpg') },
  { name: 'Hippo', image: require('../assets/JPEG/cartoon_hippo.jpg') },
  { name: 'Horse', image: require('../assets/JPEG/cartoon_horse.jpg') },
  { name: 'Hospital', image: require('../assets/JPEG/hospital.jpg') },
  { name: 'Hotel', image: require('../assets/JPEG/hotel.jpg') },
  { name: 'House', image: require('../assets/JPEG/house.jpg') },
];

const imagesI = [
];

const imagesJ = [
];

const imagesK = [
  { name: 'Kangaroo', image: require('../assets/JPEG/cartoon_kangaroo.jpg') },
  { name: 'Karate', image: require('../assets/JPEG/karate.jpg') },
  { name: 'Knee', image: require('../assets/JPEG/knee.jpg') },
  { name: 'Koala', image: require('../assets/JPEG/cartoon_koala.jpg') },
];

const imagesL = [
  { name: 'Leaves', image: require('../assets/JPEG/leaves.jpg') },
  { name: 'Library', image: require('../assets/JPEG/library.jpg') },
  { name: 'Lightning', image: require('../assets/JPEG/lightning.jpg') },
  { name: 'Lion', image: require('../assets/JPEG/cartoon_lion.jpg') },
];

const imagesM = [
  { name: 'Monkey', image: require('../assets/JPEG/cartoon_monkey.jpg') },
  { name: 'Motorbike', image: require('../assets/JPEG/cartoon_motorbike.jpg') },
  { name: 'Mouth', image: require('../assets/JPEG/mouth.jpg') },
  { name: 'Museum', image: require('../assets/JPEG/museum.jpg') },
];

const imagesN = [
  { name: 'Nine', image: require('../assets/JPEG/numbernine.jpg') },
  { name: 'Nose', image: require('../assets/JPEG/nose.jpg') },
];

const imagesO = [
  { name: 'Office', image: require('../assets/JPEG/office.jpg') },
  { name: 'One', image: require('../assets/JPEG/numberone.jpg') },
  { name: 'Orange', image: require('../assets/JPEG/colourorange.jpg') },
  { name: 'Owl', image: require('../assets/JPEG/cartoon_owl.jpg') },
];

const imagesP = [
  { name: 'Panda', image: require('../assets/JPEG/cartoon_panda.jpg') },
  { name: 'Parrot', image: require('../assets/JPEG/cartoon_parrot.jpg') },
  { name: 'Penguin', image: require('../assets/JPEG/cartoon_penguin.jpg') },
  { name: 'Pig', image: require('../assets/JPEG/cartoon_pig.jpg') },
  { name: 'Pink', image: require('../assets/JPEG/colourpink.jpg') },
  { name: 'Plane', image: require('../assets/JPEG/cartoon_plane.jpg') },
  { name: 'Police Station', image: require('../assets/JPEG/policestation.jpg') },
  { name: 'Prison', image: require('../assets/JPEG/prison.jpg') },
  { name: 'Purple', image: require('../assets/JPEG/colourpurple.jpg') },
];

const imagesQ = [
];

const imagesR = [
  { name: 'Rabbit', image: require('../assets/JPEG/cartoon_rabbit.jpg') },
  { name: 'Rain', image: require('../assets/JPEG/rain.jpg') },
  { name: 'Rainbow', image: require('../assets/JPEG/rainbow.jpg') },
  { name: 'Red', image: require('../assets/JPEG/colourred.jpg') },
  { name: 'Rhino', image: require('../assets/JPEG/cartoon_rhino.jpg') },
  { name: 'Rock', image: require('../assets/JPEG/rock.jpg') },
  { name: 'Rocket', image: require('../assets/JPEG/cartoon_rocket.jpg') },
  { name: 'Rugby', image: require('../assets/JPEG/rugby.jpg') },
  { name: 'Running', image: require('../assets/JPEG/running.jpg') },
];

const imagesS = [
  { name: 'Sand', image: require('../assets/JPEG/sand.jpg') },
  { name: 'School', image: require('../assets/JPEG/school.jpg') },
  { name: 'Sea', image: require('../assets/JPEG/sea.jpg') },
  { name: 'Seven', image: require('../assets/JPEG/numberseven.jpg') },
  { name: 'Shark', image: require('../assets/JPEG/cartoon_shark.jpg') },
  { name: 'Sheep', image: require('../assets/JPEG/cartoon_sheep.jpg') },
  { name: 'Ship', image: require('../assets/JPEG/cartoon_ship.jpg') },
  { name: 'Shop', image: require('../assets/JPEG/shop.jpg') },
  { name: 'Shoulder', image: require('../assets/JPEG/shoulder.jpg') },
  { name: 'Six', image: require('../assets/JPEG/numbersix.jpg') },
  { name: 'Skateboard', image: require('../assets/JPEG/skateboarding.jpg') },
  { name: 'Skyscraper', image: require('../assets/JPEG/skyscraper.jpg') },
  { name: 'Snake', image: require('../assets/JPEG/cartoon_snake.jpg') },
  { name: 'Squirrel', image: require('../assets/JPEG/cartoon_squirrel.jpg') },
  { name: 'Star', image: require('../assets/JPEG/star.jpg') },
  { name: 'Sun', image: require('../assets/JPEG/sun.jpg') },
  { name: 'Swan', image: require('../assets/JPEG/cartoon_swan.jpg') },
  { name: 'Swimming', image: require('../assets/JPEG/swimming.jpg') },
];

const imagesT = [
  { name: 'Ten', image: require('../assets/JPEG/numberten.jpg') },
  { name: 'Tennis', image: require('../assets/JPEG/tennis.jpg') },
  { name: 'Three', image: require('../assets/JPEG/numberthree.jpg') },
  { name: 'Tiger', image: require('../assets/JPEG/cartoon_tiger.jpg') },
  { name: 'Toes', image: require('../assets/JPEG/toes.jpg') },
  { name: 'Tractor', image: require('../assets/JPEG/cartoon_tractor.jpg') },
  { name: 'Train', image: require('../assets/JPEG/cartoon_train.jpg') },
  { name: 'Tree', image: require('../assets/JPEG/tree.jpg') },
  { name: 'Truck', image: require('../assets/JPEG/cartoon_truck.jpg') },
  { name: 'Turtle', image: require('../assets/JPEG/cartoon_turtle.jpg') },
  { name: 'Two', image: require('../assets/JPEG/numbertwo.jpg') },
];

const imagesU = [
];

const imagesV = [
  { name: 'Van', image: require('../assets/JPEG/cartoon_van.jpg') },
];

const imagesW = [
  { name: 'Whale', image: require('../assets/JPEG/cartoon_whale.jpg') },
  { name: 'White', image: require('../assets/JPEG/colourwhite.jpg') },
  { name: 'Wind', image: require('../assets/JPEG/wind.jpg') },
];

const imagesX = [
];

const imagesY = [
  { name: 'Yellow', image: require('../assets/JPEG/colouryellow.jpg') },
];

const imagesZ = [
  { name: 'Zebra', image: require('../assets/JPEG/cartoon_zebra.jpg') },
  { name: 'Zero', image: require('../assets/JPEG/numberzero.jpg') },
];

const ContactList = () => {
  const contacts = [
    { letter: 'A', data: imagesA },
    { letter: 'B', data: imagesB },
    { letter: 'C', data: imagesC },
    { letter: 'D', data: imagesD },
    { letter: 'E', data: imagesE },
    { letter: 'F', data: imagesF },
    { letter: 'G', data: imagesG },
    { letter: 'H', data: imagesH },
    { letter: 'I', data: imagesI },
    { letter: 'J', data: imagesJ },
    { letter: 'K', data: imagesK },
    { letter: 'L', data: imagesL },
    { letter: 'M', data: imagesM },
    { letter: 'N', data: imagesN },
    { letter: 'O', data: imagesO },
    { letter: 'P', data: imagesP },
    { letter: 'Q', data: imagesQ },
    { letter: 'R', data: imagesR },
    { letter: 'S', data: imagesS },
    { letter: 'T', data: imagesT },
    { letter: 'U', data: imagesU },
    { letter: 'V', data: imagesV },
    { letter: 'W', data: imagesW },
    { letter: 'X', data: imagesX },
    { letter: 'Y', data: imagesY },
    { letter: 'Z', data: imagesZ },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.letter}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>{item.letter}</Text>
            {item.data.map((contact, index) => (
              <View key={index} style={styles.contactItem}>
                <Image source={contact.image} style={styles.contactImage} />
                <Text style={styles.contactName}>{contact.name}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFF0',
    },
    sectionHeader: {
      fontSize: 60,
      fontWeight: 'bold',
      color:'black',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginTop: 10,
      marginLeft: 10,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 0.5,
      borderBottomColor: 'dodgerblue',
    },
    contactImage: {
      width: 240,
      height: 120, 
      marginRight: 10,
      borderWidth: 3,
      borderColor: 'black',
    },
    contactName: {
      fontSize: 30,
      padding: 20,
      color:'black',
      fontWeight: 'light',
    },
  });
  

export default ContactList;