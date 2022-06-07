import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Share,
  Alert,
  DevSettings,
} from 'react-native';
import optionIcon from '../assets/options.png';
import Delete from '../assets/delete.png';
import Duplicate from '../assets/duplicate.png';
import Sharee from '../assets/share.png';
import styles from './style';
import {useMutation, gql} from '@apollo/client';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const index = props => {
  let {
    Data: {id},
  } = props;

  const SHARE_MUTATION = gql`
    mutation {
      shareCard(id: ${id})
    }
  `;
  const DELETE_MUTATION = gql`
  mutation {
    deleteCard(
        id: ${id}
    )
 }
`;
  const [Sharefile] = useMutation(SHARE_MUTATION);
  const [DELETEConfirm] = useMutation(DELETE_MUTATION);

  const handelsharelink = () => {
    Sharefile().then(Res => {
      console.log(Res);
      onShare(Res.data.shareCard);
    });
  };
  const onShare = async v => {
    try {
      const result = await Share.share({
        message: v,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const CardDelete = () =>
    Alert.alert(
      'Confirm Delete',
      'This will delete the Food Style and all its settings.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => HandelDeleteConfirm()},
      ],
    );

  const HandelDeleteConfirm = () => {
    DELETEConfirm().then(res => {
      console.log(res.data);
      DevSettings.reload();
    });
  };
  console.log(props);
  return (
    <View style={{position: 'relative', top: -100}}>
      <View style={styles.cardView}>
        <Text>{props.text}</Text>
        <TouchableOpacity style={{height: 20, width: 20}}>
          <Menu>
            <MenuTrigger>
              <Image source={optionIcon} style={styles.optionIconImg} />
            </MenuTrigger>
            <MenuOptions style={{backgroundColor: 'transparent'}}>
              <MenuOption
                onSelect={() => handelsharelink()}
                style={styles.menuOptionView}>
                <Text>Share</Text>
                <Image source={Sharee} style={styles.menuIcon} />
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Duplicated`)}
                style={styles.menuOptionView}>
                <Text>Duplicate</Text>
                <Image source={Duplicate} style={styles.menuIcon} />
              </MenuOption>
              <MenuOption
                onSelect={() => CardDelete()}
                style={styles.menuOptionView}>
                <Text>Delete</Text>
                <Image source={Delete} style={styles.menuIcon} />
              </MenuOption>
            </MenuOptions>
          </Menu>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
