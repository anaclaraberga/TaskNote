import { useState } from "react";
import { View, TextInput, Text } from "react-native"

type InputProps = {
    name: string;
}

export const Input = (props: InputProps) => {

    return (
        <View>
            <Text>{props.name}</Text>

            <TextInput
                style={{
                width: 300,
                height: 45,
                borderColor: '#D0D5DD',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10
                }}
                defaultValue="You can type in me"
            />
        </View>
    )
}