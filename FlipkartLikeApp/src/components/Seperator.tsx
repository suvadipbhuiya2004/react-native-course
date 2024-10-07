import { StyleSheet, View } from 'react-native';
import React from 'react';

const Seperator = () => {
  return (
    <View style = {styles.seperator}/>
  );
};

const styles = StyleSheet.create({
    seperator: {
        height: 2,
        backgroundColor: '#CAD5E2',
    },
});

export default Seperator;
