import { Todo } from "../types/todo";
import { API_URL } from "../utils/config";

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch("http://10.0.2.2:5000/todos");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export async function createTodo(title: string): Promise<Todo> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
}

export async function updateTodo(id: number, completed: boolean) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
}

export async function deleteTodo(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

