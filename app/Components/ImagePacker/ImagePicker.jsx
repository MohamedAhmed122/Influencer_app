import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { lightGray } from '../../config/colors';

export default function ImagePick() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
      <>
        <TouchableOpacity onPress={pickImage} style={styles.container}>
            { !image ?  
                ( <FontAwesome name="camera" size={44} color="gray" />) :
                (<Image source={{ uri: image }} style={styles.image} />) 
            }
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: lightGray,
        height: 120,
        width:120,
        borderRadius: 20,
        marginLeft:15,
        display:'flex',
        alignItems:'center',
        justifyContent:"center"
    },
    
    image:{
        height: 120,
        width:120,
        borderRadius: 20,
    
    }
   
})
