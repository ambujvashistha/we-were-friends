import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Camera() {
  const [facing, setFacing] = useState < CameraType > "back";
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const askPermission = async () => {
      try {
        await requestPermission;
      } catch {}
    };

    askPermission();
  }, []);
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
}
