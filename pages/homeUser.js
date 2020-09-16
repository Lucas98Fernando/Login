import React from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  ImageBackground, 
  TextInput, 
  Keyboard, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Image,
} from 'react-native';

export default function HomeUser({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/img/bg_music3.jpg')}
          style={styles.bgImage}>

          <View style={styles.headerContainer}>
            <Image
              style={styles.imgUser} 
              source={require('../assets/img/user.png')} 
            />
            <Text 
              style={styles.titleHome}>Olá, Lucas. 
            </Text>
            <Text 
              style={styles.textBelowTitle}>Bem-vindo de volta !
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.contentRow}>
              <TouchableOpacity 
                style={styles.btnSubmit}>
                  <ImageBackground
                    style={styles.bgContent} 
                    source={require('../assets/img/bg_music.jpg')}>
                    <Text 
                      style={styles.btnText}>Encontrar músicos
                    </Text>
                    <Text style={styles.description}>
                      Escontre o músico ideal para o seu evento
                    </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.btnSubmit}>
                  <ImageBackground
                    style={styles.bgContent} 
                    source={require('../assets/img/bg_music.jpg')}>
                    <Text 
                      style={styles.btnText}>Encontrar eventos
                    </Text>
                    <Text style={styles.description}>
                      Escontre o evento ideal para o seu gosto
                    </Text>
                  </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.contentRow}>
              <TouchableOpacity 
                style={styles.btnSubmit}>
                  <ImageBackground
                    style={styles.bgContent} 
                    source={require('../assets/img/bg_music.jpg')}>
                    <Text 
                      style={styles.btnText}>Criar eventos
                    </Text>
                    <Text style={styles.description}>
                      Crie o seu próprio evento
                    </Text>
                  </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.btnSubmit}>
                  <ImageBackground
                    style={styles.bgContent} 
                    source={require('../assets/img/bg_music.jpg')}>
                    <Text 
                      style={styles.btnText}>Editar evento
                    </Text>
                    <Text
                      style={styles.description}>Altere as informações de algum evento criado por você
                    </Text>
                  </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  bodyContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.95,
  },
  titleHome: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ff8c00',
    fontWeight: 'bold',
  },
  textBelowTitle: {
    fontSize: 20,
    color: '#fff',
  },
  btnSubmit: {
    width: '50%',
    borderRadius: 15,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ff8c00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imgUser: {
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: '#ff8c00',
    marginTop: 10,
    textAlign: 'center',
  },
  titleContent: {
    color: '#fff',
    fontSize: 20,
  },
  contentRow: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  bgContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.75)',
  },
});   