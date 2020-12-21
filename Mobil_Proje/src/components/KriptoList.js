import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import axios from 'axios'
import KriptoDetail from './KriptoDetail';
function KriptoList() {
    const [kripto,setKripto]=useState(initialKripto);
    useEffect(()=>{
        console.log("req")
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    },[])
    useEffect(()=>{
        const interval = setInterval(() => {
        console.log("req")
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    }, 15000);
        return () => clearInterval(interval);
    },[])
    return (
        <View>
            <ScrollView persistentScrollbar={true}>
                <KriptoDetail token={kripto.BTC_TL} Type="Bitcoin (BTC)" icon="bitcoin" color="#ff8300"/>
                <KriptoDetail token={kripto.ETH_TL} Type="Ethereum (ETH)" icon="ethereum" color="#3C3C3D"/>
                <KriptoDetail token={kripto.XRP_TL} Type="Ripple (XRP)"  icon="times" color="#006097" />
                <KriptoDetail token={kripto.ADA_TL} Type="Cardano (ADA)" icon="centos" color="#296fce"/>
                <KriptoDetail token={kripto.USDT_TL} Type="Tether (USDT)" icon="dollar-sign" color="#4daa90"/>
                <KriptoDetail token={kripto.XTZ_TL} Type="Tezos (XTZ)" icon="tumblr" color="#2b79ef"/>
                <KriptoDetail token={kripto.ATOM_TL} Type="Cosmos (ATOM)" icon="atom" color="#c56bbd"/>
                <KriptoDetail token={kripto.TRX_TL} Type="Tron (TRX)" icon="dice-d20" color="#fb604a"/>
                <KriptoDetail token={kripto.WAVES_TL} Type="Waves (WAVES)" icon="wind" color="#15aabf"/>
                <KriptoDetail token={kripto.XLM_TL} Type="Stellar (XLM)" icon="rocket" color="#7900f7"/>
                <KriptoDetail token={kripto.BCH_TL} Type="Bitcoin Cash (BCH)" icon="bitcoin" color="#4ac445"/>
                <KriptoDetail token={kripto.NEO_TL} Type="Neo (NEO)" icon="cube" color="#4ac445"/>
                <KriptoDetail token={kripto.EOS_TL} Type="Eos (EOS)" icon="dice-d20" color="#34437f"/>
                <KriptoDetail token={kripto.DOGE_TL} Type="Dogecoin (DOGE)" icon="paw" color="#d0af2c"/>
                <KriptoDetail token={kripto.CHZ_TL} Type="Chiliz (CHZ)" icon="pepper-hot" color="#c9152c"/>
            </ScrollView>
        </View>
    )
}
const initialKripto={
    "BTC_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "ETH_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "XRP_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "ADA_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "USDT_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "XTZ_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "ATOM_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "TRX_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "WAVES_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "BAT_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "XLM_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "BCH_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "NEO_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "EOS_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "DOGE_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    "CHZ_TL":{"lowestAsk":0,"highestBid":0,"low24hr":0,"high24hr":0,"avg24hr":0,"volume":0,"last":0,"change":0,"percentChange":0},
    };
export default KriptoList