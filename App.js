import React, {useState} from 'react';
import {View, Text, NativeModules, TouchableOpacity} from 'react-native';

const OpenActivity = NativeModules.OpenActivity;

const App = () => {
  const [result, setResult] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'green'}}
        onPress={() => OpenActivity.open()}>
        <Text>Open Scanner</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, marginTop: 10, backgroundColor: 'blue'}}
        onPress={async () =>
          console.log(
            'result->',
            setResult(
              'Scan result =   ' + (await OpenActivity.getScanResult()),
            ),
          )
        }>
        <Text>Get Scan result</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
};

export default App;
