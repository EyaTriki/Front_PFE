import React  ,{useEffect , useState } from 'react';
import {StyleSheet,FlatList, View, Text, TouchableOpacity,ScrollView ,SafeAreaView, Image,Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SvgUri from 'react-native-svg-uri';

const HistoItem = ({navigation , route }) => {
  const {item} = route.params;
  const [estado, setEstado] = useState(false);
  const AjoutFav = () => {
    setEstado(!estado);
  };
   if (item.item.nutriscore_score == 0 || item.item.nutriscore_score=="" ){
    rslt=" "
    {color ="#fff"}
}else if (1<=item.item.nutriscore_score<=25){
    rslt=" Mauvais"
    {color ="red"}
}else if(25 <  item.item.nutriscore_score<=50){
    rslt=" Médiocre"
    {color="orangered"}

}else if(50 <  item.item.nutriscore_score<=75){
    rslt=" Moyenne"
    {color="gold"}

}else if(75 <  item.item.nutriscore_score<=100){
    rslt=" Exellent"
   {color="green"}
}

    return (
  


  <ScrollView style={styles.scrollviewContainer}>

            <View style={styles.headerContainer}>

                          <Image
                                style={styles.imageProduct}
                                source= {{uri : item.item.image}}
                            />


              <View style={styles.headerDescription}>
           
                  <Text
                      style={styles.productNameText}>
                        {item.item.nom}
                      </Text>
                   <Text style={styles.defaultText}>Quantité
                      : {item.item.quantite}</Text>
                     


                      <Text style={styles.defaultText}>Marque
                      :  {item.item.marque}</Text>

                    


                  
                      

                  <Text style={styles.descriptionText}>Code à barres : {item.item.code}</Text>
                  <Text style={styles.defaultText} >
                  <Octicons  name="primitive-dot" color= {color} style={{ fontSize: 20}} />{rslt}</Text>
                      
                      <Text style={styles.defaultText}>  {item.item.scorevaleur} /100</Text>
                      
                      

                       <Text style={styles.defaultText}>
                      Pays de vente : {item.item.pays}</Text>
               
              </View>
          </View>
          

        

        
          <Image
                      style={styles.imageNutri}
            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+item.item.score+'.png'}}
            
            />
          
          <Text style={styles.titleText}>Repères nutritionnels pour 100 g : </Text>
          <Text
              style={styles.defaultText}>
                
               Energies : { item.item.energies} KJ
               </Text>

               <Text
              style={styles.defaultText}>
                
               Proteines:  { item.item.proteines}g
               
               </Text>
             
               <Text
              style={styles.defaultText}>
                
                sucres : { item.item.sucre}g
               
               </Text>
               <Text
              style={styles.defaultText}>
                
                Fibres : { item.item.fibres}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Lipides : { item.item.lipides}g
               
               </Text> 

               <Text
              style={styles.defaultText}>
                
                Glucides : { item.item.glucides}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Sel: { item.item.sels}g
               
               </Text> 
                
                <Text
              style={styles.defaultText}>
                
              La liste des allergènes:  { item.item.allergenes}g
               
               </Text> 
               
               
               
                <Text style={styles.titleText}>Impact environnemental "Eco-score " :</Text>
               <Image
                      style={styles.imageNutri}
                   source={{uri: 'https://static.openfoodfacts.org/images/attributes/ecoscore-'+item.item.eco+'.png'}
                  }
            
            />
               <Text style={styles.titleText}>Groupe NOVA:</Text>
               
           <SvgUri
                      style={styles.imageNova}
            source={{uri: 'https://static.openfoodfacts.org/images/attributes/nova-group-'+item.item.nova+'.svg'}}
            
            />
            
                            
                           
                          


</ScrollView>
     
    );
};
const styles = StyleSheet.create({
 
  mainContainer: {
    flex: 1,
    backgroundColor:"#fff",
},
imageNova : {
  justifyContent: 'center',
        alignItems: 'center',
        
}
,


listItem: {
   
    flex:0.5,
    backgroundColor: '#dcdcdc',
    
    borderRadius: 4,
     marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    
},

scrollviewContainer: {
    flex: 1,
    flexDirection: "column",
     backgroundColor:"#fff",
},


imageProductReco :{
    width:100,
   height: 180,
   marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,


},

headerContainer: {
    flexDirection: "row",
},
imageProduct: {
    flex: 1,
    margin: 5,
    resizeMode: 'contain',
  width: 350,
   height: 350,
   borderRadius:10,
},
imageNutri: {
    height: 80,
    marginTop: 5,
    marginBottom: 10,
    resizeMode: "contain",
},
imagenutri: {
    height: 80,
    width:100,
    marginTop: 5,
    marginLeft:11,
    marginBottom: 10,
    resizeMode: "contain",
},
headerDescription: {
    flex: 1,
},
productNameText: {
    fontWeight: 'bold',
    fontSize: 30,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'left'
},
titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    color: '#000000',
    textAlign: 'left'
},
descriptionText: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
},
defaultText: {
    marginLeft: 5,
    marginRight: 5,
},
cartButton: {
    marginLeft: 15,
    marginRight: 15,
},
borderTop: {
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1,
},
});

export default HistoItem;


