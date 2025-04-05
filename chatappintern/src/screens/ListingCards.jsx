import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatItem from './ChatItems';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallsScreen';
import CameraScreen from './CameraScreen';
const chatData = [
  {
    id: '1',
    name: 'Uchiha Itachi',
    message: 'Yeah, I think I know wha...',
    time: '11:45 AM',
    unreadCount: 3,
    avatar: 'https://i.pinimg.com/564x/1f/ed/b0/1fedb012b1aabee1dad5593d8fe06aa1.jpg',
  },
  {
    id: '2',
    name: 'Naruto Uzumaki',
    message: 'Great, thanks!',
    time: '11:39 AM',
    unreadCount: 1,
    avatar: 'https://i.pinimg.com/736x/41/ce/f2/41cef2bad976e2faa14395d3a90faab3.jpg',
  },
  {
    id: '3',
    name: 'Uchiha Sasuke',
    message: 'Image',
    time: 'YESTERDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/236x/47/ba/d9/47bad9f7f14b95f503b81244823c0478.jpg',
  },
  {
    id: '4',
    name: 'Hinata Hyuga',
    message: 'Voice message',
    time: 'FRIDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/236x/de/d4/18/ded4185a5a42d39596413de3cb9199fd.jpg',
  },
  {
    id: '5',
    name: 'Akatsuki Group',
    message: 'You: Sounds good!',
    time: 'FRIDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/236x/6b/0e/e8/6b0ee8eb4a1c99bdbd7dd29f3daabf1e.jpg',
  },
  {
    id: '6',
    name: 'Hatake Kakashi',
    message: '🔥',
    time: 'FRIDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/236x/6f/98/ee/6f98ee7a060c38f400168311bb60be5e.jpg',
  },
  {
    id: '7',
    name: 'Jiraya Sensei',
    message: 'Practice at 5 PM.',
    time: 'FRIDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/564x/f4/2e/6c/f42e6c5d9d8b91cc734e05e027f0d2dc.jpg',
  },
  {
    id: '8',
    name: 'Practice Club',
    message: 'Hinata: Next meeting is on Monday.',
    time: 'SATURDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/736x/a0/55/e6/a055e6c39be26634f76535cb9dc0a8e6.jpg',
  },
  {
    id: '9',
    name: 'Minato Namikaze',
    message: 'Image',
    time: 'SATURDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/564x/eb/b2/6c/ebb26c16f6a5c22c40b5087ee75e911f.jpg',
  },
  {
    id: '10',
    name: 'Gaara Kazekage',
    message: 'Ok',
    time: 'SUNDAY',
    unreadCount: 0,
    avatar: 'https://i.pinimg.com/736x/5a/d6/5b/5ad65b7351d638fac9da2eaf9535124c.jpg',
  },
];

const renderChats = () => (
  <FlatList
    data={chatData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ChatItem item={item} />}
    contentContainerStyle={styles.flatListContent}
  />
);

const renderStatus = () => <StatusScreen />;
const renderCalls = () => <CallsScreen />;
const renderCamera = () => <CameraScreen />;

const initialLayout = { width: Dimensions.get('window').width };

const ListingCards = () => {
  const [index, setIndex] = useState(1); // Set initial index to 1 for the chats tab
  const [routes] = useState([
    { key: 'camera', title: 'CAMERA' },
    { key: 'chats', title: 'CHATS' },
    { key: 'status', title: 'STATUS' },
    { key: 'calls', title: 'CALLS' },
  ]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const renderScene = SceneMap({
    camera: renderCamera,
    chats: renderChats,
    status: renderStatus,
    calls: renderCalls,
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFA800" barStyle="light-content" />
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Alpha Stubs</Text>
        <View style={styles.navbarRight}>
        <TouchableOpacity>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#fff" />
          </TouchableOpacity>
          
        </View>
        
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy
        style={styles.tabView}
        renderTabBar={(props) => (
          <View style={styles.tabs}>
            {props.navigationState.routes.map((route, i) => (
              <TouchableOpacity key={i} onPress={() => setIndex(i)}>
                {route.key === 'camera' ? (
                  <View style={[styles.tab, index === i && styles.activeTab]}>
                    <Icon name="photo-camera" size={23} color="#fff" style={index === i ? styles.activeCameraIcon : {}} />
                  </View>
                ) : (
                  <Text style={[styles.tab, index === i && styles.activeTab, styles.activebot]}>{route.title}</Text>
                )}
              </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#FFA800',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#fff' ,
    // borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
    backgroundColor:'#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFA800',
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  activebot: {
    marginBottom: -3,
  },
  activeCameraIcon: {
    transform: [{ translateY: -4 }],
    marginBottom: -4,
  },
  tabView: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
    minHeight: Dimensions.get('window').height - 150,
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default ListingCards;
