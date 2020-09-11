import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';

export default function App({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={require('../assets/img/bg_music.jpg')}
          style={styles.bgImage}>
          <View style={styles.containerLogo}>
            <Text style={styles.titleLogin}>Login</Text>
            <Image style={styles.imgLogo} source={require('../assets/img/agreement.png')} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.inputFields}
              placeholder="E-mail"
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
              <Text style={styles.forgotPassword}>Esqueceu sua senha ?</Text>
            </TouchableOpacity>

            <Text style={styles.register}> Entrar com:</Text>
            <View style={styles.containerIcons}>
              <Image
                style={styles.iconsRegister}
                source={require('../assets/img/facebook.png')}
              />
              <Image
                style={styles.iconsRegister}
                source={require('../assets/img/ui.png')}
              />
              <Image
                style={styles.iconsRegister}
                source={require('../assets/img/twitter.png')}
              />
            </View>

            <View style={styles.createAccount}>
              <Text style={styles.btnRegister}>Ainda não possuí conta?</Text>
              <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.btnRegisterText}>Criar conta gratuita</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flex: 1.3,
    alignItems: 'center',
    width: '95%',
  },
  inputFields: {
    borderColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    height: 50,
    fontSize: 18,
    color: '#000',
    width: '90%',
    backgroundColor: '#fff',
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
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  btnRegister: {
    marginTop: 10,
    marginRight: 5,
    color: '#fff',
  },
  btnRegisterText: {
    fontSize: 14,
    color: '#FF8C00',
    fontWeight: '500',
  },
  titleLogin: {
    marginTop: 10,
    color: '#FF8C00',
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.95,
  },
  register: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerIcons: {
    flexDirection: 'row',
    flex: 1,
  },
  iconsRegister: {
    margin: 7,
  },
  forgotPassword: {
    color:'#fff',
    marginBottom: 15
  },
  createAccount: {
    flexDirection: 'row',
    flex: 1,
  },
});