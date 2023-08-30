import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import welcomeScreen from '../screens/welcomeScreen';
import ScanScreen from '../screens/ScanScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Result from '../screens/Result';
import HistoScreen from '../screens/HistoScreen';
import RechercheScreen from '../screens/RechercheScreen';
import RecoScreen from '../screens/RecoScreen';
import HistoItem from '../screens/HistoItem';
import fiche from '../screens/fiche';
import fav from '../screens/fav';
import reco2 from '../screens/reco2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (


  <Stack.Navigator>

<Stack.Screen
      name="Scanner "
      component={ScanScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
       
      }}
    />

  

<Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}
    />
    
    <Stack.Screen name="Result" component={Result}   options={{
        title: 'Fiche produit',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}/>
      <Stack.Screen name="Reco" component={RecoScreen}   options={{
        title: 'Produit Recommandé',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}/>
       
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Favoris" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
    <Stack.Screen name="favv" component={fav}   options={{
        title: '',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}/>
  </Stack.Navigator>
);

const welcomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="welcome" component={welcomeScreen} options={{
        title: '  Eat Healthy',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }} />
    
  </Stack.Navigator>
);
const HistoriqueStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Historique" component={HistoScreen} options={{
        title: 'Historique',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}/>
        <Stack.Screen name="HistoI" component={HistoItem}   options={{
        title: '',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }}/>
    
  </Stack.Navigator>
);
const RechercheStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Recherche" component={RechercheScreen}   options={{
        title: 'Eat Healthy',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>

        ),
      }} />
       <Stack.Screen name="fich" component={fiche}   options={{
        title: '',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
      ),
      }}/>
      <Stack.Screen name="re2" component={reco2}   options={{
        title: '',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
      ),
      }}/>
      
  </Stack.Navigator>
);


const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Paramètres',
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="welcome"
        component={welcomeStack}
        options={({route}) => ({
          tabBarLabel: 'Accueil',
          // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Scan',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="barcode-scan"
              color={color}
              size={size}
            />
          ),
        })}
      />
         <Tab.Screen
        name="Historique"
        component={HistoriqueStack}
        options={({route}) => ({
          tabBarLabel: 'Historique',
          // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={size}
            />
          ),
        })}
      />
         <Tab.Screen
        name="Recherche"
        component={RechercheStack}
        options={({route}) => ({
          tabBarLabel: 'Recherche',
          // tabBarVisible: route.state && route.state.index === 0,
         
         tabBarIcon: ({color, size}) => (
            <Ionicons
              name="search"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarLabel: 'Favoris',
         
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="favorite"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
         
       tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
