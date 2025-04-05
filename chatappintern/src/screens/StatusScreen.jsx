import React from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';

const statusData = [
  // Example data for 'My Status'
  {
    id: '0',
    name: 'My Status',
    time: 'Just now',
    avatar: 'https://i.pinimg.com/564x/20/da/8c/20da8c311761d930727428f8f7a6ae95.jpg',
  },
  // Example data for 'Recent Updates'
  {
    id: '1',
    name: 'Naruto Uzumaki',
    time: '8 minutes ago',
    avatar: 'https://i.pinimg.com/736x/41/ce/f2/41cef2bad976e2faa14395d3a90faab3.jpg',
    viewed: false,
  },
  {
    id: '6',
    name: 'Rin Nohara',
    time: '23 minutes ago',
    avatar: 'https://i.pinimg.com/736x/e7/c9/26/e7c9264cb72b992e53a9b132824a97c7.jpg',
    viewed: false,
  },
  {
    id: '7',
    name: 'Rock Lee',
    time: '48 minutes ago',
    avatar: 'https://i.pinimg.com/236x/3b/95/5c/3b955c18a8522855bffaaeae86717c3f.jpg',
    viewed: false,
  },
  {
    id: '2',
    name: 'Uchiha Sasuke',
    time: 'Today, 19:06',
    avatar: 'https://i.pinimg.com/236x/47/ba/d9/47bad9f7f14b95f503b81244823c0478.jpg',
    viewed: true,
  },
  {
    id: '3',
    name: 'Grandma Tsunade',
    time: 'Today, 18:44',
    avatar: 'https://i.pinimg.com/736x/a4/25/9e/a4259e7bd1dd12dcb85579734a190472.jpg',
    viewed: true,
  },
  {
    id: '4',
    name: 'Killer Bee',
    time: 'Today, 16:23',
    avatar: 'https://i.pinimg.com/236x/3a/1e/c7/3a1ec7ab0e6db37707ce01871d1edbc6.jpg',
    viewed: true,
  },
  {
    id: '5',
    name: 'Uchiha Obito',
    time: 'Today, 16:20',
    avatar: 'https://i.pinimg.com/474x/32/88/cb/3288cb9982c02e0e1f8131615f05574d.jpg',
    viewed: true,
  },
  {
    id: '9',
    name: 'Hatake Kakashi',
    time: 'Today, 08:09',
    avatar: 'https://i.pinimg.com/236x/6f/98/ee/6f98ee7a060c38f400168311bb60be5e.jpg',
    viewed: true,
  },
  {
    id: '10',
    name: 'Hinata Hyuga',
    time: 'Today, 08:04',
    avatar: 'https://i.pinimg.com/236x/de/d4/18/ded4185a5a42d39596413de3cb9199fd.jpg',
    viewed: true,
  },
];

const StatusItem = ({ item }) => (
    <View style={styles.statusItem}>
      <View style={[item.id === '0' ? styles.myStatusAvatarContainer : styles.avatarContainer, !item.viewed && item.id!== '0' && styles.recentStatus]}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      </View>
      <View style={styles.statusInfo}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTime}>{item.time}</Text>
      </View>
    </View>
  );

const StatusScreen = () => {
  const myStatus = [statusData[0]];
  const recentUpdates = statusData.slice(1).filter(status => !status.viewed);
  const viewedUpdates = statusData.slice(1).filter(status => status.viewed);

  const sections = [
    { title: 'My Status', data: myStatus },
    { title: 'Recent Updates', data: recentUpdates },
    { title: 'Viewed Updates', data: viewedUpdates },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <StatusItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 6,
    backgroundColor: '#f1f1f1',
  },
  statusItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatarContainer: {
    padding: 1, // Optional padding to create space between image and border
  },
  myStatusAvatarContainer: {
    borderRadius: 30,
    padding: 1, // Optional padding to create space between image and border
    borderColor: '#FFA800', // Change the border color as needed
    borderWidth: 2.5,
  },
  recentStatus: {
    borderColor: '#FFA800',
    borderWidth: 2.5,
    borderRadius: 30, // Add this to make the border circular
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  statusName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusTime: {
    color: '#666',
  },
});

export default StatusScreen;
