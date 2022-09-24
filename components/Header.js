import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <Image style={styles.headerLogo} source={require('../assets/imagens/logo.png')} />
            <FontAwesome5 name="paper-plane" size={24} onPress={() => navigation.navigate('ChatList')} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,

        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerLogo: {
        height: 25,
        width: 110
    },
});