import React, { useCallback } from "react";
import { Alert,Text, Image,Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://fr.openfoodfacts.org/comment-ajouter-un-produit#:~:text=Sur%20le%20site%2C%20dans%20la,bouton%20%22Envoyer%20une%20image%22.";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {

    // Checking if the link is supported for links with custom URL scheme.
    
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title= "Ajouter" onPress={handlePress}  />;
};

const AddPostScreen = () => {
  return (
    <View style={styles.container}>
       <Image
          style={styles.NutriscoreImg}
                          source={require('../assets/opp.jpg')}
 /> 
      <Text style={styles.explication }>Ouups ! Si le produit scanné n'existe pas , Vous pouvez y ajouter en cliquant ci-dessous </Text>
      <OpenURLButton  url={supportedURL}  > Ajouter </OpenURLButton>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
      justifyContent: "center",
       alignItems: "center",
      backgroundColor: '#fff',
      },

      OpenURLButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        fontSize:50,
        backgroundColor: 'black',
      },


      NutriscoreImg: {
     
        height: 300,
        width: 300,
        
      },
  explication :{ 
    fontSize: 20,
    margin: 20,
   
     alignItems: "center"

  }
});

export default AddPostScreen;