import { FlatList } from "react-native";
import Animated from "react-native-reanimated";
import { TaskType } from "@/types/TaskType";
import TaskItem  from "./TaskItem";

export default function TaskList({currentList, deleteTask, handleDone}: {
  currentList: TaskType[],
  deleteTask: (id: number) => void,
  handleDone: (id: number) => void,
}) {
  return (
    <Animated.FlatList 
      data={[...currentList].reverse()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          deleteTask={deleteTask}
          handleDone={handleDone}
          />
      )}
      keyboardDismissMode={"on-drag"}
    />
  );
}