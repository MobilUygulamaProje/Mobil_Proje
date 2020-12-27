import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import NaviBar from '../src/components/NaviBar'
import ExchangeDetails from '../src/components/ExchangeDetails'

function Exchange({navigation}) {
    return (
        <>
            <ScrollView persistentScrollbar={true}>
            <ExchangeDetails/>
            </ScrollView>
        </>
    )
}

export default Exchange
