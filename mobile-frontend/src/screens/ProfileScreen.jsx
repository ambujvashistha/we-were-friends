import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <View style={styles.profileInfoSection}>
        <View>
          <Image
            style={{ height: 80, width: 80, borderRadius: 50 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
            }}
          />
        </View>

        <View>
          <View>
            <Text>Username</Text>
          </View>

          <View>
            <Text>Followers</Text>
            <Text>Following</Text>
            <Text>Memos</Text>
          </View>
        </View>
      </View>

      <Text>Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  profileInfoSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
  },
});
