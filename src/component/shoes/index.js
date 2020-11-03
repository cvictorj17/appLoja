import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

function filterDesc(desc){
    if(desc.length < 23)
        return desc;

    return `${desc.substring(0, 23)}...`;
}

export default function Shoes(props) {
    return (
        <TouchableOpacity>
            <Image
                source={props.img}
                style={styles.shoesImg}
            />

            <Text style={StyleSheet.shoesText}>
                {filterDesc(props.children)}
            </Text>

            <View opacity={0.4}>
                <Text style={StyleSheet.shoesText}>{props.cost}</Text>
            </View>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 175,
        height: 175 
    },
    shoesText: {
        fontSize: 16
    }
});