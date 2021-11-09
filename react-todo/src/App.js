import "./App.scss";
import "./components/Header";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  //states
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  //ADD Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = uuidv4();
    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  };

  //Delete Function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
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

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd}
      />
      {showAdd && <AddTask onAdd={addTask} />}
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
