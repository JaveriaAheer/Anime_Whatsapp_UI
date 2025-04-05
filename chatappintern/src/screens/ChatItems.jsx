// ChatItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatItem = ({ item }) => (
  <View style={styles.chatItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.chatInfo}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatTime}>{item.time}</Text>
      </View>
      <Text style={styles.chatMessage}>{item.message}</Text>
    </View>
    {item.unreadCount > 0 && (
      <View style={styles.unreadBadge}>
        <Text style={styles.unreadText}>{item.unreadCount}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatTime: {
    color: '#666',
  },
  chatMessage: {
    color: '#666',
    marginTop: 5,
  },
  unreadBadge: {
    backgroundColor: '#FFA800',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatItem;
