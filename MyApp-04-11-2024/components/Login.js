import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (phone === '343536238' && password === '123456789') {
      // Nếu đăng nhập thành công, điều hướng đến MainStore
      navigation.replace('MainStore');
    } else {
      alert('Số điện thoại hoặc mật khẩu không đúng!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text>Đăng nhập</Text>
      <TextInput
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={setPhone}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
