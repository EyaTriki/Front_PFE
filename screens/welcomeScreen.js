import React from 'react';
import {
  Text,
  View, StyleSheet,Image,ScrollView
} from 'react-native';
 
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
 
function welcomeScreen ({navigation})  {
  return <ScrollableTabView
    style={{ marginTop: 20 }}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
  <ScrollView tabLabel='Nutri-score'>
    
         <Text  style={styles.question}>   Comment lire le Nutri-score ?</Text>
          <Image
          style={styles.NutriscoreImg}
          source={require('../assets/nutri.jpg')}
        />
        
          <Text style={styles.A}> A . Absence de sucres,de sels et de lipides .</Text>
          <Text style={styles.B}> B . Pas ou peu de sucres , de sel et de lipides .  </Text>
          <Text style={styles.C}> C . Un peu de sucre et ou de sel et ou de lipides .</Text>
          <Text style={styles.D}> D . Sucre et ou sel et ou lipide en qualité significatives .</Text>
          <Text style={styles.E} > E .Tout pareil que D , mais juste un peu plus .</Text>
         
   
      </ScrollView>
      <ScrollView tabLabel='Eco-score'>
    <Text  style={styles.question}>Comment lire l'Eco-score ?</Text>
    <Text></Text>
      <Text></Text>
          <Image
          style={styles.eco}
          source={require('../assets/ecoscore.png')}
        />
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 20, marginLeft:20, color:'#696969'}}>L'Eco-score est un indicateur représentant l'impact environnemental des produits alimentaires. Il classe les produits en 5 catégories (A, B, C, D, E), de l'impact le plus faible, à l'impact le plus élevé.</Text>
        </ScrollView>
        <ScrollView tabLabel='Nova Score'>
    <Text  style={styles.question}>Comment lire le Nova Score ?</Text>
    <Image
          style={styles.NOVAImag}
          source={require('../assets/nova.jpg')}
          />
          <Text>   </Text>
          <Text style={styles.A}> 1. Aliments frais ou minimalements transfomés. </Text>
          <Text style={styles.C}> 2. Ingrédients culinaires transformés.</Text>
          <Text style={styles.D}> 3. Aliments transformés. </Text>
          <Text style={styles.E} > 4. Aliments Ultra-transformés. </Text>
          </ScrollView>
    
  </ScrollableTabView>;
}
const styles = StyleSheet.create({
 
      
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
          },
          eco: {
        marginTop:20,
marginLeft:50,
        height:100,
        width: 330,
        
      },
 
      NutriscoreImg: {
        marginTop:-20,
marginLeft:70,
        height:280,
        width: 250,
        
      },
      listItem: {
   
        flex:0.5,
        backgroundColor: '#f5deb3',
        marginBottom: 10,
        borderRadius: 4,
        
    },
      
      NOVAImag: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 0,

        height: 150,
        width: 370,
        
      },
      
 
      A: {
        
        fontSize: 20,
        color: 'seagreen',
 
       margin: 10
      },
      B: {
        fontSize: 20,
        color: 'yellowgreen',
 
       margin: 10
      },
      C: {
        fontSize: 20,
        color: 'gold',
 
       margin: 10
      },
      D: {
        fontSize: 20,
        color: 'darkorange',
 
       margin: 10
      },
      E: {
        fontSize: 20,
        color: 'orangered',
 
       margin: 10,
       
      },
 
      question: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 20,
        fontFamily: "Cochin",
 justifyContent: 'center',
  fontFamily: 'Kufam-SemiBoldItalic',
   
    marginTop: 10,
    color: '#696969',
      }
 
    });
 
export default  welcomeScreen;