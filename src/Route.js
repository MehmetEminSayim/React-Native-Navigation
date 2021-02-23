import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, FlatList } from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import {createDrawerNavigator } from "react-navigation-drawer"

import App from "./screen/Home"
import Detail from "./screen/Detail"
import Drawer from "./screen/Drawer"




const HomeStack = createStackNavigator({
    Home:{screen:App},
    Detail : { screen : Detail }
  })
  
  const DetailStack = createStackNavigator({
    Detail : { screen : Detail }
  })
  
  const DrawerStack = createStackNavigator({
    Drawer : {screen : Drawer}
  })
  
  const AppBottomNavigator = createBottomTabNavigator({
    Home: {
        screen : HomeStack,
        navigationOptions : {
            title : 'Anasayfa',
        }
    }, 
    Detail: {
        screen : DetailStack,
        navigationOptions : {
            title : 'Detay'
        }
    }
  },{
      tabBarOptions : {
          activeTintColor: 'blue',
          activeBackgroundColor: 'lightblue'
      }
  });
  
  const AppNavigator = createDrawerNavigator({
    Home : AppBottomNavigator
  },{
    contentComponent:Drawer
  });
  
  export default createAppContainer(AppNavigator)