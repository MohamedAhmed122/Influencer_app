import React, { Component, useState } from 'react';
import { View, StyleSheet,LogBox } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import AppButton from '../../Common/AppButton';
import {lightGray} from '../../config/colors';
 
const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];
 



export default function MultiSelectInput({selectedItems, setSelectedItems}) {
  LogBox.ignoreAllLogs(true);
    return (
        <View style={styles.container}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={setSelectedItems}
          selectedItems={selectedItems}
          selectText="Category "
          searchInputPlaceholderText="Search Category..."
          onChangeInput={setSelectedItems}
          fontSize={17}
          itemFontSize={17}
          tagRemoveIconColor="#CCC"
          onSelectedItemObjectsChange={setSelectedItems}
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="green"
          submitButtonText="Submit"
        />
       
      </View>
    )
}




const styles = StyleSheet.create({
  container:{
    marginTop:10,
    width:'95%',
    marginLeft:'2.5%',
    marginBottom: 20


  }
 
})
