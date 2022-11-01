import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { DATA } from './Data';
import deleteIcon from './assets/deleteIcon.png'
import binIcon from './assets/binIcon.png'

const Item = ({ title, amount }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.itemAdjust}>
      <TextInput style={styles.amount}>{amount}</TextInput>
      <Image
        source={deleteIcon}
        style={styles.icon} />
    </View>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} amount={item.amount}></Item>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.head}>Bryllup - hvad skal med?</Text>
      <TextInput
        style={styles.name}
        placeholder="Navn" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
      <View style={styles.summary}>
        <Text style={styles.total}>Samlet antal</Text>
        <View style={styles.itemAdjust}>
          <Text style={styles.total}>100</Text>
          <Image
            source={binIcon}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939',
    alignItems: 'center',
  },
  head: {
    color: "#fff",
    flex: 1,
    marginTop: 100,
    alignItems: "flex-end"

  },
  name: {
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    color: "#c8c8c8",
    marginBottom: 100,
    borderRadius: 5,
  },
  icon: {
    width: 15,
    height: 15
  },
  item: {
    backgroundColor: '#fff',
    width: 300,
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemAdjust: {
    flexDirection: "row",
    alignItems: "center",
  },
  summary: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#fff',
    marginBottom: 100,
    height: 50,
    borderRadius: 5,
    alignItems: "center"
  },
  total: {
    padding: 5,
    color: '#619abe',
    fontWeight: "bold"
  },
  amount: {
    marginLeft: "auto",
    color: "#c8c8c8"
  },
  title: {
    color: '#619abe'
  },

});
