import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './functionalProfile'
import Feed from './functionalFeed';
import blogs from './blogs';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Blogs"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      
      <Tab.Screen
        name="Blogs"
        component={blogs}
        options={{
          tabBarLabel: 'Blogs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={size} />
          ),
        
        }}
      />
      
    
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        
        options ={({ navigation }) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
                    })
            }

      />
    </Tab.Navigator>
  );
}