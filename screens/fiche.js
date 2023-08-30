import React  ,{useEffect , useState } from 'react';
import {StyleSheet,FlatList, View, Text, TouchableOpacity,ScrollView ,SafeAreaView, Image,Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SvgUri from 'react-native-svg-uri';
import reco2 from './reco2';
const fiche = ({navigation , route }) => {
     const {item} = route.params;
    const [reco, setReco] = useState([])
 
  const [estado, setEstado] = useState(false);


  const fetchAPI = async () => {
    return await fetch('https://fr-en.openfoodfacts.org/category/'+item.categories.split(',')[3]+'.json')
   
     .then(response => response.json())
     .then(res => {
console.log(res.products.length);
console.log("text"+item.categories.split(',')[3]);
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
                                source= {{uri : item.item.image_front_url}}
                            />


              <View style={styles.headerDescription}>
           
                  <Text
                      style={styles.productNameText}>
                        {item.item.product_name}
                      </Text>
                      <TouchableOpacity onPress={() => AjoutFav()}>
        <Ionicons
        style={{marginLeft:20,marginTop:3,fontSize: 30}} 
          name={estado ? 'md-heart' : 'md-heart-outline'}
          size={20}
          color="#ff6347"
        />
      </TouchableOpacity>

                    


                  <Text style={styles.defaultText}>Quantité
                      : {item.item.quantity}</Text>
                     


                      <Text style={styles.defaultText}>Marque
                      :  {item.item.brands}</Text>
                      

                  <Text style={styles.descriptionText}>Code à barres : {item.item.code}</Text>
                 
               <Text style={styles.defaultText} >
                  <Octicons  name="primitive-dot" color= {color} style={{ fontSize: 20}} />{rslt}</Text>
                      
                      <Text style={styles.defaultText}>  {item.item.nutriscore_score} /100</Text>
                      
                      

                       <Text style={styles.defaultText}>
                      Pays de vente : {item.item.countries}</Text>
                      
              </View>
          </View>
          

          <Text style={styles.titleText}>Catégories</Text>

          <Text
              style={styles.defaultText}>{item.item.categories}
          </Text>

          


 
        

   






         <Text style={styles.titleText}>Ingrédients</Text>
         <Text
              style={styles.defaultText}>{item.item.ingredients_text}
          </Text>
          <Text style={styles.titleText}>Informations nutritionnelles</Text>

        
          <Image
                      style={styles.imageNutri}
            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+item.item.nutriscore_grade+'.png'}}
            
            />
          
          <Text style={styles.titleText}>Repères nutritionnels pour 100 g : </Text>
          <Text
              style={styles.defaultText}>
                
               Energies : { item.item.nutriments.energy_100g} KJ
               </Text>

               <Text
              style={styles.defaultText}>
                
               Proteines:  { item.item.nutriments.proteins_100g}g
               
               </Text>
             
               <Text
              style={styles.defaultText}>
                
                sucres : { item.item.nutriments.sugars_100g}g
               
               </Text>
               <Text
              style={styles.defaultText}>
                
                Fibres : { item.item.nutriments.fiber_100g}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Lipides : { item.item.nutriments.fat_100g}g
               
               </Text> 

               <Text
              style={styles.defaultText}>
                
                Glucides : { item.item.nutriments.sugars_100g}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Sel: { item.item.nutriments.salt_100g}g
               
               </Text> 
                <Text
              style={styles.defaultText}>
                
               Additifs : { item.item.additives_old_tags}g
               
               </Text>
                <Text
              style={styles.defaultText}>
                
              La liste des allergènes:  { item.item.allergens}g
               
               </Text>
               
               
               
                <Text style={styles.titleText}>Impact environnemental "Eco-score " :</Text>
               <Image
                      style={styles.imageNutri}
                   source={{uri: 'https://static.openfoodfacts.org/images/attributes/ecoscore-'+item.item.ecoscore_grade+'.png'}
                  }
            
            />
               <Text style={styles.titleText}>Groupe NOVA:</Text>
               
           <SvgUri
                      style={styles.imageNova}
            source={{uri: 'https://static.openfoodfacts.org/images/attributes/nova-group-'+item.item.nova_group+'.svg'}}
            
            />
     
          
          

          


      </ScrollView>
  );
  
}
 
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
export default fiche;


