import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
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
      <View style={styles.grayBar}>
        <Text style={styles.arrowText}>{'<'}</Text>
        <Text style={styles.grayBarText}>One Way Pass - Pass will be activated at the time of purchase and will expire within 3 hours</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Logo.jpg')} style={styles.logo} />
      </View>
      {/* <Text style={styles.scanText}>Scan this code to ride</Text> */}
      <View style={styles.qrCodeContainer}>
        <QRCode value={getHexTimestamp()} size={200} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>{currentDateTime.format('dddd').toUpperCase()} {currentDateTime.format('DD')}</Text>
        <Text style={styles.timeText}>CURRENT TIME</Text>
        <Text style={styles.timeText}>{currentDateTime.format('LTS')}</Text>
        <Text style={styles.expiresText}>Expires {currentDateTime.format('M/D/YYYY')}</Text>
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
  logoContainer: {
    marginBottom: 10,
    width: "60%",
  },
  logo: {
    width: "100%",
    resizeMode: 'contain',
  },
  scanText: {
    fontFamily: 'monospace',
    fontSize: 16,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(178, 201, 140)',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  expiresText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  expiresTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  grayBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(60,68,76)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontFamily: 'monospace',
    color: 'rgb(246, 251, 252)',
    paddingRight: 10,
  },
  grayBarText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'rgb(246, 251, 252)',
    flex: 1,
    textAlign: 'left',
  },
});

export default App;