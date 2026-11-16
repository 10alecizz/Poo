import { Task } from "./Task.js";

class TaskManagerApp {
  constructor() {
    this.tasks = [];
    this.container = document.getElementById("task-container");
  }

  async init() {
    try {
      const response = await fetch("tasks.json");
      const data = await response.json();
      this.tasks = data.map((taskData) => new Task(taskData, () => this.render()));
      this.render();
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  }

  render() {
    this.container.innerHTML = "";
    this.tasks.forEach((task) => {
      this.container.appendChild(task.render());
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new TaskManagerApp();
  app.init();
});
