import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import backgroundImage from '../assets/TinyTalk-Design2.jpg';

export default function Home() {
  const navigation = useNavigation();
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);
  }, []);

  const lists = [
    { name: 'Categories', id: '1', screen: 'Categories', backgroundColor: '#fff1de', iconColor: '#ff773c', textColor: '#ff773c' },
    { name: 'A – Z', id: '2', screen: 'Alphabet', backgroundColor: '#e7f3ff', iconColor: '#59a6f2', textColor: '#59a6f2' },
    { name: 'Quiz', id: '3', screen: 'Quiz', backgroundColor: '#eeeaff', iconColor: '#907bff', textColor: '#907bff' },
    { name: 'Game', id: '4', screen: 'Game', backgroundColor: '#e7f8d3', iconColor: '#4CAF50', textColor: '#4CAF50' },
    { name: 'Recordings', id: '5', screen: 'Recordings', backgroundColor: '#ffdddd', iconColor: '#ff6666', textColor: '#ff6666' },
    { name: 'Stories', id: '6', screen: 'Stories', backgroundColor: '#fffacd', iconColor: '#FFB600', textColor: '#FFB600' },
  ];

  const icons = ['th-large', 'sort-alpha-down', 'question', 'gamepad', 'microphone', 'book-open'];

  const pressHandler = (screen) => {
    navigation.navigate(screen);
  };

  // Divide the items into two rows
  const firstRow = lists.slice(0, 3);
  const secondRow = lists.slice(3, 6);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.row}>
          {firstRow.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => pressHandler(item.screen)}
              style={[styles.item, { backgroundColor: item.backgroundColor }]}>
              <View style={styles.iconTextContainer}>
                <FontAwesome5Icon name={icons[index]} size={55} color={item.iconColor} />
                <Text style={[styles.itemText, { color: item.textColor }]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {secondRow.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => pressHandler(item.screen)}
              style={[styles.item, { backgroundColor: item.backgroundColor }]}>
              <View style={styles.iconTextContainer}>
                <FontAwesome5Icon name={icons[index + 3]} size={55} color={item.iconColor} />
                <Text style={[styles.itemText, { color: item.textColor }]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderColor: 'black',
    borderWidth: 2.5,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 3,
    width: 150,
    height: 150,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
