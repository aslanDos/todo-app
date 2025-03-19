import { 
    KeyboardAvoidingView,
    StyleSheet, 
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState, useEffect } from "react";
  
  import Search from "@/components/SearchBar";
  import Header from "@/components/Header";
  import NewTask from "@/components/NewTask";
  import TaskList from "@/components/TaskList";
  
  import { TaskType } from "@/types/TaskType";
  
  export default function Home() {
  
    const defaultTasks = [
      {
        id: 1,
        title: "Read a book",
        isDone: false,
      },
      {
        id: 2,
        title: "Go to the gym",
        isDone: false,
      },
      {
        id: 3,
        title: "Buy groceries",
        isDone: false,
      },
      {
        id: 4,
        title: "Finish homework",
        isDone: false,
      },
      {
        id: 5,
        title: "Call mom",
        isDone: false,
      },
      {
        id: 6,
        title: "Go for a walk",
        isDone: false,
      },
    ]
  
    const [tasks, setTasks] = useState<TaskType[]>(defaultTasks)
    const [oldTaks, setOldTasks] = useState<TaskType[]>(defaultTasks)
    const [taskText, setTaskText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
  
    const onSearch = (query: string) => {
      if(query === "") {
        setTasks(oldTaks)
      } else {
        const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()))
        setTasks(filteredTasks)
      }
    }
  
    useEffect(() => {
      onSearch(searchQuery)
    }, [searchQuery])
  
    const addTask = () => {
      const newTask = {
        id: Math.random(),
        title: taskText,
        isDone: false,
      }
      if(taskText !== ""){
        setTasks([...tasks, newTask])
        setOldTasks([...tasks, newTask])
        setTaskText("")
      } else {
        alert("Please enter a task")
      }
    }
  
    const deleteTask = (id: number) => {
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
      setOldTasks(newTasks)
    }
  
    const handleDone = (id: number) => {
      const newTask = tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task)
      setTasks(newTask)
    }
  
    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
          <Header />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <TaskList currentList={tasks} deleteTask={deleteTask} handleDone={handleDone}/>
          <KeyboardAvoidingView>
            <NewTask taskText={taskText} addTask={addTask} setTaskText={setTaskText}/>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 20,
    }
  })