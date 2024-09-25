import React from "react";
import { Input } from '../../components/Input';
import { ButtonType } from '../../components/ButtonType';
import { View, Text, Image } from "react-native";
import Logo from "../../assets/TaskNote.png";

import { style } from "./styles";

export default function Login () {
    return (
        <View style={style.container}>

            <View style={style.header}>

                <Image 
                    source={ Logo }
                    resizeMode="contain"
                />

            <Text style={style.text}>Bem vindo de volta!</Text>

            </View>

            <View style={style.body}>

                <Input name="E-mail"></Input>
                <Input name="Senha"></Input>
            </View>

            <View style={style.footer}>
                <ButtonType name="Entrar"></ButtonType>
                <ButtonType name="Cadastrar"></ButtonType>
            </View>
        
        </View>
    )
}