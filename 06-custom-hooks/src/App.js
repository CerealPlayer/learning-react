import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  

  const {isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = tasks => {
      const loadedTasks = [];
      for (const taskKey in tasks) {
        loadedTasks.push({id: taskKey, text: tasks[taskKey].text});
      }
  
      setTasks(loadedTasks);
    };
    fetchTasks({
      url: "https://react-learning-b2912-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
