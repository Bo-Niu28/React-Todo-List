import "./App.scss";
import "./components/Header";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Nov 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Nov 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Nov 6th at 1:30pm",
      reminder: true,
    },
  ]);

  //ADD Task
  const addTask = () => {
    setTasks({ ...tasks });
  };

  //Delete Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Title" />
      <AddTask />
      {tasks.length === 0 ? (
        "No Task to Show"
      ) : (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      )}
    </div>
  );
}

export default App;
