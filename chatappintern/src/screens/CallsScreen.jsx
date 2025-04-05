import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const callsData = [
    {
        id: '10',
        name: 'Uchiha Sasuke',
        time: 'Today, 23:18',
        avatar: 'https://i.pinimg.com/236x/47/ba/d9/47bad9f7f14b95f503b81244823c0478.jpg',
        callType: 'incoming',
        callMethod: 'voice',
      },
  {
    id: '1',
    name: 'Uchiha Sasuke',
    time: 'Today, 23:17',
    avatar: 'https://i.pinimg.com/236x/47/ba/d9/47bad9f7f14b95f503b81244823c0478.jpg',
    callType: 'missed',
    callMethod: 'voice',
  },
  {
    id: '2',
    name: 'Hatake Kakashi',
    time: 'Yesterday, 16:26',
    avatar: 'https://i.pinimg.com/236x/6f/98/ee/6f98ee7a060c38f400168311bb60be5e.jpg',
    callType: 'missed',
    callMethod: 'video',
  },
  {
    id: '3',
    name: 'Minato Namikaze',
    time: 'Yesterday, 13:37',
    avatar: 'https://i.pinimg.com/564x/eb/b2/6c/ebb26c16f6a5c22c40b5087ee75e911f.jpg',
    callType: 'outgoing',
    callMethod: 'voice',
  },
  {
    id: '11',
    name: 'Gaara Kazekage',
    time: 'Yesterday, 9:27',    
    avatar: 'https://i.pinimg.com/736x/5a/d6/5b/5ad65b7351d638fac9da2eaf9535124c.jpg',
    callType: 'incoming',
    callMethod: 'voice',
  },
  {
    id: '4',
    name: 'Gaara Kazekage',
    time: 'Friday, 11:57',    
    avatar: 'https://i.pinimg.com/736x/5a/d6/5b/5ad65b7351d638fac9da2eaf9535124c.jpg',
    callType: 'missed',
    callMethod: 'voice',
  },
  {
    id: '5',
    name: 'Rin Nohara',
    time: 'Friday, 11:20',
    avatar: 'https://i.pinimg.com/736x/e7/c9/26/e7c9264cb72b992e53a9b132824a97c7.jpg',
    callType: 'incoming',
    callMethod: 'voice',
  },
  {
    id: '6',
    name: 'Sakura Haruno',
    time: 'Friday, 20:13',
    avatar: 'https://i.pinimg.com/736x/fc/50/ce/fc50ce4b95956a92dda1721cf20500bf.jpg',
    callType: 'missed',
    callMethod: 'video',
  },
  {
    id: '7',
    name: 'Naruto Uzumaki',
    time: 'Saturday, 11:50',
    avatar: 'https://i.pinimg.com/736x/41/ce/f2/41cef2bad976e2faa14395d3a90faab3.jpg',
    callType: 'incoming',
    callMethod: 'voice',
  },
  {
    id: '8',
    name: 'Jiraya Sensie',
    time: 'Saturday, 10:17',
    avatar: 'https://i.pinimg.com/564x/f4/2e/6c/f42e6c5d9d8b91cc734e05e027f0d2dc.jpg',
    callType: 'missed',
    callMethod: 'voice',
  },
  {
    id: '9',
    name: 'Hinata Hyuga',
    time: 'Sunday, 21:01',   
     avatar: 'https://i.pinimg.com/236x/de/d4/18/ded4185a5a42d39596413de3cb9199fd.jpg',
    callType: 'missed',
    callMethod: 'voice',
  },
];

const CallItem = ({ item }) => {
  const callIcon =
    item.callMethod === 'video' ? 'videocam' : 'call';
  const callTypeColor = item.callType === 'incoming' ? '#FFA800' : 'red';

  return (
    <View style={styles.callItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.callInfo}>
        <Text style={styles.callName}>{item.name}</Text>
        <View style={styles.callDetails}>
          <Ionicons name={callIcon + '-outline'} size={16} color={callTypeColor} />
          <Text style={[styles.callTime, { color: callTypeColor }]}>
            {` ${item.callType.charAt(0).toUpperCase() + item.callType.slice(1)}`}
          </Text>
          <Text style={styles.callDate}>{` ${item.time}`}</Text>
        </View>
      </View>
      <Ionicons name={callIcon} size={24} color="#FFA800" />
    </View>
  );
};

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={callsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CallItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  callItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  callInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  callName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callTime: {
    color: '#666',
    marginLeft:0,
  },
  callDate:{
    color: '#666',
    marginLeft:0,
    marginLeft:5,
  }
});

export default CallsScreen;

