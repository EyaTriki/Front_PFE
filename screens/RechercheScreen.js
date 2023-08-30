import { StatusBar } from '@react-native-community/status-bar';
import { StyleSheet, Text, View, FlatList , TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import fiche from './fiche';

 function RechercheScreen({navigation ,route}) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms='+query+'&search_simple=1&action=process&json=1');
    const json = await res.json();
    setData(json.products);
    console.log(data.length)

  };
  

  const filterNames = (product) => {
    console.log(products.length);
      let search = query.toLowerCase().replace(/ /g,"_");
      if(product_name.startsWith(search, 3)){
        return formatNames(product);
      }else{ 
        products.splice(products.indexOf(product), 1);
        return null;
      }
  }

 

  const updateQuery = (input) => {
 setProducts(data.slice());
    setQuery(input);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>                   Rechercher</Text>
      <SearchBar 
    
          onChangeText={updateQuery}
          value={query}   
          placeholder="Rechercher..."
      />
      <FlatList data={data} 
        extraData = {query} 
      renderItem={(item)=>{ 
        return ( 

<TouchableOpacity onPress={() => navigation.navigate('fich', {item}) }>
          <Text style={styles.flatList}>{item.item.product_name}</Text> 
          </TouchableOpacity>
    )}}
keyExtractor={item => item._id}

/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 45
  },
  heading:{
      marginTop: 50,
      marginBottom:10,
      marginLeft: 15,
      fontSize: 25
  },
  flatList:{
      paddingLeft: 15, 
      marginTop:15, 
      paddingBottom:15,
      fontSize: 20,
      borderBottomColor: '#26a69a',
      borderBottomWidth:1
  }
});
export default RechercheScreen;