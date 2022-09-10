import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/imagens/logo.png')} />
        <FontAwesome5 name="paper-plane" size={24} color="black" />
      </View>
      <View style={styles.stories}>
        <View style={styles.storie}>
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 1</Text>
        </View>
        <View style={styles.storie}>
		
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 2</Text>
        </View>
        <View style={styles.storie}>
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 3</Text>
        </View>
        <View style={styles.storie}>
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 4</Text>
        </View>
        <View style={styles.storie}>
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 5</Text>
        </View>
        <View style={styles.storie}>
          <Image style={styles.imgStorie} source={require('./assets/imagens/pernalonga.png')} />
          <Text>Pernalonga 6</Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image style={styles.postHeaderImg} source={require('./assets/imagens/pernalonga.png')} />
              <Text>Pernalonga</Text>
            </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black" />
          </View>
          <Image style={styles.postImg} aspectRatio={1.778} source={require('./assets/imagens/tiny-toon-adventures.jpg')} />
          <View style={styles.postFooter}>
            <FontAwesome5 style={styles.postFooterIcon} name="heart" size={36} color="black" />
            <FontAwesome5 style={styles.postFooterIcon} name="comment" size={36} color="black" />
            <FontAwesome5 style={styles.postFooterIcon} name="paper-plane" size={36} color="black" />
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image style={styles.postHeaderImg} source={require('./assets/imagens/pernalonga.png')} />
              <Text>Pernalonga 2</Text>
            </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black" />
          </View>
          <Image style={styles.postImg} aspectRatio={1.778} source={require('./assets/imagens/tiny-toon-adventures.jpg')} />
          <View style={styles.postFooter}>
            <FontAwesome5 style={styles.postFooterIcon} name="heart" size={36} color="black" />
            <FontAwesome5 style={styles.postFooterIcon} name="comment" size={36} color="black" />
            <FontAwesome5 style={styles.postFooterIcon} name="paper-plane" size={36} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: 'row',
    height: 50,

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    height: 25,
    width: 110
  },
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
  },
  feed: {
    flex: 1,
    backgroundColor: '#00f'
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
    backgroundColor: '#f0f',
    flexDirection: 'row',
    alignItems: 'center'
  },
  postFooterIcon: {
    marginLeft: 10
  }

});
