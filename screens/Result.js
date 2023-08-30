import React ,{useEffect , useState } from 'react';
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
import {StyleSheet,FlatList, View, Text, TouchableOpacity,ScrollView ,SafeAreaView, Image,Alert} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import RecoScreen from './RecoScreen';
import AsyncStorage from '@react-native-community/async-storage';

const lang = 'fr';
const apiUrl = 'https://' + lang + '.openfoodfacts.org';






function Result({navigation, route}) {

  const {code,reco} = route.params;
  const [estado, setEstado] = useState(false);
  const [favoris,setFavoris]=useState([])
const afficher = async ()=>{
try{


 
      let sendBackend = await axios.post("http://192.168.43.91:5000/api/product/create",
       {"nom":code.product.product_name , "image": code.product.image_front_url , "score":code.product.nutriscore_grade , "code":code.product.code , "marque":code.product.brands , "quantite": code.product.quantity , "scorevaleur": code.product.nutriscore_score , "pays": code.product.countries , "categories": code.product.category ,  "ingredients":code.product.ingredients_text , "energies":code.product.nutriments.energy_100g ,"proteines":code.product.nutriments.proteins_100g , "sucre":code.product.nutriments.sugars_100g , "fibres":code.product.nutriments.fiber_100g , "lipides":code.product.nutriments.fat_100g ,"glucides":code.product.nutriments.glucose_100g ,"sels":code.product.nutriments.
       
       selenium_100g , "eco":code.product.ecoscore_grade , "nova":code.product.nova_group , "allergenes":code.product.allergens})
     if(sendBackend.data.message=="product already exists"){
      //  Alert.alert("error","exist")
     }

    
    
    } catch (error) {
        console.error(error);
        //return null;
    }
}
const AjoutFav = () => {
    setEstado(!estado);
  };
const _storeData = async (key) => {
  let arr=favoris
arr.push(key)
 console.log("arr.lengthsrtore",arr.length)

  try {
    await AsyncStorage.setItem(
      'favoris',
      JSON.stringify(arr)
    );
    _retrieveData()
  } catch (error) {
    // Error saving data
  }
};
const _removeFavoris = async (key) => {
 let arr= favoris.filter(item=>item.product_name != key.product_name)
 console.log("arr.length",arr.length)
  try {
    await AsyncStorage.setItem(
      'favoris',
      JSON.stringify(arr)
    );
    _retrieveData()
  } catch (error) {
    // Error saving data
  }
};
 const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('favoris');
    if (value !== null) {
      // We have data!!
      setFavoris(JSON.parse(value))
    }
  } catch (error) {
    // Error retrieving data
  }
};
useEffect(() => {
  _retrieveData()
afficher()

// fetchAPI()


// console.log( {"nom":code.product.product_name , "image": code.product.image_front_url , "score":code.product.nutriscore_grade , "code":code.product.code  })
}, [])
  
 
//console.log("result",code.product.categories.split(',')[4])

useEffect(()=>{console.log("favoris")
},[favoris])
//console.log("favoris.filter(item=>item.product_name == code.product.product_name)",favoris.filter(item=>item.product_name == code.product.product_name).length)
  
   if (code.product.nutriscore_score == 0 || code.product.nutriscore_score=="" ){
    rslt=" "
    {color ="#fff"}
}else if (1<=code.product.nutriscore_score<=25){
    rslt=" Mauvais"
    {color ="red"}
}else if(25 <  code.product.nutriscore_score<=50){
    rslt=" Médiocre"
    {color="orangered"}

}else if(50 <  code.product.nutriscore_score<=75){
    rslt=" Moyenne"
    {color="gold"}

}else if(75 <  code.product.nutriscore_score<=100){
    rslt=" Exellent"
   {color="green"}
}
  
  return (


          <ScrollView style={styles.scrollviewContainer}>

            <View style={styles.headerContainer}>

                          <Image
                                style={styles.imageProduct}
                                source= {{uri : code.product.image_front_url}}
                            />


              <View style={styles.headerDescription}>
           
                  <Text
                      style={styles.productNameText}>
                        {code.product.product_name}
                      </Text>
                      <TouchableOpacity onPress={() => favoris.filter(item=>item.product_name == code.product.product_name).length>0?_removeFavoris(code.product):_storeData(code.product)}>
        <Ionicons
        style={{marginLeft:20,marginTop:3,fontSize: 30}} 
          name={favoris.filter(item=>item.product_name == code.product.product_name).length>0 ? 'md-heart' : 'md-heart-outline'}
          size={20}
          color="#ff6347"
        />
      </TouchableOpacity>

                    


                  <Text style={styles.defaultText}>Quantité
                      : {code.product.quantity}</Text>
                     


                      <Text style={styles.defaultText}>Marque
                      :  {code.product.brands}</Text>
                      

                  <Text style={styles.descriptionText}>Code à barres : {code.product.code}</Text>
                 
               <Text style={styles.defaultText} >
                  <Octicons  name="primitive-dot" color= {color} style={{ fontSize: 20}} />{rslt}</Text>
                      
                      <Text style={styles.defaultText}>  {code.product.nutriscore_score} /100</Text>
                      
                      

                       <Text style={styles.defaultText}>
                      Pays de vente : {code.product.countries}</Text>
                      
              </View>
          </View>
          

          <Text style={styles.titleText}>Catégories</Text>

          <Text
              style={styles.defaultText}>{code.product.categories}
          </Text>

          


 
        

   






         <Text style={styles.titleText}>Ingrédients</Text>
         <Text
              style={styles.defaultText}>{code.product.ingredients_text}
          </Text>
          <Text style={styles.titleText}>Informations nutritionnelles</Text>

        
          <Image
                      style={styles.imageNutri}
            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+code.product.nutriscore_grade+'.png'}}
            
            />
          
          <Text style={styles.titleText}>Repères nutritionnels pour 100 g : </Text>
          <Text
              style={styles.defaultText}>
                
               Energies : { code.product.nutriments.energy_100g} KJ
               </Text>

               <Text
              style={styles.defaultText}>
                
               Proteines:  { code.product.nutriments.proteins_100g}g
               
               </Text>
             
              <Text
              style={styles.defaultText}>
                
               Additifs : { code.product.additives_old_tags}g
               
               </Text>

               <Text
              style={styles.defaultText}>
                
                sucres : { code.product.nutriments.sugars_100g}g
               
               </Text>
               <Text
              style={styles.defaultText}>
                
                Fibres : { code.product.nutriments.fiber_100g}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Lipides : { code.product.nutriments.fat_100g}g
               
               </Text> 

               <Text
              style={styles.defaultText}>
                
                Glucides : { code.product.nutriments.sugars_100g}g
               
               </Text>

                <Text
              style={styles.defaultText}>
                
                Sels: { code.product.nutriments.salt_100g}g
               
               </Text> 
                <Text
              style={styles.defaultText}>
                
               Additifs : { code.product.additives_old_tags}g
               
               </Text>
                <Text
              style={styles.defaultText}>
                
              La liste des allergènes:  { code.product.allergens_from_ingredients}g
               
               </Text>
               
               
               
                <Text style={styles.titleText}>Impact environnemental "Eco-score " :</Text>
               <Image
                      style={styles.imageNutri}
                   source={{uri: 'https://static.openfoodfacts.org/images/attributes/ecoscore-'+code.product.ecoscore_grade+'.png'}
                  }
            
            />
               <Text style={styles.titleText}>Groupe NOVA:</Text>
               
           <SvgUri
                      style={styles.imageNova}
            source={{uri: 'https://static.openfoodfacts.org/images/attributes/nova-group-'+code.product.nova_group+'.svg'}}
            
            />
            
                            
                           
                          



                      




               
               {/*  <Text
              style={styles.defaultText}>
                
                 : { code.product.nutriments.}g
               
               </Text>  <Text
              style={styles.defaultText}>
                
                 : { code.product.nutriments.}g
               
               </Text>  */}





         
         <Text style={styles.titleText}>A RECOMMANDER :</Text>
          <FlatList
data={reco}
   horizontal={true}
 /* numColumns={2}
 key={2} */
renderItem={(item)=>{
    return(
      
<TouchableOpacity onPress={() => navigation.navigate('Reco', {item}) }>

{/* <Image style={{}} source /> */}

<View style={styles.listItem}>
<Text style={{ fontSize: 12 ,marginLeft:6 ,fontWeight: 'bold', color:'#191970' }}>{item.item.product_name}</Text>

 <Image
                      style={styles.imagenutri}
            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+item.item.nutriscore_grade+'.png'}}
            
            />
<Image
                                style={styles.imageProductReco}
                                source= {{uri : item.item.image_front_url}}
                            />
                              


</View>
  
</TouchableOpacity>

)}}

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
export default Result;

{/* energy-kj_100g
energy-kcal_100g
proteins_100g
casein_100g
serum-proteins_100g
nucleotides_100g
carbohydrates_100g
sugars_100g
sucrose_100g
glucose_100g
fructose_100g
lactose_100g
maltose_100g
maltodextrins_100g
starch_100g
polyols_100g
fat_100g
saturated-fat_100g
butyric-acid_100g
caproic-acid_100g
caprylic-acid_100g
capric-acid_100g
lauric-acid_100g
myristic-acid_100g
palmitic-acid_100g
stearic-acid_100g
arachidic-acid_100g
behenic-acid_100g
lignoceric-acid_100g
cerotic-acid_100g
montanic-acid_100g
melissic-acid_100g
monounsaturated-fat_100g
polyunsaturated-fat_100g
omega-3-fat_100g
alpha-linolenic-acid_100g
eicosapentaenoic-acid_100g
docosahexaenoic-acid_100g
omega-6-fat_100g
linoleic-acid_100g
arachidonic-acid_100g
gamma-linolenic-acid_100g
dihomo-gamma-linolenic-acid_100g
omega-9-fat_100g
oleic-acid_100g
elaidic-acid_100g
gondoic-acid_100g
mead-acid_100g
erucic-acid_100g
nervonic-acid_100g
trans-fat_100g
cholesterol_100g
fiber_100g
sodium_100g
alcohol_100g : % vol of alcohol
vitamin-a_100g
vitamin-d_100g
vitamin-e_100g
vitamin-k_100g
vitamin-c_100g
vitamin-b1_100g
vitamin-b2_100g
vitamin-pp_100g
vitamin-b6_100g
vitamin-b9_100g
vitamin-b12_100g
biotin_100g: also known as Vitamine B8
pantothenic-acid_100g: also known as Vitamine B5
silica_100g
bicarbonate_100g
potassium_100g
chloride_100g
calcium_100g
phosphorus_100g
iron_100g
magnesium_100g
zinc_100g
copper_100g
manganese_100g
fluoride_100g
selenium_100g
chromium_100g
molybdenum_100g
iodine_100g
caffeine_100g
taurine_100g */}