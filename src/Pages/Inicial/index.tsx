import React from 'react'
import { View, Text, Image } from 'react-native'
import { homeStyles } from './style'
import CardI from '../../Assets/card1.jpg';
import CardII from '../../Assets/card2.jpg';

 export function Inicial() {
  return (
    <View style={homeStyles.container} >

        <View style={homeStyles.navbar}>
            <Text style={homeStyles.textI}>Home</Text>
        </View>

        <Text style={homeStyles.text}>Música</Text>
        <View style={homeStyles.card}>
            <Text style={homeStyles.text}>Assista na Prime</Text>
            
            <Image 
            source={CardI}
            alt='Logo da prime video' 
            style={[homeStyles.imageCard]}
            />

        </View>

        <Text style={homeStyles.text}>Minha Culpa</Text>
        <View style={homeStyles.card}>
            <Text>Primeiro card</Text>
            <Image 
            source={CardII}
            alt='Logo da prime video' 
            style={[homeStyles.imageCard, {paddingBottom: 80}]}
            />
        </View>

        <View style={homeStyles.footer}>
            <Text style={homeStyles.textI}>Prime Vídeo</Text>
        </View>

    </View>
  )
}
