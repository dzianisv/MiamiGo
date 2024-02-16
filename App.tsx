import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';

const App: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<moment.Moment>(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getHexTimestamp = (): string => {
    return Math.floor(currentDateTime.valueOf() / 1000).toString(16);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrCodeContainer}>
        <QRCode value={getHexTimestamp()} size={200} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>{currentDateTime.format('dddd DD')}</Text>
        <Text style={styles.timeText}>{currentDateTime.format('LTS')}</Text>
        <Text style={styles.expiresText}>Expires 2/15/2024</Text>
        <Text style={styles.expiresTimeText}>{moment('2024-02-15T13:53:20').format('LTS')}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  qrCodeContainer: {
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 24,
  },
  expiresText: {
    fontSize: 16,
    marginTop: 10,
  },
  expiresTimeText: {
    fontSize: 16,
  },
});

export default App;