import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');
const ListItem = (props) => {
  const {item} = props;
  const {name, color, message} = item;
  return (
    <TouchableOpacity style={styles.listItem}>
      <View
        style={[
          styles.contactIcon,
          {
            backgroundColor: color,
          },
        ]}
      />
      <View>
        <Text style={styles.contactName}>{name}</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.message} numberOfLines={2} ellipsizeMode={'tail'}>
            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    top: 16,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    width: '95%',
    marginLeft: 10,
    marginTop: 18,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contactIcon: {
    height: 60,
    width: 60,
    borderRadius: 999,
  },
  contactName: {
    marginLeft: 15,
    fontSize: 16,
    color: 'white',
  },
  messageContainer: {
    marginRight: 20,
    paddingHorizontal: 15,
    width: width * 0.8,
  },
  message: {
    fontSize: 14,
    color: '#979799',
  },
});

export default ListItem;
