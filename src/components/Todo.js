import React, { useState } from "react";
import AvatarSelector from "./AvatarSelector";
import studyImage from "./study.jpg";
import playImage from "./play.jpg";
import './Todo.css';
function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [taskImages, setTaskImages] = useState([]);
  const [newTask, setNewTask] = useState("");

  const avatarImages = [
    { src: studyImage, alt: "Image 1" },
    { src: playImage, alt: "Image 2" },
  ];

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "" && tasks.length < 7) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskImages((prevImages) => [...prevImages, null]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setTaskImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const handleImageSelect = (index, image) => {
    const updatedImages = [...taskImages];
    updatedImages[index] = image;
    setTaskImages(updatedImages);
  };

  const getTodoMessage = () => {
    const todoCount = tasks.length;
    switch (todoCount) {
      case 0:
        return "Let's get some work done!";
      case 1:
      case 2:
        return "Go you rockstar!";
      case 3:
      case 4:
        return "Keep pushing, you're doing great!";
      case 5:
      case 6:
        return "Almost there, stay focused and finish strong!";
      case 7:
        return "Take rest, enough work for the day!";
      default:
        return "Keep up the good work!";
    }
  };

  return (
    <div className="to-do-list">
      <h1>Plan Your Day!</h1>
      <p className="todo-message">{getTodoMessage()}</p>
      <div className="inp">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <div className="center">
        <AvatarSelector
          className="avatar-selector"
          images={avatarImages}
          onSelect={(image) => handleImageSelect(tasks.length, image)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
        </div>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {taskImages[index] && (
              <img
                src={taskImages[index].src}
                alt={taskImages[index].alt}
                className="task-image"
                style={{ width: "50px", height: "50px", objectFit: "cover" }} 
              />
            )}
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
