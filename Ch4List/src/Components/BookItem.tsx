import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type BookItemType = {
  coverURL: string;
  author: string;
  title: string;
}

const BookItem: FunctionComponent<BookItemType> = ({ coverURL, author, title }) => (
  <View style={styles.bookItem}>
    <Image style={styles.cover} source={{ uri: coverURL }} />
    <View style={styles.info}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    padding: 5,
  },
  cover: {
    flex: 1,
    height: 150,
    resizeMode: 'contain',
  },
  info: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'center',
    paddingLeft: 10
  },
  author: {
    marginBottom: 10,
    fontSize: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
});

export default BookItem;
