import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <RectButton
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={signOut}
    >
      <Text
        style={{
          fontFamily: 'RobotoSlab-Medium',
          fontSize: 20,
          color: '#ff9000',
        }}
      >
        Dashboard
      </Text>
    </RectButton>
  );
};

export default Dashboard;
