import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Product from '../components/Product';
import Seperator from '../components/Seperator';
import { PRODUCTS_LIST } from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Seperator}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Details', { product: item })}>
                        <Product product={item} />
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#FFFFFF',
    },
});

export default Home;
