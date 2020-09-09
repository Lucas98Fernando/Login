import React from 'react';
import {StyleSheet,
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

export default function Register({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={require('../assets/bg_music1.jpg')}
          style={styles.bgImage}>
          <View style={styles.containerLogo}>
            <Text style={styles.titleLogin}>Cadastro</Text>
            <Text style={styles.textAboveTitle}>Preencha os campos abaixo para criar sua conta</Text>
            <Image style={styles.imgLogo} source={require('../assets/agreement.png')} />
          </View>

          <View style={styles.containerInput}>

          <TextInput
              style={styles.inputFields}
              placeholder="Nome Completo"
              autoCorrect={false}
              onChangeText={() => {}}
            />

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

            <TextInput
              style={styles.inputFields}
              placeholder="Confirmar senha"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={() => {}}
            />

            <Text style={styles.textTerms}>Li e concordo com os termos de uso.</Text>

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.btnText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnRegisterText}>Voltar para o login</Text>
            </TouchableOpacity>

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
    flex: 1.5,
    alignItems: 'center',
    width: '95%',
  },
  inputFields: {
    borderColor: '#fff',
    borderRadius: 20,
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
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 20,
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
    padding: 10,
    marginBottom: 10,
  },
  btnRegisterText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textCreateAccount: {
    color: '#fff',
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
    marginBottom: 5,
  },
  containerIcons: {
    flexDirection: 'row',
    flex: 1,
  },
  iconsRegister: {
    margin: 7,
  },
  textTerms: {
    color: '#fff',
    marginBottom: 15,
  },
  textAboveTitle: {
    color: '#fff',
  },
});
