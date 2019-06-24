import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from './Forecast';
import fetchForecast from './utils/open_weather_map';

const WeatherProject = () => {
  const [zip, setZip] = useState<string>('');
  const [forecast, setForecast] = useState(null);

  const handleChangText = useCallback(async text=>{
    const result = await fetchForecast(text);

    setZip(text);
    setForecast(result);

  }, [zip, forecast]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        You input {zip}
      </Text>

      {forecast && (
        <Forecast
          main={forecast.main}
          desc={forecast.desc}
          temp={forecast.temp}
        />
      )}

      <TextInput
        style={styles.input}
        onChangeText={handleChangText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center'
  }
});

export default WeatherProject;
