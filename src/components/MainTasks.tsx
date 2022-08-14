import React from 'react'
import { Task } from '../App';

type Props = {
    tasks: Task;
    onCreateNewTask: any;
}

export default function MainTasks({ tasks, onCreateNewTask }: Props) {
    // const handleDeleteTask = (taskDeleted: string) => {
    //     const taskWithoutDeletedOne: string[] = tasks.filter((task) => task.content !== taskDeleted)

    //     onCreateNewTask(taskWithoutDeletedOne);
    // }

  return (
    <div>
        {
            tasks.map((task) => (
                <>
                    <p key={task.content}>{task.content}</p>
                    <button onClick={() => handleDeleteTask(task)}>Remover</button>
                </>
            ))
        }
    </div>
  )
}