/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import Home from './src/home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api-dev.foodstyles.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0NTkzNzA5LCJleHAiOjE2NTUxOTg1MDl9.jGZFJ0IIMg-RQOsRufgpeSRRY2JCYmkohdvhLf3VepSPiAEhlNd5dgwtS7ihTtWTu1IzIIAYDf5ZAdpZozvbHnaGui7Ib-7wU-6NIIl6qQr1UOktXq4f3TNGq4S3ZwZpXYzpCnJC2iPt_4KaZRWetA7GZb4FaBYgK3lzwZ5eBs-EnrDZQ0_sMqYbK18NRw4vyy1o1aAuPp3eHhdvvEGlWZDvRM3dVzIgqs3BMOBJ8OhAclHpqCGtYgupcIeyjnA-KDgxuaZwWBPljsAeBm6Wegf-q_Rz_IYpRiyHu-VOUUoONqNs7OBNoLfp-rob5otNrzA1GMSbsXX-lnBTleGhUg',
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </MenuProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
