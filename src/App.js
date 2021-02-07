import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showNewTask, setNewTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: `Doctor's Appointment`,
      day: "August 18, 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Prepare Food - Lunch",
      day: "January 24, 2020",
      reminder: true,
    },
    {
      id: 3,
      text: "Birthday Preparation",
      day: "March 13, 2020",
      reminder: false,
    },
  ]);
  // const api_tasks = "http://localhost:5000/tasks";

  const deleteTask = (id) => {
    // console.log("delete", id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const urgentReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const showTaskForm = () => {
    setNewTask(!showNewTask);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        isShown={showNewTask}
        toggleShowTask={showTaskForm}
      />
      {showNewTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={urgentReminder} />
      ) : (
        <p>No Task to show :( </p>
      )}
    </div>
  );
};

export default App;
