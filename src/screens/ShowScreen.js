import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ShowScreen = ({navigation}) => {
    // navigation.getParam('id')
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <FontAwesome name="pencil" size={30} color="black" />
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({})

export default ShowScreen;