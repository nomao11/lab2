import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import LanguageItem from './components/LanguageItem';

const programmingLanguages = [
  {
    id: '1',
    lang: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    id: '2',
    lang: 'Node.js',
    logo: 'https://nodejs.org/static/images/logo.svg',
  },
  {
    id: '3',
    lang: 'C++',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  },
];

const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => <LanguageItem language={item} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;