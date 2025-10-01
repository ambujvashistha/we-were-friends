import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const askPermission = async () => {
      try {
        await requestPermission();
      } catch (err) {
        console.log(err);
      }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
