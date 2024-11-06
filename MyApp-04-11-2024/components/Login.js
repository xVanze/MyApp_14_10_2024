import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon for eye visibility
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation(); // Use navigation hook

  // Check if either input is empty
  const isButtonDisabled = phoneNumber === '' || password === '';

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Handle login logic
  const handleLogin = () => {
    // Simple hardcoded login check (for testing purposes)
    if (phoneNumber === '343536238' && password === '123456789') {
      // If login successful, navigate to MainStore screen
      navigation.replace('MainStore');
    } else {
      // If login fails, show alert
      alert('Số điện thoại hoặc mật khẩu không đúng!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Text style={styles.logoText}>TYCA</Text>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Vui lòng đăng nhập để tiếp tục sử dụng dịch vụ</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Số điện thoại <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.phoneInputContainer}>
          {/* Country Code and Flag Icon */}
          <Text style={styles.countryCode}>(+84)</Text>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png',
            }}
            style={styles.flagIcon}
          />
          {/* Vertical Separator Line */}
          <View style={styles.separatorLine} />
          {/* Phone Number TextInput */}
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
        </View>

        {/* Password Input with Eye Icon */}
        <Text style={styles.label}>
          Mật khẩu <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Nhập mật khẩu của bạn"
            secureTextEntry={!isPasswordVisible} // Toggle secure text entry
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginButton, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
        onPress={handleLogin} // Use onPress to call handleLogin
      >
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00A2E3',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  countryCode: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
  },
  flagIcon: {
    width: 18,
    height: 18,
    borderRadius: 10,
    marginRight: 5,
  },
  separatorLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 14,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#00A2E3',
    fontSize: 15,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#00A2E3',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Login;
