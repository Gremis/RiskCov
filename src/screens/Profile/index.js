import React from "react";
import { View, Pressable, Text } from "react-native";


const ProfileScreen = (props) => {

  const logout = () => {
    console.log('CHAO');
  }

  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={logout}
        style={{
        width: '100%',
        height: 40,
        backgroundColor: '#c3c3c3',
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;