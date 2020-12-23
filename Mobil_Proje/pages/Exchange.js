import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import NaviBar from '../src/components/NaviBar'

function Exchange({navigation}) {
    return (
        <>
            <ScrollView persistentScrollbar={true}>
                <NaviBar navigation={navigation}/>
                
            </ScrollView>
        </>
    )
}

export default Exchange
