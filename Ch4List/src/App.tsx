import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import BookItem from './Components/BookItem';
import NYT from './NYT';

type AppState = {
  data: Array<any>;
}

type bookType = {
  key: string;
  title: string;
  thumbnail: string;
  authors: Array<string>;
}

type itemType = {
  item: bookType
}

class App extends Component<any, AppState> {

  state = {
    data: []
  };

  componentDidMount() {
    NYT.fetchBooks().then(books => {
      this.setState({
        data: this._addKeysToBooks(books)
      })
    })
  }

  _renderItem = ({ item }: itemType) => (
    <BookItem
      coverURL={item.thumbnail}
      title={item.key}
      author={item.authors[0]}
    >
      {item.key}
    </BookItem>
  );

  _addKeysToBooks = (books: []) => books.map((book: bookType) => ({ key: book.title+book.authors[0], ...book }));

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingTop: 30
  }
});

export default App;
