import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Módulo 09
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
        }}
      >
        Iniciando aplicativo Mobile
      </Text>
    </View>
  );
};

export default App;
