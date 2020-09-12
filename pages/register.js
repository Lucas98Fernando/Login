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

export default function Register({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <ImageBackground
          source={require('../assets/img/bg_music4.jpg')}
          style={styles.bgImage}>
            
          <View style={styles.headerContainer}>
            <Text style={styles.titleRegister}>Cadastro</Text>
            <Text style={styles.textBelowTitle}>Preencha os campos abaixo para criar sua conta</Text>   
          </View>

          <View style={styles.bodyContainer}>
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

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.btnText}>Criar conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.btnBackLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textBackLogin}>Voltar para o login</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.95,
  },
  inputFields: {
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
  },
  btnSubmit: {
    width: '90%',
    marginBottom: 25,
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
  textBackLogin: {
    fontSize: 14,
    color: '#ff8c00',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleRegister: {
    color: '#FF8C00',
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
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
  textBelowTitle: {
    color: '#fff',
    marginBottom: 50,
  },
});
