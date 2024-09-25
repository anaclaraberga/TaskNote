import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",

            width: "100%",
            height: Dimensions.get('window').height
        },

        header: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 10,

            width: "100%",
            height: 100,

            backgroundColor: '#D0D5DD'
        },

        body: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10
        },

        footer: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: 10,

            width: 300,
            height: "auto",
            
            borderColor: "#D0D5DD",
            borderRadius: 10
        },

        text: {
            fontWeight: "600"
        }
    }
)