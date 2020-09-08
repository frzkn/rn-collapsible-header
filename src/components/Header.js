import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Add from '../assets/svg/Add';
import Menu from '../assets/svg/Menu';
import Search from '../assets/svg/Search';

const Header = (props) => {
  const {headerHeight} = props;
  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <Menu />
        <Text style={styles.conversation}>Conversations</Text>
        <Add />
      </View>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <View style={styles.searchBox}>
          <Search />
          <Text style={styles.searchText}>Search for messages or users</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversation: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  searchText: {
    color: '#8B8B8B',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 8,
  },
  searchBox: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#0F0F0F',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default Header;
