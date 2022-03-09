import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

export default function ChatInfo() {
  return <View style={(styles.container, styles.containerDark)}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
