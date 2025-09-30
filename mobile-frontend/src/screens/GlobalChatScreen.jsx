import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function GlobalChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello everyone!" },
    { id: "2", text: "Hey, how’s it going?" },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { id: Date.now().toString(), text: message }]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 10 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageBubble: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
