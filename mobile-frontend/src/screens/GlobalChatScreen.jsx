import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function GlobalChatScreen() {
  const [message, setMessage] = useState("");
  return (
    <View>
      <View></View>
      <View>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={() => {}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: 80,
    height: 30,
    borderWidth: 2,
    borderColor: "black",
  },
});
