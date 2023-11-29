import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function Recordings({ navigation }) {
  const [recordings, setRecordings] = useState([]);
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetchRecordings();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const fetchRecordings = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const recordingKeys = keys.filter((key) => key.startsWith('recording_'));
      const recordingData = await Promise.all(
        recordingKeys.map(async (key) => {
          const data = await AsyncStorage.getItem(key);
          return data ? JSON.parse(data) : null;
        })
      );
  
      const validRecordingData = recordingData.filter((data) => data !== null);
      const labeledRecordings = validRecordingData.map((recording, index) => ({
        ...recording,
        label: `Recording ${index + 1}`, // Add a label to each recording
        isPlaying: false,
      }));
      setRecordings(labeledRecordings);
    } catch (error) {
      console.error('Error fetching recordings:', error);
    }
  };

  const playPauseRecording = async (uri, index) => {
    try {
      // Check if the sound is already loaded
      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri },
          { shouldPlay: true },
          onPlaybackStatusUpdate
        );
  
        setSound(newSound);
      } else {
        // If the sound is loaded, pause or resume based on the current state
        if (!isPlaying) {
          await sound.playAsync();
        } else {
          await sound.pauseAsync();
        }
      }
  
      // Toggle the playing state
      setIsPlaying(!isPlaying);
  
      // Update the recordings array to reflect the playing state
      setRecordings((prevRecordings) =>
        prevRecordings.map((recording, i) =>
          i === index ? { ...recording, isPlaying: !isPlaying } : { ...recording, isPlaying: false }
        )
      );
    } catch (error) {
      console.error('Error playing/pausing recording:', error);
    }
  };  

  const stopPlayback = async (index) => {
    try {
      if (sound) {
        await sound.stopAsync();
        setSound(null);
        setIsPlaying(false);

        setRecordings((prevRecordings) =>
          prevRecordings.map((recording) => ({ ...recording, isPlaying: false }))
        );
      }
    } catch (error) {
      console.error('Error stopping playback:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setRecordings((prevRecordings) =>
        prevRecordings.map((recording) => ({ ...recording, isPlaying: false }))
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recordings</Text>
      <FlatList
  data={recordings}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <View style={styles.recordingItem}>
      <Text>{item.label}</Text>
      <TouchableOpacity onPress={() => playPauseRecording(item.uri, index)}>
        <FontAwesome5Icon
          name={isPlaying && item.isPlaying ? 'pause' : 'play'}
          size={30}
          color="green"
          marginLeft={400}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => stopPlayback(index)}>
        <FontAwesome5Icon
          name="stop"
          size={30}
          color="red"
          marginLeft={70}
        />
      </TouchableOpacity>
    </View>
  )}
/>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  recordingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});