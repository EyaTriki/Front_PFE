import React ,{useEffect, useState } from 'react';
import { View, Image ,Text,SafeAreaView,ScrollView, Button, StyleSheet, FlatList ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import Icons from 'react-native-vector-icons/Octicons';
//import { IconButton ,Colors } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoItem from './HistoItem';
 
const HistoScreen = ({navigation,route}) => {
 const [data, setData] = useState([])
  const [added, setAdded] = useState(false);
  


   
    
  const requestOptions = async(item)=>{
     
    await axios.post("http://192.168.43.91:5000/api/product/delete",{id:item})
    getHistory()

}
useEffect(() => {
getHistory()

}, [])


const getHistory = async()=>{


try {
let response = await fetch(
'http://192.168.43.91:5000/api/product'
);
let json = await response.json();

setData(json.list)

} catch (error) {
console.error(error);
}
};

console.log(data)

 
  const AjoutFav = () => {
    setAdded(!added);
  };
    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        
<FlatList

data={data}
renderItem={(item)=>{ console.log(item) ;


return ( 

<TouchableOpacity onPress={() => navigation.navigate('HistoI', {item}) }>
<View style={styles.listItem}>
    <View>
  
        <Image style= {styles.productimg} source={{uri: item.item.image}}/>
        </View>
    

        <View style={{alignItems:"center",flex:1,marginTop:35 ,}}>
        <Text style={{fontWeight:"bold"}}>{item.item.nom} </Text>
                <Text style={{fontWeight:"bold"}}>Marque : {item.item.marque} </Text>
                
       
        <Image
                      style={styles.imageNutri}
            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+item.item.score+'.png'}}
            
            />
            
        
        
             
           </View>
           <View >
           <TouchableOpacity onPress={() => requestOptions(item.item._id) } >
           <Icons  type='Octicons' name='trashcan'  style={{ marginRight:6,marginTop:60,fontSize: 30}}  />

        </TouchableOpacity>
     
           </View>
      
  

</View>
</TouchableOpacity>
    )}}
keyExtractor={item => item._id}

/>

    
          </SafeAreaView>
 
      );
    }
    
    const styles = StyleSheet.create({
 
      
        container: {
            flex: 1/2,
            backgroundColor: '#fff',
            padding: 20,
          },
          nutri : {
            width: 200,
             height: 100,
    

          },


    listItem: {
   
    flex:0.5,
    backgroundColor:"#f8f8ff",
    borderRadius: 4,
    flexDirection: "row",
    
    marginLeft:5,
    
    
    marginBottom: 20,
    
    marginRight: 5,
    
},
          productimg :{
            width:100, 
            height:140,
            borderRadius:10,
            marginTop:40,
    marginLeft:5,
    
    
    marginBottom: 20,
    
    marginRight: 5,
            
        
          },
          imageNutri: {
    height: 95,
    width :180,
    marginTop:10,
    
},
 
       flatList: { height: "100%", width: "100%", backgroundColor: "transparent" },

      question: {
        fontSize: 30,
        fontWeight: "bold",
        
        fontFamily: "Cochin"
 
      }
 
    });
 
export default HistoScreen;