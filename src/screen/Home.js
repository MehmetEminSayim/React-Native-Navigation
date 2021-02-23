import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, FlatList } from 'react-native'

export default class App extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Anasayfa',
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerLeft: () => (
          <Button onPress = { ()=>{ navigation.openDrawer() } } title="Menu" ></Button>
        ),
      };
    };

  
    constructor (){
         super()
    }

    componentDidMount(){
      this.props.navigation.addListener('willFocus', ()=>{
        //alert('İndex,e geri geldin ')
      })

      this.props.navigation.addListener('willBlur', ()=>{
        //alert('İndexten gittin')
      })
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <Text style = {{marginLeft:10}}>Home Componenti</Text>
            <Text style = {{marginLeft:10}}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
            </Text>
          </View>
        </View>
        
      )
    }
  }