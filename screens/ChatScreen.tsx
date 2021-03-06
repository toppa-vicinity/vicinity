import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { Message } from "../components/ChatRow";
import { MessageBox } from "../components/Message";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { meUser, mockData, msgs } from "../mock/chat";

export function ChatScreen() {
  const [text, setText] = useState("");
  const chatRef = useRef<FlatList<Message>>(null);
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {}, [msgs]);
  const scheme = useColorScheme();

  let id = 10000;
  const sendMsg = (newText: string) => {
    if (newText.length < 1) {
      return;
    }
    const newMsg = {
      id: `${Math.floor(Math.random() * 1000)}`,
      user: meUser,
      content: newText,
      createdAt: new Date(),
    };
    msgs.push(newMsg);
    mockData[0] = { ...mockData[0], recentMsg: newMsg };
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles(scheme).container}
      keyboardVerticalOffset={60}
    >
      <FlatList
        ref={chatRef}
        onContentSizeChange={() =>
          chatRef.current?.scrollToEnd({ animated: false })
        }
        style={styles(scheme).list}
        onScroll={Keyboard.dismiss}
        data={msgs}
        renderItem={({ item }) => <MessageBox {...item} />}
      />
      <View style={styles(scheme).inner}>
        <TextInput
          style={styles(scheme).textBox}
          // multiline
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          onFocus={() => {
            // chatRef.current?.scrollToEnd();
          }}
          ref={inputRef}
          returnKeyType="go"
          onSubmitEditing={(input) => {
            sendMsg(input.nativeEvent.text), inputRef.current?.clear();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: Colors[scheme].background,
    },
    inner: {
      flex: 1,
    },
    textBox: {
      // position: "absolute",
      // bottom: 20,
      width: "90%",
      height: 40,
      margin: 10,
      paddingLeft: 20,
      paddingRight: 10,
      backgroundColor: "lightgrey",
      borderRadius: 50,
      fontSize: 18,
    },
    list: { backgroundColor: Colors[scheme].background, height: "92%" },
  });
