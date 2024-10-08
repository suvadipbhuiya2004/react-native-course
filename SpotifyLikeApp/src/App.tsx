import React, {useState, useEffect} from 'react';
import { addTrack, setupPlayer } from '../musicPlayerSercvices';
import MusicPlayer from './screens/MusicPlayer';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup(){
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;
