import React, { useState, useEffect } from 'react';
import Progress from './Progress';

const FileUpload = () => {
    const [tasks, setTasks] = useState([
        { id: 1, label: 'Task 1', progress: 0 },
        { id: 2, label: 'Task 2', progress: 0 },
        { id: 3, label: 'Task 3', progress: 0 },
      ]);
    
      
      useEffect(() => {
        const interval = setInterval(() => {
          setTasks((prevTasks) =>
            prevTasks.map((task) => {
              if (task.progress < 100) {
                return { ...task, progress: task.progress + Math.floor(Math.random() * 10) };
              }
              return task;
            })
          );
        }, 500);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-4">Multi-Task Progress</h1>
          {tasks.map((task) => (
            <Progress key={task.id} label={task.label} progress={task.progress} />
          ))}
        </div>
      );
    };
    export default FileUpload;