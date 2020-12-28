import React from 'react'
import { View, Text, ScrollView, Dimensions, TouchableWithoutFeedback, Linking } from 'react-native'
import NaviBar from '../src/components/NaviBar'
import ExchangeDetails from '../src/components/ExchangeDetails'
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons';

function Exchange({navigation}) {
    return (
        <>
            <View>
                <View style={{ backgroundColor: "#232632", flexDirection: "row", padding: Height / 40, paddingLeft: Height / 50, paddingRight: Height / 50, justifyContent: "space-between", alignItems: "center" }}>
                    <Icon
                        name="menu-sharp"
                        size={30}
                        color="white"
                        onPress={() => navigation.openDrawer()}
                    />

                    <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
                        CRYPTO App
                    </Text>
                    <FontAwesome5 size={30} name={'coins'} color="#fbd208" />
                </View>
            </View>

            <ScrollView persistentScrollbar={true}>
                <ExchangeDetails />
            </ScrollView>
        </>
    )
}

export default Exchange
