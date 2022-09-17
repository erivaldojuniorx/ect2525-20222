import { StyleSheet, View, Text, ScrollView } from "react-native"
import Constants from 'expo-constants';

export default function ScrollViewEx() {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Top</Text>
            </View>
            <ScrollView style={styles.bottom}>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.scrollItem}>
                    <Text>Item 1</Text>
                </View>

            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight
      },
    top: {
        flex: 2,
        backgroundColor: '#fff',
    },
    bottom: {
        flex: 1,

    },
    scrollItem: {
        padding: 10,
        backgroundColor: '#eee',
        alignItems: "center",
        borderColor: '#999',
        borderBottomWidth:2
    }
});
