import { StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.status}>
        {todo.completed ? "Completed" : "Not completed"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  status: {
    color: "gray",
  },
});