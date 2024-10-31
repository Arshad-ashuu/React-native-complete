import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = () => {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: 'green', // Set the active color to green
        tabBarInactiveTintColor: 'gray', // Set the inactive color to gray
        tabBarStyle: {
          borderRadius: 30, // Round all corners
          backgroundColor: 'white', // Background color for the tab bar
          position: 'absolute', // Position the tab bar above the content
          bottom: 12, // Position it above the bottom edge of the screen
          left: 35, // Add some left padding
          right: 35, // Add some right padding
          height: 60, // Height of the tab bar
          elevation: 5, // For Android shadow effect
          shadowColor: '#000', // Shadow color for iOS
          shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
          shadowOpacity: 0.3, // Shadow opacity for iOS
          shadowRadius: 4, // Shadow radius for iOS
          padding:2
        },
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="like" 
        options={{
          tabBarShowLabel: false,
          title: 'Likes',
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
};

export default TabLayout;
