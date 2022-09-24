import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function Stories() {

    const [stories, setStories] = useState([]);

    useEffect(function(){
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
            const stories = await response.json();
            setStories(stories);
        }

        getData();

    }, []);

    function renderItem({ item }) {
        return (
            <View style={styles.stories}>
                <View style={styles.storie}>
                    <Image style={styles.imgStorie} source={{uri: item.imgPerfilUri}} />
                    <Text>{item.nomeUsuario}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.stories}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    stories: {
        flexDirection: 'row',
        height: 90,
    },
    storie: {
        height: 90,
        width: 90,
        alignItems: 'center'
    },
    imgStorie: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#eee'
    }
});