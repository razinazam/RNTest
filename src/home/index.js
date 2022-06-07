import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import Logo from '../assets/logo.png';
import Card from '../card';
import {useQuery, gql} from '@apollo/client';

const index = props => {
  const [dataa, setdata] = useState([]);
  const EXCHANGE_RATES = gql`
    query {
      cards {
        id
        name
      }
    }
  `;
  const {loading, error, data} = useQuery(EXCHANGE_RATES);
  React.useEffect(() => {
    setdata(data?.cards);
    console.log(data);
  }, [data]);
  console.log(dataa);
  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={['#FA7777', '#F3C442', '#FFFFFF']}
          start={{x: 0}}
          end={{x: 2}}
          style={styles.linearGradient}>
          <Image source={Logo} style={styles.optionIconImg} />
        </LinearGradient>

        <View>
          <View style={styles.homeView}>
            {dataa &&
              dataa.map((res, v) => {
                return <Card text={res.name} Data={res} />;
              })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default index;
