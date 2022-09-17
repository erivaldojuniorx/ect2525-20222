import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {
    const stories = [
        {
            id: 1,
            nome: 'Perna 1',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 2,
            nome: 'Perna 2',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 3,
            nome: 'Perna 3',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 4,
            nome: 'Perna 4',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 5,
            nome: 'Perna 5',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 6,
            nome: 'Perna 6',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 7,
            nome: 'Perna 7',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 8,
            nome: 'Perna 8',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 9,
            nome: 'Perna 9',
            src: require('../assets/imagens/pernalonga.png')
        },
        {
            id: 10,
            nome: 'Perna 10',
            src: require('../assets/imagens/pernalonga.png')
        },
    ];

    function renderItem({ item }) {
        return (
            <View style={styles.stories}>
                <View style={styles.storie}>
                    <Image style={styles.imgStorie} source={item.src} />
                    <Text>{item.nome}</Text>
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