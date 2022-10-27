import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Alert,
  Platform 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'
import * as ImageManipulator from "expo-image-manipulator";
import reactLogo from './assets/reactIcon.png'

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  // obtiene una imagen del cliente si este nos da los permisos
  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Los permisos de acceso son requeridos');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) return;
    setSelectedImage({localUri: pickerResult.uri});
  }

  // muestra el cuadro para compartir la imagen por otras redes
  const openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      // to do upload in web
      alert('Compartir no esta disponible en tu plataforma');
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Selecciona una imagen</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={openImagePickerAsync} >
        <Image
          source={{uri: selectedImage ? selectedImage.localUri : "https://picsum.photos/200/200"}}
          style={styles.image}
        />
      </TouchableOpacity>

      {
        selectedImage
        ? 
        <TouchableOpacity
          onPress={openShareDialogAsync}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Comparte esta imagen</Text>
        </TouchableOpacity>
        : <View />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10
  },
  image: {
    borderRadius: 100,
    height: 200,
    width: 200
  },
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20
  }
});
