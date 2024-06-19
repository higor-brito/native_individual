import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { homeStyle } from './style'
import Logo from '../../Assets/logo.png';
import LogoI from '../../Assets/logo2.jpg';


export function Home() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmail = (value: string) => {
        setEmail(value)
        console.log('Valor da email:', value)
    }

    const handlePassword = (value: string) => {
        setPassword(value)
        console.log('Valor da senha:', value)
    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={homeStyle.container}>

        <Image 
            source={Logo}
            alt='Logo da prime video' 
            style={homeStyle.image}
        />

        <Text style={homeStyle.title}>Login</Text>

        <TextInput 
            style={[homeStyle.TextInput]}
            onChangeText={handleEmail}
            value={email}
            placeholder='Digite seu email'
        />

        <TextInput 
            style={[homeStyle.TextInput]}
            onChangeText={handlePassword}
            value={password}
            placeholder='Digite sua senha'
            secureTextEntry
        />

        <TouchableOpacity style={[homeStyle.button]}>

        <Image 
            source={LogoI}
            alt='Logo da prime video' 
            style={[homeStyle.imageButton, {width: '100%', height: 40, position:'absolute', borderRadius: 10}]}
        />

            <Text style={[{color:'white', fontWeight:'bold'}]}>
                Entrar
            </Text>
        </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
  )
}
