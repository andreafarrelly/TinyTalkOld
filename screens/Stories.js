import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function Stories() {
  const navigation = useNavigation();
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);
  }, []);

  const lists = [
    { name: 'Story 1', id: '1', screen: 'Christmas', backgroundColor: '#ffdddd', iconColor: '#ff6666', textColor: '#ff6666' },
    { name: 'More Soon', id: '2', screen: 'Bodyparts', backgroundColor: '#e7f3ff', iconColor: '#59a6f2', textColor: '#59a6f2' },
  ];

  const icons = [ 'snowflake', 'book-open' ];  

  const pressHandler = (screen) => {
    navigation.navigate(screen);
  };

  const firstRow = lists.slice(0, 1);
  const secondRow = lists.slice(2);

  return (
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
              <FontAwesome5Icon name={icons[index + 5]} size={55} color={item.iconColor} />
              <Text style={[styles.itemText, { color: item.textColor }]}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
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
    width: 250,
    height: 200,
  },
  itemText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 18,
  },
});