import { useState } from "react";
import { Button, View } from "react-native"

type ButtonTypeProps = {
    name: string;
}

export const ButtonType = (props: ButtonTypeProps) => {
    const [click, setClick] = useState(false);

    return (
        <Button
                onPress={() => {
                setClick(true);
                }}
                title={props.name}
        />
    )
}