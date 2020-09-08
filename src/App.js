import React, {useRef} from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {generateData} from './data';

const headerHeight = 58 * 2;

const App = () => {
  const data = generateData(25);
  const ref = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1c1c1c" style="light" />
      <View style={[styles.header]}>
        <Header {...{headerHeight}} />
      </View>
      <FlatList
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: headerHeight}}
        ref={ref}
        data={data}
        renderItem={ListItem}
        keyExtractor={(item, index) => `list-item-${index}-${item.color}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
