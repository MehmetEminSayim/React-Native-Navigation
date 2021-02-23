import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, FlatList } from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import {createDrawerNavigator } from "react-navigation-drawer"

import Route from "./src/Route"

export default class App extends React.Component{
  
  render(){
    return <Route />
  }
}




