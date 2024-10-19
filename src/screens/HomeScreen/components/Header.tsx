import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="left" size={24} color="#fff" />
    </TouchableOpacity>
    <View style={styles.headerCenter}>
      <Text style={styles.title}>Меню</Text>
      <Text style={styles.subtitle}>Costa Coffee</Text>
    </View>
    <Icon name="search1" size={24} color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCenter: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#A5A9BA',
    fontSize: 16,
    fontWeight: '400',
  },
  iconButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
    borderRadius: 12,
  },
});

export default React.memo(Header);
