import { FormEvent, useState } from 'react';
import MainTasks from './components/MainTasks';
import NewTask from './components/NewTask';

export interface Task {
  content: string,
  progress: string
}


function App() {
  const [tasks, setTasks] = useState([{
    content: 'Task 1',
    progress: 'in_progress'
  },
  {
    content: 'Task 2',
    progress: 'done'
  }
]);

  const handleSubmitTask = (event: FormEvent, taskMessage: Task) => {
    event.preventDefault();
    handleCreateNewTask(taskMessage)
  }


  const handleCreateNewTask = (task: Task) => {
    setTasks(prevState => {
      return [
           ...prevState,
           task
      ]
   })
  }
 
  return (
    <div className="App">
      <p>Todo List</p>
      <NewTask onSubmit={handleSubmitTask} />
      <MainTasks tasks={tasks} onCreateNewTask={setTasks} />
    </div>
  )
}

export default App
