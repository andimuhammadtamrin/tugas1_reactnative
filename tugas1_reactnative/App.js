/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {Platform,View,Text,StatusBar,} from 'react-native';
import MenuUtama from "./Component/MenuUtama";
import MenuBerita from "./Component/MenuBerita";
import MenuHits from "./Component/MenuHits";
import MenuGame from "./Component/MenuGame";

const Header = () =>{
  return(
    <View>
      <StatusBar backgroundColor="green"/>
      <Text>
        Halaman Header
      </Text>
    </View>
    );
};

const Footer = ()=>{
  var niomic = "@Niomic";
  return(
    <View>
      <Text>Footer {niomic}</Text>
    </View>
    );
};



export default class App extends Component<Props>{
  render(){
    return(
        <View>
          <Header />
          <MenuUtama />
          <MenuGame/>
          <MenuBerita/>
          <MenuHits/>
          <Footer />
        </View>
      );
  }
}
