import CounterButton from "@/components/CounterButton";
import Greeting from "@/components/Greeting";
import ProfileCard from "@/components/ProfileCard";
import { getTodos } from "@/services/todoApi";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <>
          <Greeting name="Aliia" role="student" />

          <View style={styles.row}>
            <CounterButton title="Click" initialValue={2} step={5} />
            <ProfileCard name="Aliia" role="Student" course={4} />
          </View>

          <Text style={styles.title}>My Todos:</Text>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.todo}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10,
  },

  todo: {
    padding: 10,
    backgroundColor: "#eee",
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 6,
  },
});