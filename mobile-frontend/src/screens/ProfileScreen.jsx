import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          }}
        />

        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.stat}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.stat}>
            <Text style={styles.statNumber}>834</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.stat}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.bio}>
          React Native enthusiast 🚀 | Building cool apps
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Placeholder for posts grid */}
      <View style={styles.postsGrid}>
        <Text>Grid of posts will go here ⬇️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
    fontSize: 18,
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },
  bioSection: {
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bio: {
    fontSize: 14,
    color: "gray",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
  postsGrid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
