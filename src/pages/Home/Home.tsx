import React from 'react';
import styles from './home.style'
import adventConfig from '../../config/adventConfig';
import AdventList from "../../components/AdventList/AdventList";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = ({}) => {
    return <SafeAreaView style={styles.container}>
        <AdventList data={adventConfig}/>
    </SafeAreaView>
}

export default Home
