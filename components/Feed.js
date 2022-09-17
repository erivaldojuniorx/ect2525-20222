import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: 'Pernalonga',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },
        {
            id: 2,
            nome: 'Pernalonga 2',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },
        {
            id: 3,
            nome: 'Pernalonga 3',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },
        {
            id: 4,
            nome: 'Pernalonga 4',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },
        {
            id: 5,
            nome: 'Pernalonga 5',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },
        {
            id: 6,
            nome: 'Pernalonga 6',
            postHeaderImg: require('../assets/imagens/pernalonga.png'),
            postImg: require('../assets/imagens/tiny-toon-adventures.jpg'),
            aspectRatio: 1.778
        },

    ];

    function renderItem({ item }) {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.postHeaderLeft}>
                        <Image style={styles.postHeaderImg} source={item.postHeaderImg} />
                        <Text>{item.nome}</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={16} color="black" />
                </View>
                <Image style={styles.postImg} aspectRatio={item.aspectRatio} source={item.postImg} />
                <View style={styles.postFooter}>
                    <FontAwesome5 style={styles.postFooterIcon} name="heart" size={36} color="black" />
                    <FontAwesome5 style={styles.postFooterIcon} name="comment" size={36} color="black" />
                    <FontAwesome5 style={styles.postFooterIcon} name="paper-plane" size={36} color="black" />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.feed}>
            <FlatList data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    feed: {
        flex: 1,
    },
    post: {
        backgroundColor: '#fff',
    },
    postHeader: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    postHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postHeaderImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginRight: 10
    },
    postImg: {
        width: '100%',
        height: undefined
    },
    postFooter: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    postFooterIcon: {
        marginLeft: 10
    }

});