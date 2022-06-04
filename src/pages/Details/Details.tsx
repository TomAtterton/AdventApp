import React from 'react';
import styles from './details.style'
import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

interface Props {
    route: {
        params: {
            title: string
        }
    }
}

const Details = ({
                     route: {
                         params: {
                             title
                         }
                     }
                 }: Props) => {
    return <SafeAreaView style={styles.container}>
        <Text>{title}</Text>
    </SafeAreaView>
}

export default Details
