import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Ignorer</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Suivant</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Terminé</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require('../assets/nutri-score.png')} />,
            title: 'Equilibrer vos aliments',
            subtitle: 'Une nouvelle façons pour une vie plus saine',
          },
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require('../assets/images.jpg')} />,
            title: '                                                                                                                                        Connaitre tout à propos vos aliments',
            subtitle: 'Choisir les meilleurs aliments pour votre santé',
          },
          {
            backgroundColor: '#FFFFFF',
            image: <Image source={require('../assets/3rdimg.png')} />,
            title: 'Scanner pour avoir une bonne santé ',
            subtitle: "Votre santé est notre priorité",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
