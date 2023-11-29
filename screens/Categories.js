import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function Categories() {
  const navigation = useNavigation();
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);
  }, []);

  const lists = [
    { name: 'Animals', id: '1', screen: 'Animals', backgroundColor: '#ffdddd', iconColor: '#ff6666', textColor: '#ff6666' },
    { name: 'Body Parts', id: '2', screen: 'Bodyparts', backgroundColor: '#e7f3ff', iconColor: '#59a6f2', textColor: '#59a6f2' },
    { name: 'Transport', id: '3', screen: 'Transport', backgroundColor: '#eeeaff', iconColor: '#907bff', textColor: '#907bff' },
    { name: 'Nature', id: '4', screen: 'Nature', backgroundColor: '#c7f8d3', iconColor: '#46af50', textColor: '#46af50' },
    { name: 'Buildings', id: '5', screen: 'Buildings', backgroundColor: '#fff1de', iconColor: '#ff773c', textColor: '#ff773c' },
    { name: 'Colours', id: '6', screen: 'Colours', backgroundColor: '#EAF9CB', iconColor: '#70C380', textColor: '#70C380' },
    { name: 'Numbers', id: '7', screen: 'Numbers', backgroundColor: '#fffacd', iconColor: '#ffb600', textColor: '#ffb600' },
    { name: 'Letters', id: '8', screen: 'Letters', backgroundColor: '#FFECF0', iconColor: '#FFB6C1', textColor: '#FFA2B6' },
    { name: 'Sports', id: '9', screen: 'Sports', backgroundColor: '#FFF3DB', iconColor: '#FF6B43', textColor: '#FF6B43' },
    { name: 'Random', id: '10', screen: 'Random', backgroundColor: 'white', iconColor: 'mediumpurple', textColor: 'mediumpurple' },
  ];

  const icons = [ 'paw', 'child', 'car-side', 'pagelines', 'clinic-medical', 'palette', 'calculator', 'font', 'volleyball-ball', 'random', ];  

  const pressHandler = (screen) => {
    navigation.navigate(screen);
  };

  // Divide the items into two rows
  const firstRow = lists.slice(0, 5);
  const secondRow = lists.slice(5, 10);

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
    margin: 5,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
