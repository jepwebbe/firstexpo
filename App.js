import { StatusBar } from 'expo-status-bar';
import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Pressable } from 'react-native';
import { DATA } from './Data';
import deleteIcon from './assets/deleteIcon.png'
import binIcon from './assets/binIcon.png'

// Component der opsætter strukturen i listen
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
  // funktion der renderer listens indhold i komponenten
  const renderItem = ({ item }) => (
    <Item title={item.title} amount={item.amount}></Item>
  );
  // Funktion der skal tilføje et element til Data.js
  const addToList = () => {

  }
  // Håndtering af kamera
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // Skift kamera mellem for og bag
  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Bryllup - hvad skal med?</Text>
      <View style={styles.input}>
        <View style={styles.inputFields}>
          <TextInput
            style={styles.name}
            placeholder="Navn" />
          <TextInput
            style={styles.number}
            placeholder="Antal" />
        </View>
        <Pressable onPress={addToList}><Text style={styles.plus}>+</Text></Pressable>
      </View>
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
  input: {
    width: 300,
    height: 50,
    marginBottom: 30,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputFields: {
    flexDirection: "row",
    flex: 4,
  },
  name: {
    backgroundColor: "#fff",
    color: "#c8c8c8",
    flex: 4
  },
  number: {
    backgroundColor: "#fff",
    color: "#c8c8c8",
    flex: 1,
  },
  plus: {
    backgroundColor: "#54ac80",
    flex: 1,
    textAlign: "center",
    paddingTop: "auto",
    color: "#fff",
    fontSize: 33,
    marginLeft: 5,
    borderRadius: 5

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
    color: "#c8c8c8",
    paddingRight: 10,
  },
  title: {
    color: '#619abe'
  },

});
