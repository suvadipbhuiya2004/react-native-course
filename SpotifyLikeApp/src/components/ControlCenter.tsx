import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ControlCenter = () => {
    const playBackState = usePlaybackState();
    const state = playBackState?.state || State.None;

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayBack = async (playBack: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();

        if(currentTrack !== null) {
            if(playBack === State.Paused || playBack === State.Ready) {
                await TrackPlayer.play();
            }
            else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>

            <Pressable onPress={() => togglePlayBack(state)} style={styles.playButton}>
                <Icon
                    style={styles.icon}
                    name={state === State.Playing ? 'pause' : 'play-arrow'}
                    size={40}
                />
            </Pressable>

            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

export default ControlCenter;

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      },
});
