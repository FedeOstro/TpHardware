import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';

const Scan = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const teamMembers = "Integrantes: Federico Ostrovsky, Alex Droblas y Santiago Cañete"; 

  const handleBarCodeScanned = ({ data }) => {
    setScannedData(data);
    setIsScanning(false);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <QRCode
        value={teamMembers}
        size={200}
        style={styles.qrCode}
      />
      
      <Button title="Escanear otro QR" onPress={() => setIsScanning(true)} />
      <Modal
        transparent={true}
        visible={isScanning}
        animationType="slide"
        onRequestClose={() => setIsScanning(false)}
      >
        <View style={styles.modalContainer}>
          <RNCamera
            onBarCodeRead={handleBarCodeScanned} // Cambiado a onBarCodeRead
            style={styles.camera}
            captureAudio={false} // Desactiva la captura de audio
          >
            <Button title="Cerrar" onPress={() => setIsScanning(false)} />
          </RNCamera>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Datos escaneados: {scannedData}</Text>
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
  qrCode: {
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Scan;
