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

export default function Password({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/img/bg_music3.jpg')}
          style={styles.bgImage}>

          <View style={styles.headerContainer}>
            <Text 
              style={styles.titlePassword}>Recuperação
            </Text>
            <Text 
              style={styles.titlePassword}>de conta
            </Text>
            <Text 
              style={styles.textBelowTitle}>Preencha o campo abaixo para recuperar sua conta
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="E-mail"
              autoCorrect={false}
              onChangeText={() => {}}
            />
            <TouchableOpacity 
              style={styles.btnSubmit}>
              <Text 
                style={styles.btnRecoverText}>Enviar e-mail de recuperação
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.btnBackLogin} 
              onPress={() => navigation.navigate('Login')}>
              <Text 
                style={styles.textBackLogin}>Voltar para o login
              </Text>
            </TouchableOpacity>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  bodyContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.95,
  },
  titlePassword: {
    textAlign: 'center',
    fontSize: 45,
    color: '#ff8c00',
    fontWeight: 'bold',
  },
  textBelowTitle: {
    color: '#fff',
  },
  inputField: {
    borderColor: '#ff8c00',
    borderRadius: 15,
    borderWidth: 2,
    padding: 15,
    marginBottom: 15,
    height: 50,
    fontSize: 18,
    color: '#000',
    width: '90%',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  btnSubmit: {
    width: '90%',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    padding: 15,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRecoverText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBackLogin: {
    fontSize: 14,
    color: '#ff8c00',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});   