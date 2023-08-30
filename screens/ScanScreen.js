
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
 
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import PostCard from '../components/PostCard';
 
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
 
import {Container} from '../styles/FeedStyles';
 
import {RNCamera} from 'react-native-camera';
 
const lang = 'fr';
const apiUrl = 'https://' + lang + '.openfoodfacts.org';
let arr=[];
 
const ScanScreen = ({navigation}) => {
 const [camRef, setCamRef] = useState(null);
const [data, setData] = useState(null)
const [reco, setReco] = useState([])
 
const afficher = async (data)=>{
const url =apiUrl+'/api/v0/product/'+data+'.json'
 
    
 
    try {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               
            }
        });

        const product = await response.json();
        if (product.status === 0) {
        // Alert.alert ("Ce produit n'existe pas")
         navigation.navigate('AddPost')


        }

       // return product;
      setData(product)
      
      
    } catch (error) {
        console.log(error);
        
    }
}
  //on successfully scanning move to results screens

  const fetchAPI = async () => {
    return await fetch('https://fr-en.openfoodfacts.org/category/'+data.product.categories.split(',')[3]+'.json')
   
     .then(response => response.json())
     .then(res => {
console.log(res.products.length);
console.log("text"+data.product.categories.split(',')[3]);
arr=res.products.filter(item =>item.nutriscore_grade === "a" || item.nutriscore_grade === "b")

let arr2=[];

for ( let i=0;i<6;i++){

   arr2.push(arr[i]);
   


}
setReco(arr2)



// console.log("longueur",arr.length)

    
      console.log("tt",reco)

      ;})
    
     .catch(error => {
       console.error(error);
     });
 };
  function _onBarcodeScanned(code) {
    afficher(code.data)
    fetchAPI();

    if (data!= null && reco.length>0){
       navigation.navigate('Result', {code: data,reco:reco})
    }
   
  
  }
 
  
 
  return (
    <View style={Styles._mainContainer}>
      <RNCamera
        ref={(ref) => setCamRef(ref)}
        style={Styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        autoFocus="on"
        captureAudio={false}
        onBarCodeRead={_onBarcodeScanned}
      />
    </View>
  );
}
 
const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
});
 
export default ScanScreen;